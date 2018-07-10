//normally, plugins are a nodejs packages, then we need to import them
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
    entry: {
        main: './app/js/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/bundle.js',
        publicPath: './dist/'
    },
    devServer: {       
        contentBase: './dist',
        compress: true,
        open: false,
        port: 3000,
        publicPath: "/dist"
    },
    module: {
        rules: [
            /*Here we put the Loaders
            test: Kind of files that I want to recognize
            use: What loader will be recognize the file
            */
            //Javascript Loaders
            //It's a little more complex than css
            {
                test: /\.(png|jpg|gif|woff|eot|ttf|svg)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        // 2 Megabytes                  
                        limit: 2097152,                         
                        name: 'img/[name].ext'
                    }
                }
            },
            {
                test: /\.(webm|mp4)$/,
                use: {
                    loader: 'url-loader',
                    options: {      
                        //1 Megabyte                           
                        limit: 1048576,
                        name: 'videos/[name].[hash].[ext]'
                    }
                }
            },
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['babel-preset-env']
                    }
                },
            },            
            //Css Loaders
            {
                test: /\.css$/,
                use: [
                  //Add support in css for VueJs Inline Styles, If you are not using Vue, delete it
                  'vue-style-loader',
                  'css-loader'
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                  ],
            },
            //VueJs Loader
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                  loaders: {                       
                    'scss': 'vue-style-loader!css-loader!sass-loader',
                    'sass': 'vue-style-loader!css-loader!sass-loader?indentedSyntax'
                  }
                }
            },
            
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
        }),
        new VueLoaderPlugin()
    ],
    //Webpack 4 feature, simplify stuff like prevent duplicated code

    optimization: {
        //SplitChunks will generate new file with code used in many files to avoid duplicate code
        splitChunks: {
            //Will generate a common.js, common.css, etc... 
            name: "common",
            chunks: "initial"
        }
    }
    

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
babel-core : Indicates the way yo transpile
babel-preset-env: Targets the ECMA version to transpile

Images
url-loader : A loader for webpack which transforms files into base64 URIs. Useful for optimize css and js when you need  to import files
file-loader: Specifies an alternative loader to use when a target file's size exceeds the limit set in the limit option. maximum size of a file in bytes

Videos
Repeat the code of images only change types and limit

Fonts
To support fonts in the process of webpack the only thing we need is in url-loader add
woff|eot|ttf|svg
I have downloaded fonts from
https://www.fontsquirrel.com specify open sans webkit to support to display font without the need for the user to have it installed


Json
Webpack 4 handles Json by default


Frameworks
Vuejs
vue-loader: To recognize VueJs Commponents called Single-File Components (SFCs). .Vue extensions
vue-template-compiler: his package can be used to pre-compile Vue 2.0 templates into render functions 
vue-style-loader: To load styles inside Components .Vue

ReactJs
babel-preset-react: To transpile React to Js
react: Core of Library
react-dom: Needed to render into Html React 
And in babel-loader
presets:['es2015','react']

*/

