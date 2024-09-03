import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import App from './components/App';

import './styles/index.css';
import './styles/scrollbar.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <Toaster position="bottom-center" reverseOrder={true} />
    </BrowserRouter>
  </React.StrictMode>
);
