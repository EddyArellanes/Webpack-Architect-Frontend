//normally, plugins are a nodejs packages, then we need to import them
const path = require('path')
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
        new MiniCssExtractPlugin({
            filename: "css/[name].css"
        })
    ],
    

}
/* 
You are using the style-loader, which, by default, embeds your CSS in Javascript and injects it at runtime.
If you want real CSS files instead of CSS embedded in your Javascript, you should use the ExtractTextPlugin.
*/