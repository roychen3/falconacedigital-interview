import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Layout from './components/layout';

import News from './pages/news';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path='news' element={<News />}></Route>
        <Route
          path='*'
          element={<Navigate to='news?category=hot' />}
        />
      </Routes>
    </Layout>
  );
}

export default App;
