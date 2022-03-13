import del from "del";

export const cleanDevFiles = () => {
  return del([
    'dist/javascript/dev',
    'dist/styles/dev'
  ])
};
