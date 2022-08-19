/* eslint-env node */
import { dirname, resolve } from "path";
import { fileURLToPath } from "url";
import HtmlWebpackPlugin from "html-webpack-plugin";
import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin";

const __dirname = dirname(fileURLToPath(import.meta.url));

function webpackConfig(_env, { mode }) {
  const isDevelopment = mode === "development";
  console.log(mode);

  return {
    mode,
    entry: "./src/index.tsx",
    devServer: {
      hot: true,
    },
    output: {
      path: resolve(__dirname, "./dist"),
      filename: "main.js",
    },
    module: {
      rules: [
        {
          test: /\.[jt]sx?$/,
          exclude: /node_modules/,
          use: [
            {
              loader: "babel-loader",
              options: {
                plugins: [isDevelopment && "react-refresh/babel"].filter(
                  Boolean
                ),
              },
            },
          ],
        },
        {
          test: /\.css$/i,
          use: ["style-loader", "css-loader"],
        },
        {
          test: /\.(jpe?g|png|gif|woff|woff2|otf|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
          use: [
            {
              loader: 'url-loader',
              options: {
                limit: 1000,
                name : 'assets/img/[name].[ext]'
              }
            }
          ]
        }

      ],
    },
    resolve: {
      extensions: [".tsx", ".ts", ".js"],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: resolve("src", "index.html"),
      }),
      isDevelopment && new ReactRefreshWebpackPlugin(),
    ].filter(Boolean),
  };
}

export default webpackConfig;
