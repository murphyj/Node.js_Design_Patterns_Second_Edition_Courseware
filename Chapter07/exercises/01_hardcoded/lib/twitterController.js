const twitterService = require('./twitterService');

class TwitterController {

    constructor(twitterService) {
        this.twitterService = twitterService;
    }

    tweet(req, res, next) {
        twitterService.tweet(req.param('status'), (err, tweet, response) => {
                if (!err) {
                    console.log("Successfully posted tweet [" + tweet + "] ")
                } else {
                    console.log("There was an error POSTing the tweet: " + tweet);
                }
            }
        );
    };

    retweet(req, res, next) {
        twitterService.retweet(req.query.token, (err, tweet, response) => {
                if (!err) {
                    console.log("Successfully posted tweet [" + tweet + "] ")
                } else {
                    console.log("There was an error POSTing the tweet: " + tweet);
                }
            }
        );
    };

    search(req, res, next) {
        twitterService.search(req.query.token, (err, query, tweets, response) => {
            if (!err) {
                console.log("Searched for tweets using query [" + query + "]");
                console.log("Tweets found: ", tweets);
            } else {
                console.log("There was an error search for tweets using query: " + query);
            }
        });
    };

    list(req, res, next) {
        twitterService.list(req.query.token, (err, handle, tweets, response) => {
                if (!err) {
                    console.log("Printing tweets for handle [" + handle + "]");
                    console.log("Tweets: ", tweets);
                } else {
                    console.log("There was an error listing tweets for handle[ " + handle + "]");
                }
            }
        );
    };
}

module.exports = TwitterController;
