// @packages
import { render } from '@testing-library/react';

// @scripts
import { LoginScreen } from './login';

describe('LoginScreen unit testing', () => {
  it('should render correctly', () => {
    render(<LoginScreen />);
  });
});
