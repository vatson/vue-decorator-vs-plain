const nodeResolve = require('rollup-plugin-node-resolve');
const typescript = require('rollup-plugin-typescript2');
const commonjs = require('rollup-plugin-commonjs');
const { terser } = require('rollup-plugin-terser');

export default {
  input: 'src/decorated.ts',
  plugins: [
    commonjs(),
    typescript(),
    nodeResolve(),
    terser(),
  ],
  output: {
    format: 'cjs',
    file: 'dist/decorated.js',
  },
  external: ['vue'],
}