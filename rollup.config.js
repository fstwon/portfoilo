import babel from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import nodeResolve from "@rollup/plugin-node-resolve";
import terser from "@rollup/plugin-terser";
import html from "rollup-plugin-generate-html-template"
import typescript from "@rollup/plugin-typescript";
import postcss from "rollup-plugin-postcss";
import livereload from "rollup-plugin-livereload";
import serve from "rollup-plugin-serve";
import replace from "@rollup/plugin-replace";

const DEV_MODE = {
  PROD: "production",
  DEV: "development"
}

// module 확장하게되면 cjs, esm 모듈 분리해서 설정해야 함 
function setRollupConfig() {
  const extensions = ['.js', '.jsx', '.ts', '.tsx'];

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
    plugins: [
      babel({
        babelHelpers: 'runtime',
        extensions,
        exclude: 'node_modules/**',
      }),
      nodeResolve({extensions}),
      commonjs({
        include: 'node_modules/**'
      }),
      !devMode && terser(),
      typescript({ tsconfig: './tsconfig.json'}),
      postcss({
        plugins: [],
        minimize: true
      }),
      html({
        template: './index.html',
        target: './dist/index.html'
      }),
      livereload({
        watch: 'dist'
      }),
      devMode && serve({
        open: true,
        contentBase: ['dist'],
        port: 3000
      }),
      devMode && replace({
        'process.env.NODE_ENV': process.env.DEV_MODE ? JSON.stringify(DEV_MODE.DEV) : JSON.stringify(DEV_MODE.PROD),
        preventAssignment: true
      })
    ],
  };

  return config;
};

export default [setRollupConfig()];