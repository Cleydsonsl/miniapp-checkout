import React from 'react';
import { Federated } from '@callstack/repack/client';

const importModule = (module, file) => (
  React.lazy(() => process.env.STANDALONE ? (
    Federated.importModule(module, `./${file}`)
  ) : (
    import(`${module}/${file}`)
  ))
)

export default importModule