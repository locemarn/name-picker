import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {NamesProvider} from "./providers/name";
import {AppStateProvider} from "./providers/app-state";


import './css/style.css'


ReactDOM.render(
  <React.StrictMode>
    <NamesProvider>
      <AppStateProvider>
        <App />
      </AppStateProvider>
    </NamesProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
