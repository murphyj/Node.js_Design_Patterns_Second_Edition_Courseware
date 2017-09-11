# Parallel Execution - Emails to a Friend

In this exercise, we have an number of different emails, the contents of which is stored in a variety of different files inside an `drafts` folder. 

Using the Unlimited Parallel Execution pattern we want to perform the following:

* Load the contents of each of the `drafts` from the files
* Send each of the emails with parallel execution
* Once we've read the contents of the email from the `drafts` folder and are ready to send it put the email in the `outbox`
* Once we have successfully sent the email we can then move it to the `sent` folder (removing it from the `outbox`).
* If there is a failure to send then the email stays in the `outbox` with the error written to the console.

## Mailgun

For this exercise, to simulate the benefits of parallel execution we are going to use a free email api called Mailgun (it provides up to 10,000 emails free every month so there's no risk of being charged for it).

You can sign up for mailgun [here](https://signup.mailgun.com/new/signup)

Alternatively, if you'd rather not sign-up you can use the stub service that is provided. It's just an email client interface that provides a stub `sendEmail` method that does nothing but responds at a random interval to simulate an http request.

## Project Structure

Exercise folder: `02_parallel_execution`
Drafts folder: `02_parallel_execution/drafts`
Outbox folder: `02_parallel_execution/outbox`
Sent folder: `02_parallel_execution/sent`

## Project Setup

You will need to create a `package.json` file as normal and install the [`mailgun-js`](https://www.npmjs.com/package/mailgun-js) library in npm.



