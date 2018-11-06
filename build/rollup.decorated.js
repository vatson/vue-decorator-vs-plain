const nodeResolve = require('rollup-plugin-node-resolve');
const typescript = require('rollup-plugin-typescript2');
const commonjs = require('rollup-plugin-commonjs');

export default {
  input: 'src/decorated.ts',
  plugins: [
    commonjs(),
    typescript(),
    nodeResolve(),
  ],
  output: {
    format: 'cjs',
    file: 'dist/decorated.js',
  },
  external: ['vue'],
}