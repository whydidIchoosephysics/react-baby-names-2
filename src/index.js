import React from 'react';
import ReactDOM from 'react-dom/client';

import "normalize-css"
import "./css/styles.css"

// Components
import App from './App';
import { NamesProvider } from "./providers/names"

// Data


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <NamesProvider>
          <App />
      </NamesProvider>
  </React.StrictMode>
);

