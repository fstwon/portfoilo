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
import postcssUrl from "postcss-url";

const extensions = ['.js', '.jsx', '.ts', '.tsx'];

// module 확장하게되면 cjs, esm 모듈 분리해서 설정해야 함 
function setRollupConfig(input, output, format) {
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
      terser(),
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
          cssimport(),
          postcssUrl({
            url: "inline",
          })
        ]
      }),
      html({
        template: './index.html',
        target: './dist/index.html'
      }),
      svg(),
      svgr(),
      replace({
        'process.env.NODE_ENV': JSON.stringify('production'),
        preventAssignment: true
      }),
      livereload({
        watch: 'dist'
      }),
      serve({
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