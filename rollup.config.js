import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import image from "@rollup/plugin-image";
import terser from "@rollup/plugin-terser";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import { getFiles } from "./scripts/buildUtils";

const extensions = [".js", ".ts", ".jsx", ".tsx"];
const excludingFiles = [".stories.js"];

export default [
  {
    input: ["src/index.ts", ...getFiles("./src/components", extensions, excludingFiles)],
    output: {
      dir: "dist",
      format: "esm",
      preserveModules: true,
      preserveModulesRoot: "src",
      sourcemap: true,
    },
    plugins: [
      peerDepsExternal(),
      resolve(),
      commonjs(),
      typescript({
        tsconfig: "./tsconfig.build.json",
        declaration: true,
        declarationDir: "dist",
      }),
      terser(),
      image(),
    ],
    external: [
      "react",
      "react-dom",
      "styled-components",
      "react",
      "react-dom",
      "prop-types",
      "@emotion/react",
      "@emotion/styled",
      "@mui/icons-material",
      "@mui/material",
      "@mui/material/styles",
      "@mui/styles",
    ],
  },
];
