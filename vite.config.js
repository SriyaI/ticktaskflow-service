// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      entry: './src/index.js', // Ensure this path points to your main file
      formats: ['cjs'],         // Set CommonJS format for Node.js compatibility
    },
    target: 'node16',            // Ensure compatibility with Node.js
    outDir: 'dist',              // Output directory for the built files
    rollupOptions: {
      external: [
        'express', // Externalize dependencies here
      ],
      output: {
        entryFileNames: '[name].js', // Main entry file
      },
    },
    minify: false,               // Disable minification for easier debugging
  },
});
