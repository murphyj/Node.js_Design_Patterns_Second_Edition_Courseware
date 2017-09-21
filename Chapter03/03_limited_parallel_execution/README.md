# Limited Parallel Execution - Email Movie Quotes

In this exercise, we have an number of different emails, the contents of which is stored in a variety of different files inside an `drafts` folder. 

Using the Unlimited Parallel Execution pattern we want to perform the following tasks:

* Load the contents of each of the `drafts` from the files
* Send each of the emails with parallel execution
* Restrict the number of emails sent in parallel by 5
* Once we've read the contents of the email from the `drafts` folder and are ready to send it put the email in the `outbox`
* Once we have successfully sent the email we can then move it to the `sent` folder (removing it from the `outbox`).
* If there is a failure to send then the email stays in the `outbox` with the error written to the console.

## Mailgun

To simulate the benefits of parallel execution we are going to use a free email api called Mailgun (it provides up to 10,000 emails free every month so there's no risk of being charged for it).

You can sign up for mailgun [here](https://signup.mailgun.com/new/signup)

## Project Structure

Exercise folder: `03_limited_parallel_execution`
Drafts folder: `03_limited_parallel_execution/drafts`
Outbox folder: `03_limited_parallel_execution/outbox`
Sent folder: `03_limited_parallel_execution/sent`

## Project Setup

You will need to create a `package.json` file as normal and install the [`mailgun-js`](https://www.npmjs.com/package/mailgun-js) library in npm.

## Limited Execution

The key difference with this exercise and the Unlimited Parallel Execution pattern exercise is that in this exercise we would like to limit the maximum number of concurrent emails to 5!
If we were to have an unlimited cap of emails and we had to send thousands of them, then we would have a problem of resource exhaustion.


