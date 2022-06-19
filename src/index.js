import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// context
import StateProvider from './helpers/context/StateProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StateProvider>
      <App />
    </StateProvider>
  </React.StrictMode>
);
