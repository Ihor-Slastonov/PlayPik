import { Route, Routes } from 'react-router-dom';

import Home from '../pages/Home';
import TournamentPage from '../pages/TournamentPage';
import SharedLayout from './SharedLayout/SharedLayout';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="/tournament" element={<TournamentPage />} />
      </Route>
    </Routes>
  );
};

export default App;
