 const MiniCssExtractPlugin=require('mini-css-extract-plugin');

module.exports={
    entry: "./src/index.js",
   output: {
        filename: 'main.js'
    }, 
    plugins:[new MiniCssExtractPlugin()],
    
    module:{
        rules:[
        {
         test:/\.s[ac]ss$/i,
            use:["style-loader","css-loader",
                 {
                   loader: "sass-loader",
                     options:{
                         implementation:require("node-sass"),
                     }
          },
         ],
        },
            {test:/\.css$/,
             use:[
                 {loader:MiniCssExtractPlugin.loader,
                  options:{
                      esModule:true,
                  },
             },'css-loader']},
        ],   
    },
   
};