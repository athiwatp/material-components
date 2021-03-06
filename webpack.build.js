var config = require('./webpack.config.js');

var webpack = require('webpack');
var optimist = require('optimist');
var pkg = require('./package.json');

var ExtractTextPlugin = require('extract-text-webpack-plugin');

var ENV = optimist.argv.env || 'dev';

/**
 * Entry + output
 */
if (ENV === 'dist') {
    config.entry = './src/components/library.ts';

    config.output = {
        filename: `./dist/${pkg.name}.js`,
        library: `${pkg.library}`,
        libraryTarget: 'umd'
    };
    config.plugins.push(new ExtractTextPlugin(`./dist/${pkg.name}.css`))
}
else {
    config.entry = './src/docs/index.ts';

    config.output = {
        filename: `./docs/${pkg.name}.js`,
        library: `${pkg.library}Docs`,
        libraryTarget: 'umd'
    };
    config.plugins.push(new ExtractTextPlugin(`./docs/${pkg.name}.css`))
}

/**
 * ENV
 */
config.plugins.push(new webpack.DefinePlugin({
    'process.env': {
        NODE_ENV: `"${ENV}"`
    }
}));

/**
 * Dist
 */
if (ENV == 'dist') {
/*
https://github.com/webpack/webpack/issues/537
minify with npm
    config.plugins.push(new webpack.optimize.UglifyJsPlugin({
        minimize: true,
        sourceMap: false,
        compress: {
            warnings: false
        }
    }))
*/
}
/**
 * devtool
 */
if (ENV != 'dist') {
    config.devtool = 'source-map'
}

module.exports = config;
