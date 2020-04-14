import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './css/style.css'

import {NamesProvider} from "./providers/name";


ReactDOM.render(
  <React.StrictMode>
    <NamesProvider>
      <App />
    </NamesProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
