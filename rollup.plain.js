const typescript = require('rollup-plugin-typescript2');
const { terser } = require('rollup-plugin-terser');

export default {
  input: 'src/plain.ts',
  plugins: [
    typescript(),
    terser(),
  ],
  output: {
    format: 'cjs',
    file: 'dist/plain.js',
  },
  external: ['vue'],
}