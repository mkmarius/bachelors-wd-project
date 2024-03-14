const mix = require("laravel-mix");
/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js("resources/js/app.js", "public/js")
    .vue()
    .sass("resources/sass/app.scss", "public/css")
    .alias({ "~": "resources/sass" });

mix.babelConfig({
    plugins: [
        "@babel/plugin-syntax-top-level-await",
        "@babel/plugin-transform-regenerator",
    ],
});

mix.webpackConfig({
    experiments: {
        topLevelAwait: true,
    },
    // resolve: {
    //     modules: ["babel-polyfill", "./app.js"],
    // },
});
