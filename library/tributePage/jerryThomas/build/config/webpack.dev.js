import webpack from "webpack";
import { es5jsLoader } from "../loaders/jsLoader";

const plugins = [new webpack.ProgressPlugin()];

export const webpackDevConfig = {
  mode: "development",
  cache: true,
  module: {
    rules: [es5jsLoader],
  },
  plugins: [...plugins],
};
