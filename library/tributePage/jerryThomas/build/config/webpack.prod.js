import webpack from "webpack";
import { jsLoader } from "../loaders/jsLoader";

const plugins = [new webpack.ProgressPlugin()];

export const webpackProdConfig = {
  mode: "production",
  cache: true,
  module: {
    rules: [jsLoader],
  },
  plugins: [...plugins],
};
