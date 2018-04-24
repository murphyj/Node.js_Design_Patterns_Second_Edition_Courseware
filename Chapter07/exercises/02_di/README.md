# Twitter API

For this exercise, we want to create a fully fledged Twitter API using Express, Node.js and the [twitter](https://www.npmjs.com/package/twitter) npm library.

The API should have the following features:

* POST /tweet - Posts a new tweet status using a defined account

Example url:
`curl -X POST http://localhost:3001/tweet?status=This%20is%20a%20tweet%20status%20check`

* POST /retweet - Retweets a post based on it's twitter tweet id

Example url:
`curl -X POST http://localhost:3001/retweet?tweetId=987647523509678085`

* GET /search - Searches for tweets for a particular search term

Example url:
`curl -X GET http://localhost:3001/search?query=Nodejs`

* GET /list - Lists the tweets from the user timeline of a particular user using it's handle

Example url:
`curl -X GET http://localhost:3001/list?handle=developerangst`

## Enable Twitter API Access

In order that you can use the Twitter API, you will need to use your twitter account to sign-up for Twitter API access.

To do this... 
* Navigate to https://apps.twitter.com/
* Login with your handle
* Select `Create New App`
* Add the name, description and website for the new app
* After creating the application select the application to view additional settings
* Click the `Keys and Access Tokens`
* Make note of your Consumer API keys, Secret Keys, Access Token and Access Token Secret
* You will need this information to initialise the Twitter client so you can call the API

## Starting the Express App

To start the app you need to pass the following environment variables:

* TWITTER_CONSUMER_KEY
* TWITTER_CONSUMER_SECRET
* TWITTER_ACCESS_TOKEN_KEY
* TWITTER_ACCESS_TOKEN_SECRET

So to run the app you run the following command:

```$bash
TWITTER_CONSUMER_KEY=lrMg7CFUvlduDManN4vKLQW9Y TWITTER_CONSUMER_SECRET=x57mXhRttJP2lih1HkWHF3KaNro4resWgRH4dtMTjdkjgcGrrn TWITTER_ACCESS_TOKEN_KEY=2995644829-pyEH0L5VlrtM4EWKwTWRTmwDY6FkKu6UdDKI3HF2 TWITTER_ACCESS_TOKEN_SECRET=WWGu5SXh34NufbiCZ3Z0hpomhQxWP7joiuVmfdWFAvZ node app
```

Note: _These env variables do not work with a real account - please sign up for access_

## Exercise - Dependency Injection

For this exercise, you need to implement the API using dependency injection where possible. 
