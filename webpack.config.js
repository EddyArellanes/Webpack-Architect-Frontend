//CommonJS Sintax
module.exports = {
    entry: './app/js/index.js',
    output: {
        filename: 'bundle.js'
    },
    module: {
        rules: [
            /*Here we put the Loaders
            test: Kind of files that I want to recognize
            use: What loader will be recognize the file
            */            
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            }
            
        ]
    }

}
/*By Default if you don't specify a folder for bundle js, the folder where will be create is dist
If you want to change the folder in output add for example:
const path= require('path')
And in output:
path: path.join(__dirname, 'public'),
*/