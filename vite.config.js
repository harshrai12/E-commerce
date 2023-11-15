

import { defineConfig } from 'vite';

export default defineConfig({
  resolve: {
    alias: {
      'react-redux': '/node_modules/react-redux/dist/react-redux.min.js',
    },
  },
});
