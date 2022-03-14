const mix = require('laravel-mix');
const path = require('path');
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
mix.webpackConfig({
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "resources/js/")
        }
    }
});

mix.js('resources/js/app.js', 'public/js')
    .js('resources/js/router.js', 'public/js')
    .vue()
    .sass('resources/sass/app.scss', 'public/css')
    .postCss('resources/css/custome.css', 'public/css/custome.css');

let ImageminPlugin = require( 'imagemin-webpack-plugin' ).default;

mix.webpackConfig( {
    plugins: [
        new ImageminPlugin( {
//            disable: process.env.NODE_ENV !== 'production', // Disable during development
            pngquant: {
                quality: '95-100',
            },
            test: /\.(jpe?g|png|gif|svg)$/i,
        } ),
    ],
} )

mix.copy( 'resources/img', 'public/img', false );
