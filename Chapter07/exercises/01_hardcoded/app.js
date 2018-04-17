const express = require('express');
const bodyParser = require('body-parser');
const errorHandler = require('errorhandler');
const http = require('http');

const creds = {
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
};

const TwitterService = require('./lib/twitterService');
const twitterService = new TwitterService(creds.consumer_key, creds.consumer_secret, creds.access_token_key, creds.access_token_secret);

const TwitterController = require('./lib/twitterController');
const twitterController = new TwitterController(twitterService);

const app = module.exports = express();
app.use(bodyParser.json());

app.post('/tweet', twitterController.tweet());
app.post('/', twitterController.checkToken);

app.use(errorHandler());
http.createServer(app).listen(3000, () => {
    console.log('Express server started');
});



