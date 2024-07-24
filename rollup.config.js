import babel from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import nodeResolve from "@rollup/plugin-node-resolve";
import terser from "@rollup/plugin-terser";
import html from "rollup-plugin-generate-html-template"
import typescript from "@rollup/plugin-typescript";
import postcss from "rollup-plugin-postcss";
import cssimport from "postcss-import";
import livereload from "rollup-plugin-livereload";
import serve from "rollup-plugin-serve";
import replace from "@rollup/plugin-replace";
import autoprefixer from "autoprefixer";
import svg from "rollup-plugin-svg";
import svgr from "@svgr/rollup";

const DEV_MODE = {
  PROD: "production",
  DEV: "development"
};

const extensions = ['.js', '.jsx', '.ts', '.tsx'];

// module 확장하게되면 cjs, esm 모듈 분리해서 설정해야 함 
function setRollupConfig(input, output, format) {
  const devMode = process.env.DEV_MODE; // boolean

  const config = {
    input: './src/index.tsx',
    output: {
      file: './dist/bundle.js',
      format: 'iife',
      sourcemap: true
    },
    watch: {
      include: '*/**',
      exclude: 'node_modules/**'
    },
    external: ['scss'],
    plugins: [
      babel({
        babelHelpers: 'runtime',
        extensions,
        exclude: 'node_modules/**',
      }),
      nodeResolve({
        extensions
      }),
      commonjs({
        include: 'node_modules/**'
      }),
      !devMode && terser(),
      typescript({ 
        tsconfig: './tsconfig.json'
      }),
      postcss({
        extensions: ['.css', '.scss'],
        use: ['sass'],
        extract: true,
        sourceMap: true,
        minimize: true,
        plugins: [
          autoprefixer(),
          cssimport()
        ]
      }),
      html({
        template: './index.html',
        target: './dist/index.html'
      }),
      svg(),
      svgr(),
      replace({
        'process.env.NODE_ENV': devMode ? JSON.stringify(DEV_MODE.DEV) : JSON.stringify(DEV_MODE.PROD),
        preventAssignment: true
      }),
      devMode && livereload({
        watch: 'dist'
      }),
      devMode && serve({
        open: true,
        contentBase: ['dist'],
        port: 3000,
        historyApiFallback: true
      }),
    ],
  };

  return config;
};

export default [setRollupConfig()];