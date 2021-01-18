const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix
    .js('resources/js/app.js', 'public/js')
    .js('resources/js/theme.js', 'public/js')
    .vue(3)
    .sass('resources/css/styles.scss', 'public/css')
    .webpackConfig(webpack => {
        return {
            resolve: {
                extensions: ['.js', '.vue', '.json'],
                alias: {
                    '@': __dirname + '/resources/js'
                },
            },
            plugins: [
                new webpack.ProvidePlugin({
                    $: 'jquery',
                    jQuery: 'jquery',
                    'window.jQuery': 'jquery',
                }),
                new webpack.DefinePlugin({
                    // Drop Options API from bundle
                    __VUE_OPTIONS_API__: false,
                    __VUE_PROD_DEVTOOLS__: false,
                }),
            ],
            module: {
                rules: [
                    {
                        enforce: 'pre',
                        exclude: /node_modules/,
                        loader: 'eslint-loader',
                        test: /\.(js|vue)?$/,
                        options: {
                            emitWarning: true,
                        },
                    },
                ],
            },
        };
    });
