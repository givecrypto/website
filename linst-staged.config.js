const micromatch = require("micromatch");

module.exports = {
  "./**/*.{ts,tsx,js,jsx,json}": files => {
    const match = micromatch.not(files, "(.next|_next)");
    return `prettier ${match.join(" ")} --write; git add;`;
  },
};
