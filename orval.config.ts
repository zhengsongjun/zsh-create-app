// orval.config.ts
import { defineConfig } from 'orval';

export default defineConfig({
  api: {
    input: 'http://localhost:3000/api-docs-json',
    output: {
      target: 'src/services/api/index.ts',
      schemas: 'src/services/api/model',
      client: 'axios',
      override: {
        mutator: {
          path: 'src/utils/request.ts',
          name: 'request',
        },
      },
    },
  },
});
