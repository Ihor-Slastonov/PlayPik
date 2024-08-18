import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import AuthLayout from './AuthLayout';
import SharedLayout from './SharedLayout/SharedLayout';

import NotFound from '../pages/NotFound';

const LoginPage = lazy(() => import('../pages/LoginPage'));
const RegisterPage = lazy(() => import('../pages/RegisterPage'));
const Home = lazy(() => import('../pages/Home'));
const TournamentPage = lazy(() => import('../pages/TournamentPage'));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={AuthLayout}>
        <Route index element={<LoginPage />} />
        <Route path="sign-up" element={<RegisterPage />} />
      </Route>

      {/* <Route path="/mode" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="/mode/tournament" element={<TournamentPage />} />
        <Route path="*" element={<NotFound />} />
      </Route> */}
    </Routes>
  );
};

export default App;
