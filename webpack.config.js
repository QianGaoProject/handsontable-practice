const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    entry: {
        app: ["./src/index.tsx"],
        vendor: ["react", "react-dom"]
    },
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "js/[name].bundle.js"
    },
    // https://webpack.js.org/configuration/devtool/
    devtool: "source-map",
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx", ".json"]
    },
    devServer: {
        contentBase: path.join(__dirname, "build"),
        hot: true,
        port: 8000,
        // liveReload: true,
    },

    module: {
        rules: [{
                test: /\.(js|ts)x?$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: ["style-loader", "css-loader", "sass-loader"]
            },
            //https://www.fontsquirrel.com/fonts/merriweather
            {
                test: /\.(ttf|woff|woff2|eot|svg)$/,
                exclude: /node_modules/,
                loader: "url-loader",
                options: {
                    publicPath: "./",
                    name: "./fonts/[name].[ext]",
                    limit: 1000
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        })
    ]
}