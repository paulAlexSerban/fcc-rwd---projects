import { src, dest } from "gulp";
import { paths } from "../config/paths";
import plumber from "gulp-plumber";
import gulpResponsive from "gulp-responsive";

const imgRenditionConf = {
  "*": [
    {
      width: 320,
      rename: {
        suffix: "-320px",
        extname: ".webp",
      },
    },
    {
      width: 480,
      rename: { 
        suffix: "-480px", 
        extname: ".webp" },
    },
    {
      width: 960,
      rename: { 
        suffix: "-960px", 
        extname: ".webp" },
    },
    {
      width: 1440,
      rename: { 
        suffix: "-1440px", 
        extname: ".webp" },
    },
    {
      width: 1920,
      rename: { 
        suffix: "-1920px", 
        extname: ".webp" },
    },
    {
      rename: { 
        suffix: "-original", 
        extname: ".webp" },
    },
  ]
};

export const getImages = () => {
  return src(paths.src.imageEntries)
    .pipe(plumber())
    .pipe(
      gulpResponsive(imgRenditionConf, {
        quality: 70,
        progressive: true,
        withMetadata: false,
        withoutEnlargement: false
      })
    )
    .pipe(dest(paths.dist.imagesDistDir));
};

export const getIcons = () => {
  return src(paths.src.iconsEntries)
    .pipe(plumber())
    .pipe(dest(paths.dist.iconsDistDir));
};
