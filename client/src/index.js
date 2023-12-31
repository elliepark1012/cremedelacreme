import React from 'react';
import ReactDOM from 'react-dom/client';
import AppWithProvider from './App';

const rootElement = document.getElementById('root');

const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <AppWithProvider />
  </React.StrictMode>
);
