import { defineConfig } from 'vitest/config';
export default defineConfig({
  test: {
    environment: 'node',
    globals: true,
    // testTimeout:5000,
    // globalSetup:['./src/globalTestSetup.ts'],
    // setupFiles:['./src/setupFiles.ts']
  },
});
