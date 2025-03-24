const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  devtool: "eval-source-map", // Source maps para depuración
  devServer: {
    static: {
      directory: path.resolve(__dirname, "dist"),
    },
    watchFiles: ["./src/template.html"], // Detecta cambios en este archivo
    hot: true, // Recarga en vivo sin refrescar la página completa
    port: 3000, // Puedes cambiar el puerto si es necesario
    open: true, // Abre el navegador automáticamente
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: "./src/template.html",
      favicon: "./src/imgs/sushiLogo.png",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: "asset/resource",
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
    ],
  },
};
