// @packages
import { Suspense } from 'react';

// @scripts
import { RootRouter } from '../router';

export const App = () => {
  return (
    <Suspense fallback={<div>...</div>}>
      <RootRouter />
    </Suspense>
  );
};
