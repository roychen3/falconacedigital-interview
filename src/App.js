import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Layout from './components/layout';

import News from './pages/news';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path='breaking_news' element={<News />}></Route>
        <Route path='search' element={<News />}></Route>
        <Route
          path='*'
          element={<Navigate to='breaking_news?category=hot' />}
        />
      </Routes>
    </Layout>
  );
}

export default App;
