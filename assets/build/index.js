import { task, parallel, series } from "gulp";
import { loadIcons } from "./tasks/loadIcons";
import { createImageRenditions } from "./tasks/createImageRenditions";
import { loadImages } from "./tasks/loadImages";

task("icons:load", loadIcons);
task("images:createRenditions", createImageRenditions);
task("images:load", loadImages);

task(
  "assets:load",
  parallel("icons:load", series("images:createRenditions", "images:load"))
);
