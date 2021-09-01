// @packages
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

// @scripts
import { RootRouter } from './root-router';

describe('RootRouter unit testing', () => {
  it('should render correctly', () => {
    render(
      <MemoryRouter>
        <RootRouter />
      </MemoryRouter>,
    );
  });
});
