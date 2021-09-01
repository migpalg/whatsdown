// @packages
import { render } from '@testing-library/react';

// @scripts
import { App } from './app';

describe('App unit testing', () => {
  it('should render correctly', () => {
    render(<App />);
  });
});
