const webpack = require('webpack');
const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
    entry: ['webpack/hot/poll?1000', './src/main.hmr.ts'],
    watch: true,
    target: 'node',
    externals: [
        nodeExternals({
            allowlist: ['webpack/hot/poll?1000'],
        }),
    ],
    module: {
        rules: [{
            test: /\.tsx?$/,
            use: 'ts-loader'
        }, ],
    },
    mode: "production",
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ],
    output: {
        path: path.join(__dirname, 'prod'),
        filename: 'nemateriarest.js',
    },
};