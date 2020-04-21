import { terser } from 'rollup-plugin-terser';
// import resolve from 'rollup-plugin-node-resolve';
// import commonjs from 'rollup-plugin-commonjs'
import builtins from 'rollup-plugin-node-builtins';
export default {
  input: 'src/index.js',
  output: {
    file: './dist/ywy_utils.js',
    name: 'YWYUtils',
    format: 'umd'
  },
  plugins: [
    // resolve(),
    // commonjs(),
    builtins(),
    terser() // 压缩
  ],
};