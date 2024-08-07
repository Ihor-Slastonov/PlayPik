import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './components/App';

import './styles/index.css';
import './styles/scrollbar.css';
import { PlayPikProvider } from './provider/PlapPikProvider';
import { Toaster } from 'react-hot-toast';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <PlayPikProvider>
        <App />
        <Toaster />
      </PlayPikProvider>
    </BrowserRouter>
  </React.StrictMode>
);
