import React from 'react';
import ReactDOM from 'react-dom/client';

import "normalize-css"
import "./css/styles.css"

// Components
import App from './App';

// Data
import {names} from "./data"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App names={names}/>
  </React.StrictMode>
);

