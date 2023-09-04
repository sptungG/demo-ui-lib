import commonjs from "@rollup/plugin-commonjs";
import { terser } from "rollup-plugin-terser";
import resolve from "@rollup/plugin-node-resolve";
import babel from "rollup-plugin-babel";
import external from "rollup-plugin-peer-deps-external";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import replace from "@rollup/plugin-replace";

const env = process.env.NODE_ENV;

const plugins = [
  external(),
  babel({
    exclude: "node_modules/**",
  }),
  typescript({ tsconfig: "./tsconfig.json" }),
  resolve(),
  replace({
    "process.env.NODE_ENV": JSON.stringify("production"),
  }),
  commonjs(),
  terser(),
];

const packageJson = require("./package.json");
export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
      },
      {
        file: packageJson.module,
        format: "esm",
      },
    ],
    plugins: plugins,
  },
  {
    input: "src/index.ts",
    output: [
      {
        file: packageJson.types,
        format: "esm",
      },
    ],
    plugins: [dts()],
  },
];
