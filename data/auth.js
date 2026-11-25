const fs = require('fs');
const path = require('path');

// CI should use ATS_TOKEN; local runs can keep a git-ignored data/token.json.
function resolveToken() {
  if (process.env.ATS_TOKEN) {
    return process.env.ATS_TOKEN;
  }

  const tokenFile = path.join(__dirname, 'token.json');
  if (fs.existsSync(tokenFile)) {
    const { token } = JSON.parse(fs.readFileSync(tokenFile, 'utf8'));
    if (token && !token.startsWith('<')) {
      return token;
    }
  }

  throw new Error(
    'No ATS API token found. Set ATS_TOKEN or copy data/token.example.json to data/token.json and fill in your token.'
  );
}

// Getter keeps resolution lazy: the token is read when a request is made.
module.exports = {
  get token() {
    return resolveToken();
  },
};
