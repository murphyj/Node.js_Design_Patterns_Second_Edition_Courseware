const fs = require('fs');

const api_key = 'your_api_key';
const domain = 'sandboxdomain.mailgun.org';
const sender = 'sender@email.org';
const recipient = 'recipient@email.org';

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