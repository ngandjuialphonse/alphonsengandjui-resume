// src/components/AppContent.tsx
import { Routes, Route } from 'react-router-dom';
import { Suspense } from 'react';
import { Header } from './Layout/Header';
import Home from '../pages/Home';
import { Loading } from './shared/Loading';

export const AppContent = () => {
  return (
    <>
      <Header />
      <main className="pt-20">
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Suspense>
      </main>
    </>
  );
};