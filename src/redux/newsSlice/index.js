import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { getTopHeadlinesNewsApi, getEverythingNewsApi } from '../../api';

const initialState = {
  loading: false,
  response: {
    status: '',
    totalResults: 0,
    articles: [],
  },
  error: null,
  currentRequestId: undefined,
  totalArticles: [],
  isEnd: false,
};

export const getCategoryNewsAction = createAsyncThunk(
  'news/getCategoryNews',
  async ({ category, page }, thunkAPI) => {
    const res =
      category === 'global'
        ? await getEverythingNewsApi({ page })
        : await getTopHeadlinesNewsApi({ category, page });

    if (res.status === 200 && res.data.status === 'ok') {
      return res.data;
    } else {
      return thunkAPI.rejectWithValue(res);
    }
  }
);

export const getSearchNewsAction = createAsyncThunk(
  'news/getSearchNews',
  async ({ keywords, page }, thunkAPI) => {
    const res = await getEverythingNewsApi({ keywords, page });

    if (res.status === 200 && res.data.status === 'ok') {
      return res.data;
    } else {
      return thunkAPI.rejectWithValue(res);
    }
  }
);

const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    resetNewsAction: (state) => {
      state.loading = initialState.loading;
      state.response = initialState.response;
      state.error = initialState.error;
      state.currentRequestId = initialState.currentRequestId;
      state.totalArticles = initialState.totalArticles;
      state.isEnd = initialState.isEnd;
    },
    cleanTotalArticlesAction: (state) => {
      state.totalArticles = initialState.totalArticles;
      state.isEnd = initialState.isEnd;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCategoryNewsAction.pending, (state, action) => {
        state.loading = true;
        state.response = initialState.response;
        state.error = initialState.error;
        state.currentRequestId = action.meta.requestId;
      })
      .addCase(getCategoryNewsAction.fulfilled, (state, action) => {
        if (state.currentRequestId === action.meta.requestId) {
          state.loading = false;
          state.response = action.payload;
          state.totalArticles = [
            ...state.totalArticles,
            ...action.payload.articles,
          ];
          state.isEnd = action.payload.articles.length === 0;
        }
      })
      .addCase(getCategoryNewsAction.rejected, (state, action) => {
        if (state.currentRequestId === action.meta.requestId) {
          state.loading = false;
          state.error = action.payload;
        }
      })
      .addCase(getSearchNewsAction.pending, (state, action) => {
        state.loading = true;
        state.response = initialState.response;
        state.error = initialState.error;
        state.currentRequestId = action.meta.requestId;
      })
      .addCase(getSearchNewsAction.fulfilled, (state, action) => {
        if (state.currentRequestId === action.meta.requestId) {
          state.loading = false;
          state.response = action.payload;
          state.totalArticles = [
            ...state.totalArticles,
            ...action.payload.articles,
          ];
          state.isEnd = action.payload.articles.length === 0;
        }
      })
      .addCase(getSearchNewsAction.rejected, (state, action) => {
        if (state.currentRequestId === action.meta.requestId) {
          state.loading = false;
          state.error = action.payload;
        }
      });
  },
});

export const { resetNewsAction, cleanTotalArticlesAction } = newsSlice.actions;
export default newsSlice.reducer;
