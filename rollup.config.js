import nodeResolve from '@rollup/plugin-node-resolve'
import autoExternal from 'rollup-plugin-auto-external'
import ts from 'rollup-plugin-ts'
import commonjs from '@rollup/plugin-commonjs'
import filesize from 'rollup-plugin-filesize'
import { terser } from 'rollup-plugin-terser'

import pkg from './package.json'

const development = process.env.ROLLUP_WATCH
const production = !development

export default [
  {
    input: 'src/index.ts',
    output: [
      { file: pkg.main, format: 'cjs' },
      { file: pkg.module, format: 'es' },
    ],
    plugins: [autoExternal(), ts(), production && filesize()],
  },
  {
    input: 'src/index.ts',
    output: {
      file: pkg.browser,
      name: 'PathInterpolation',
      format: 'umd',
      globals: {
        'svg-path-properties': 'svgPathProperties',
      },
    },
    plugins: [
      autoExternal(),
      ts(),
      nodeResolve({ extensions: ['.ts', '.js'] }),
      commonjs(),
      production && terser(),
      production && filesize(),
    ],
  },
]
