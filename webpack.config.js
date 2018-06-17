//CommonJS Sintax
module.exports = {
    entry: './app/js/index.js',
    output: {
        filename: 'bundle.js'
    }
}
/*By Default if you don't specify a folder for bundle js, the folder where will be create is dist
If you want to change the folder in output add for example:
path: path.join(__dirname, 'public'),
*/