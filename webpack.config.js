const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

// Set different CSS extraction for editor only and common block styles
const blocksCSSPlugin = new ExtractTextPlugin({
    filename: './Assets/dist/css/blocks.style.css',
});
const editBlocksCSSPlugin = new ExtractTextPlugin({
    filename: './Assets/dist/css/blocks.editor.css',
});

// Configuration for the ExtractTextPlugin.
const extractConfig = {
    use: [
        { loader: 'raw-loader' },
        {
            loader: 'postcss-loader',
            options: {
                plugins: [require('autoprefixer')],
            },
        },
        {
            loader: 'sass-loader',
            query: {
                outputStyle:
                    'production' === process.env.NODE_ENV ? 'compressed' : 'nested',
            },
        },
    ],
};


module.exports = {
    entry: {
        './Assets/dist/js/editor.blocks': './blocks/index.js',
        // './Assets/dist/js/frontend.blocks' : './blocks/frontend.js',
    },
    output: {
        path: path.resolve(__dirname),
        filename: '[name].js',
    },
    watch: true,
    watchOptions: {
        poll: true
    },
    devtool: 'cheap-eval-source-map',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /style\.s?css$/,
                use: blocksCSSPlugin.extract(extractConfig),
            },
            {
                test: /editor\.s?css$/,
                use: editBlocksCSSPlugin.extract(extractConfig),
            },
        ],
    },
    plugins: [
        blocksCSSPlugin,
        editBlocksCSSPlugin,
    ],
    externals: {
        'react': 'React',
        'react-dom': 'ReactDOM'
    },
};
