import path from 'path';

export default {
    entry: './index.jsx',
    output: {
        filename: 'bundle.js',
    },
    devServer:{
        open:true,
        inline:true,
        historyApiFallback: true
    },
    resolve: {
        extensions: ['.js','.jsx']
    },
    module: {
        rules: [{
            test: /\.jsx?/,
            loader:'babel-loader'
        }]
    }
}