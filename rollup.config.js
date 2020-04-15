import { terser } from 'rollup-plugin-terser';

export default [
  {
    input: 'src/index.js',
    plugins: [terser()],
    output: {
      file: 'umd/dm_string_lib.js',
      format: 'umd',
      name: 'dm_string_lib',
    },
  },
  {
    input: 'src/index.js',
    output: {
      file: 'esm/index.js',
      format: 'esm',
    },
  },
];
