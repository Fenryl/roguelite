import nodeResolve from "rollup-plugin-node-resolve"
import replace from "rollup-plugin-replace"

const DEBUG = process.env.DEBUG

export default {
  entry: "src/index.js",
  dest: "static/bundle.js",
  format: "iife",
  plugins: [
    nodeResolve(),
    replace({
      sourceMap: DEBUG,
      values: {
        __DEV__: DEBUG,
      },
    }),
  ],
  globals: {
    "rot": "ROT",
  },
  external: [
    "rot"
  ],
  sourceMap: DEBUG,
}
