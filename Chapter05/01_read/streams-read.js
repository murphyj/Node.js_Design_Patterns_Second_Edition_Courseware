'use strict';

const EventEmitter = require('events');
const crypto = require('crypto');
const fs = require('fs');

const readStream = fs.createReadStream('./images/input/dilbert.jpg');
const hash = crypto.createHash('sha1');

const writeStream = fs.createWriteStream('./images/output/dilbert.jpg');

const outputHash = crypto.createHash('sha1');

class WriteComplete extends EventEmitter {}
const writeCompleted = new WriteComplete();

readStream
  .on('readable', function() {
    let chunk;
    while (null !== (chunk = readStream.read())) {
      console.log("calling update chunk");
      hash.update(chunk);
      writeStream.write(chunk);
    }
  })
  .on('end', function() {
    console.log("Image input hash digest: " + hash.digest('hex'));
    writeCompleted.emit('finished_write');
  });

writeCompleted.on('finished_write', function() {
  const readStreamOutput = fs.createReadStream('./images/output/dilbert.jpg');
  readStreamOutput.pipe(outputHash);
  console.log("Image output hash digest: " + outputHash.digest('hex'));
});

