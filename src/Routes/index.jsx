import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from '@src/Pages/home';
import MainLayout from '@src/Layout/main';

const AppRoutes = () => {
  return (
    <BrowserRouter basename={'portfolio'}>
      <MainLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
};

export default AppRoutes;
