// @packages
import ReactDOM from 'react-dom';
import React from 'react';
import { ApolloProvider } from '@apollo/client';

// @scripts
import { App, client } from './core';

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('app'),
);
