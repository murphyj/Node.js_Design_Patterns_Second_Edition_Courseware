// const fs = require('fs');
// function readJSONThrows(filename, callback) {
//   fs.readFile(filename, 'utf8', (err, data) => {
//     if(err) {
//       return callback(err);
//     }
//     //no errors, propagate just the data
//     callback(null, JSON.parse(data));
//   });
// };
// readJSONThrows('nonJSON.txt', err => console.log(err));

const fs = require('fs');
function readJSONThrows(filename, callback) {
  fs.readFile(filename, 'utf8', (err, data) => {
    if(err) {
      return callback(err);
    }
    //no errors, propagate just the data
    callback(null, JSON.parse(data));
  });
};
try {
  readJSONThrows('nonJSON.txt', err => console.log(err));
} catch(err) {
  console.log('This will not catch the JSON parsing exception');
}

