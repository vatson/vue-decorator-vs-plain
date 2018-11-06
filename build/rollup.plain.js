const typescript = require('rollup-plugin-typescript2');

export default {
  input: 'src/plain.ts',
  plugins: [
    typescript(),
  ],
  output: {
    format: 'cjs',
    file: 'dist/plain.js',
  },
  external: ['vue'],
}