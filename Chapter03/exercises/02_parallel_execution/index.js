const fs = require('fs');

const api_key = 'key-b8ae87bf4e1eabaf95b1ddab4944dc60';
const domain = 'sandbox763598cb1b03459d9c000092f00aa8f7.mailgun.org';
const sender = 'jmurphy84@googlemail.com';
const recipient = 'jmurphy84@googlemail.com';

const config = {
    apiKey: api_key,
    domain: domain
};

const mailgun = require('mailgun-js')(config);
const subject = 'Professional Node.js - Chapter 3: Exercise 2';

readFiles('./drafts/', (filename, content) => {

    console.log("Reading filename: " + filename);
    const data = {
        from: 'Packt User <' + sender + '>',
        to: recipient,
        subject: subject,
        text: content
    };

    mailgun.messages().send(data, function (error, body) {
        console.log("Sending: " + filename);
    });
}, (err, content) => {
    console.log("Failed sending due to error: ", err);
});

function readFiles(dirname, onFileContent, onError) {
    fs.readdir(dirname, function(err, filenames) {
        if (err) {
            return onError(err);
        }
        filenames.forEach(function(filename) {
            fs.readFile(dirname + filename, 'utf-8', function(err, content) {
                if (err) {
                    return onError(err);
                }
                onFileContent(filename, content);
            });
        });
    });
}