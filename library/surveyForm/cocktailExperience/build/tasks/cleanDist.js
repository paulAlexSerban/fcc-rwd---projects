import del from "del";

export const cleanDist = () => {
  return del([
    'dist'
  ])
};