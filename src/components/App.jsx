import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import AuthLayout from './AuthLayout/AuthLayout';
import ModeLayout from './ModeLayout/ModeLayout';

import NotFound from '../pages/NotFound';

const LoginPage = lazy(() => import('../pages/LoginPage'));
const RegisterPage = lazy(() => import('../pages/RegisterPage'));
const ClassicModePage = lazy(() => import('../pages/ClassicModePage'));
const TournamentPage = lazy(() => import('../pages/TournamentPage'));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<AuthLayout />}>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Route>

      <Route path="/mode" element={<ModeLayout />}>
        <Route index element={<ClassicModePage />} />
        <Route path="/mode/tournament" element={<TournamentPage />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
