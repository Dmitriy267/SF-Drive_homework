const path=require('path');
const HTMLWebpackPlugin=require("html-webpack-plugin");
module.exports={
    entry:'./src/qustions.js', /*'./src/index.js',*/ 
    devServer: {
        contentBase: path.join(__dirname, '/dist'),
        port:3006,
    },
    output:{
        path:path.join(__dirname, '/dist'),
        filename:'qustionsBundle.js' /*'bundle.js'*/
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                exclude: /node_modules/,
                use:{
                    loader:'babel-loader'
                }
            },
            {
                test:/\.css$/,
                use: ["style-loader","css-loader"]
            },
            {
                test:/\.(png|jpe?g|gif)$/i,
                use:[
                    {
                        loader: 'file-loader',
                    },
                ],
            }
        ]
    },
    plugins:[
        new HTMLWebpackPlugin({
                template:  './src/qustions.html' /*"./src/index.html" */
                              
                              })
    ]
}