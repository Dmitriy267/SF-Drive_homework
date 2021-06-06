const path=require('path');
const HTMLWebpackPlugin=require("html-webpack-plugin");
const BrowserRouter = require("react-router-dom").BrowserRouter;
const Route = require("react-router-dom").Route;
const Link = require("react-router-dom").Link;
module.exports={
    entry: "./src/autorization.js",
    devServer: {
        contentBase: path.join(__dirname, '/dist'),
        port:3006,
          historyApiFallback: true,
    },
    output:{
        path:path.join(__dirname, '/dist'),
        filename: 'autorizationBundle.js'
    },
    module:{
        rules:[
            {
                test:/\.m?js$/,
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
                template:"./src/index.html" 
                              
                              })
    ]
}