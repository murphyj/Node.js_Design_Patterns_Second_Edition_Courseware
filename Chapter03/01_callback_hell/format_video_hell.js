'use strict';
require('jimp');

const imageConvertor = new ImageConvertor();
imageConvertor.readInput();

function ImageConvertor() {
    // Level is a lightweight key-value storage database
    const levelup = require('levelup');
    const leveldown = require('leveldown');
    const db = levelup(leveldown("./imagedb"));

    return {
        start: () => {
            const jobQueue = ['wat1.png', 'wat2.png'];

            let i = 0;
            Jimp.read('./img/' + jobQueue[i], function(err, image) {
                if (err) {
                    db.put('name' + i, jobQueue[i], function (err) {
                        if (err) console.log ('Ooooops!', err); // an I/O error writing to database
                    });
                }
                // resize image wat1.png
                image.resize(64, 64)            // resize
                    .quality(60)                 // set JPEG quality
                    .greyscale()                 // set greyscale
                    .write("./img/output/" + jobQueue[i] + ".jpg") // write out toe the output folder
            }, db.put('success' + i, 'true', function (err) {
                if (err) {
                    console.log ('Ooooops!', err);
                } // an I/O error writing to success message to the database

                i = i + 1;
                Jimp.read('./img/' + jobQueue[i], function(err, image) {
                        if (err) {
                            db.put('name' + i, jobQueue[i], function (err) {
                                if (err) console.log ('Ooooops!', err); // an I/O error writing to database
                            });
                        }
                        // resize image wat1.png
                        image.resize(64, 64)            // resize
                            .quality(60)                 // set JPEG quality
                            .greyscale()                 // set greyscale
                            .write("./img/output/" + jobQueue[i] + ".jpg") // write out toe the output folder
                    }, db.put('success' + i, 'true', function (err) {
                        if (err) console.log ('Ooooops!', err); // an I/O error writing to success message to the database
                    })
                );
            }));
        }
    }
}



