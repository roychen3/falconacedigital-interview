import { combineReducers } from '@reduxjs/toolkit';

import newsSlice from './newsSlice';

const rootReducer = combineReducers({
  newsSlice,
});

const reducer = (state, action) => {
  switch (action.type) {
    default:
      return rootReducer(state, action);
  }
};

export default reducer;
