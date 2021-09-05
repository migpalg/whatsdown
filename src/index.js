// @packages
import { ApolloProvider } from '@apollo/client';
import { StrictMode } from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

// @scripts
import { App, client } from './core';

// @styles
import './core/scss/globals.scss';

render(
  <StrictMode>
    <BrowserRouter>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </BrowserRouter>
  </StrictMode>,
  document.getElementById('app'),
);
