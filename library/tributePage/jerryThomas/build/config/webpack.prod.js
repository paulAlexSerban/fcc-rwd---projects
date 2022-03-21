import webpack from "webpack";
import { es5jsLoader } from "../loaders/jsLoader";

const plugins = [new webpack.ProgressPlugin()];

export const webpackProdConfig = {
  mode: "production",
  cache: true,
  module: {
    rules: [es5jsLoader],
  },
  plugins: [...plugins],
};
