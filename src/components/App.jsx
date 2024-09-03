import { lazy, useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';

import AuthLayout from './AuthLayout/AuthLayout';
import ModeLayout from './ModeLayout/ModeLayout';

import NotFound from '../pages/NotFound';
import PrivateRoute from './PrivateRoute/PrivateRoute';

import { selectIsRefreshing } from '../zustand/auth/authSelectors';
import { refreshUser } from '../zustand/auth/authOperations';

const LoginPage = lazy(() => import('../pages/LoginPage'));
const RegisterPage = lazy(() => import('../pages/RegisterPage'));
const ClassicModePage = lazy(() => import('../pages/ClassicModePage'));
const TournamentPage = lazy(() => import('../pages/TournamentPage'));

const App = () => {
  const navigate = useNavigate();
  const isRefreshing = selectIsRefreshing();

  useEffect(() => {
    refreshUser(navigate);
  }, []);

  return isRefreshing ? (
    'Fetching user data'
  ) : (
    <Routes>
      <Route path="/" element={<AuthLayout />}>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Route>

      <Route path="/mode" element={<ModeLayout />}>
        <Route index element={<ClassicModePage />} />
        <Route
          path="/mode/tournament"
          element={
            <PrivateRoute component={TournamentPage} redirectTo="/login" />
          }
        />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
