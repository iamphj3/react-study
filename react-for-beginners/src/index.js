import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App';
import CoinTracker from './CoinTracker';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <CoinTracker />
  </React.StrictMode>
);

