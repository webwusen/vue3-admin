import path from 'path';

const pathResolve = (pathStr) => {
  return path.resolve(__dirname, pathStr);
};

module.exports = {
  alias: {
    '/@/': pathResolve('./src')
  }
}
