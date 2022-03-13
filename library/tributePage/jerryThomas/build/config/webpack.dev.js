import webpack from "webpack";
import { jsLoader } from "../loaders/jsLoader";

const plugins = [new webpack.ProgressPlugin()];

export const webpackDevConfig = {
  mode: "development",
  cache: true,
  module: {
    rules: [jsLoader],
  },
  plugins: [...plugins],
};
