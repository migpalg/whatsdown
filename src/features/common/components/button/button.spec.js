// @packages
import { render } from '@testing-library/react';

// @scripts
import { Button } from './button';

describe('Button unit testing', () => {
  it('should render correctly', () => {
    render(<Button />);
  });
});
