// @packages
import ReactDOM from 'react-dom';
import React from 'react';
import { ApolloProvider } from '@apollo/client';
import { BrowserRouter } from 'react-router-dom';

// @scripts
import { App, client } from './core';

// @styles
import './core/scss/globals.scss';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('app'),
);
