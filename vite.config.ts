import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// ! install @types/node for the following to work when using TypeScript
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      assets: path.resolve(__dirname, 'src/assets'),
      components: path.resolve(__dirname, 'src/components'),
      styles: path.resolve(__dirname, 'src/styles'),
      fonts: path.resolve(__dirname, 'src/fonts'),
      context: path.resolve(__dirname, 'src/context'),
      utils: path.resolve(__dirname, 'src/utils')
    }
  },
  build: {
    lib: {
      entry: 'src/index.ts',       // * main export file of your components
      name: 'ReactDynamicForm',    // * global name if used in a <script> tag
      fileName: (format) => `react-dynamic-form.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom'], // ? Prevents Vite from bundling React into your library. Why? Consumers already have React installed. Bundling React can cause duplicate React errors.
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
});
