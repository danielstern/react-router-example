import path from 'path';

export default {
    entry: './index.jsx',
    // entry: path.resolve(__dirname,'index.jsx'),
    output: {
        // path: path.resolve(__dirname,'dist'),
        filename: 'bundle.js',
        // publicPath: '/',
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