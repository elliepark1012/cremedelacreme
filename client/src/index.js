import React from 'react';
import ReactDOM from 'react-dom';
import AppWithProvider from './App'; // Import your AppWithProvider component

ReactDOM.render(
  <React.StrictMode>
    <AppWithProvider /> {/* Render your AppWithProvider component */}
  </React.StrictMode>,
  document.getElementById('root')
);