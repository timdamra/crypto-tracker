import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';

import './index.css';

import { App } from './App';
import { StateContextProvider } from './state';

const container = document.getElementById('root');

// Create a root.
const root = ReactDOMClient.createRoot(container!);

root.render(
  <React.StrictMode>
    <StateContextProvider>
      <Router>
        <App />
      </Router>
    </StateContextProvider>
  </React.StrictMode>
);
