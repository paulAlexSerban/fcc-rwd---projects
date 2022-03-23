import webpack from "webpack";
import { es6jsLoader } from "../loaders/jsLoader";

const plugins = [new webpack.ProgressPlugin()];

export const webpackProdConfig = {
  mode: "production",
  cache: true,
  module: {
    rules: [es6jsLoader],
  },
  plugins: [...plugins],
};
