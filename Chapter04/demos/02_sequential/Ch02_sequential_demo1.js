const utilities = require('./utilities');

const request = utilities.promisify(require('request'));
const mkdirp = utilities.promisify(require('mkdirp'));
const fs = require('fs');
const readFile = utilities.promisify(fs.readFile);
const writeFile = utilities.promisify(fs.writeFile);

function download(url, filename) {
  console.log(`Downloading ${url}`);
  let body;
  return request(url)
  .then(response => {
    body = response.body;
    return mkdirp(path.dirname(filename));
  })
  .then(() => writeFile(filename, body))
  .then(() => {
    console.log(`Downloaded and saved: ${url}`);
    return body;
  });
}
