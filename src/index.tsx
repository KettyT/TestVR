import React from 'react';
import ReactDOM from 'react-dom/client';
import AppHeader from './AppHeader';
import AppBody from './AppBody'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <AppHeader />
    <AppBody />
  </React.StrictMode>
);
