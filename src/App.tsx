// src/App.tsx
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Header } from './components/Layout/Header';
import { Loading } from './components/shared/Loading';
import { ErrorBoundary } from './components/shared/ErrorBoundary';
import { PageTransition } from './components/shared/PageTransition';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';
import Home from './pages/Home';

const routes = [
  { path: '/', component: lazy(() => import('./pages/Home')), name: 'Home' },
  { path: '/about', component: lazy(() => import('./pages/About')), name: 'About' },
  { path: '/experience', component: lazy(() => import('./pages/Experience')), name: 'Experience' },
  { path: '/projects', component: lazy(() => import('./pages/Projects')), name: 'Projects' },
  { path: '/contact', component: lazy(() => import('./pages/Contact')), name: 'Contact' },
  { path: '/education', component: lazy(() => import('./pages/Education')), name: 'Education' }
];

function AppContent() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <ErrorBoundary>
          <Suspense fallback={<Loading />}>
            <AnimatePresence mode="wait">
              <Routes location={location} key={location.pathname}>
                {routes.map(({ path, component: Component }) => (
                  <Route
                    key={path}
                    path={path}
                    element={
                      <PageTransition>
                        <Component />
                      </PageTransition>
                    }
                  />
                ))}
                <Route path="*" element={<PageTransition><Home /></PageTransition>} />
              </Routes>
            </AnimatePresence>
          </Suspense>
        </ErrorBoundary>
      </main>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <HashRouter>
          <AppContent />
        </HashRouter>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;