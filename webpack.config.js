//normally, plugins are a nodejs packages, then we need to import them
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    entry: {
        main: './app/js/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/bundle.js'
    },
    devServer: {       
        contentBase: './dist',
        compress: true,
        open: true,
        port: 3000,
        publicPath: "/dist"
    },
    module: {
        rules: [
            /*Here we put the Loaders
            test: Kind of files that I want to recognize
            use: What loader will be recognize the file
            */            
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                  ],
            }
            
        ]
    },
    plugins: [
        //Plugins here, algo you can use [name] in the name of file and the output filename will be the same as the entry
        new HtmlWebpackPlugin({
            template: __dirname + '/dist/index.html',
            filename: 'index.html'
        }),
        new MiniCssExtractPlugin({
            filename: "css/[name].css"
        })
    ],
    

}
/* 
Webpack Minimalist Configuration with all you need to begin a Frontend Architect
webpack-dev-server: For set up Local Server with Watch and Hot Reload

HTML Plugin for Hot Reloading
html-webpack-plugin

Css Loader for Transpile Css and Precompilers Like SASS
css-loader: Recognize css files
style-loader: Recognize inline styles of css
sass-loader: Recognize scss files
node-sass: Transspile scss to css
mini-css-extract-plugin: Get the final production css file

Javascript Loader for Transpile all new features to ES5
babel-loader : Charge Javascript files
core-babel : Indicates the way yo transpile
babel-preset-env: Targets the ECMA version to transpile
*/