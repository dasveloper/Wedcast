const path = require('path');
const port = process.env.PORT || 3000;
const outputPath = path.join(__dirname, "dist")
const ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
    entry: './src/app.js',
    output: {
        path: outputPath,
        filename: 'dist/bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    use: 'css-loader!sass-loader'
                }),
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/, 
                query: {
                    presets:['es2015','react']
                }
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("dist/bundle.css"),
    ],
    devServer: {
        port,
    }
}