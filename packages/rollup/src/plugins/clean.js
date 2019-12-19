const path = require(`path`);
const fs = require(`fs-extra`);

module.exports = dest => {
  return {
    name: `clean`,
    buildStart() {
      const cwd = process.cwd();
      const destDir = path.join(cwd, dest);
      fs.removeSync(destDir);
    }
  };
};
