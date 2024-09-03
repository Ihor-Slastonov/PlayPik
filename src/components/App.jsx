import { lazy, useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';

import AuthLayout from './AuthLayout/AuthLayout';
import ModeLayout from './ModeLayout/ModeLayout';

import NotFound from '../pages/NotFound';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import RestrictedRoute from './RestrictedRoute/RestrictedRoute';

import { selectIsRefreshing } from '../zustand/auth/authSelectors';
import { refreshUser } from '../zustand/auth/authOperations';
import useHydration from '../utils/hooks/useHydration';

const LoginPage = lazy(() => import('../pages/LoginPage'));
const RegisterPage = lazy(() => import('../pages/RegisterPage'));
const ClassicModePage = lazy(() => import('../pages/ClassicModePage'));
const TournamentPage = lazy(() => import('../pages/TournamentPage'));

const App = () => {
  const navigate = useNavigate();
  const isRefreshing = selectIsRefreshing();
  const hydrated = useHydration();

  useEffect(() => {
    if (hydrated) {
      refreshUser(navigate);
    }
  }, [hydrated, navigate]);
  if (!hydrated) {
    return <p>Loading...</p>;
  }

  return isRefreshing ? (
    'Fetching user data'
  ) : (
    <Routes>
      <Route path="/" element={<AuthLayout />}>
        <Route
          path="/login"
          element={
            <RestrictedRoute commponent={LoginPage} redirectTo="/mode" />
          }
        />
        <Route
          path="/register"
          element={
            <RestrictedRoute commponent={RegisterPage} redirectTo="/mode" />
          }
        />
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
