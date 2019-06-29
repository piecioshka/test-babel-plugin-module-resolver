const path = require('path');

module.exports = {
    mode: 'development',
    entry: path.join(__dirname, 'src', 'main.js'),
    output: {
        path: path.resolve('dist')
    },
    module: {
        rules: [
            {
                test: (/\.js$/),
                exclude: (/node_modules/),
                loader: 'babel-loader'
            }
        ]
    }
}