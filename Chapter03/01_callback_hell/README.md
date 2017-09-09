# Avoiding Callback Hell - Convert Images without Pyramid of Doom

In our example we have an Image Convertor application that uses the jimp library to convert two (hilarious) .png images into a jpeg equivalent.

For arguments sake, let's imagine that this ImageConvertor accepts the location of the two images in a job queue (essentially an array). It's job is just to read those images from the file, pass it to the library to convert the images and then write them back to another directory to store the result.

For example, the two images we have are located in the following two locations:

```
img/wat1.png
img/wat2.png
```

Let's also say for arguments sake that we only have one Node.js application in which to perform this task - essentially if we plan on handling it asynchronously we can do so with callbacks. However, as you shall see this is horrendous.

It is your task to convert this 'pyramid of doom' monstrosity into code that is more readable using the techniques we have discussed.
You will also need to write a record in database to say that the job is complete

We would like to output these images in the jpeg format to a `/tmp` directory with the names `wat1.jpeg` and `wat2.jpeg`

The application can be executed using:

```
node format_video_heaven.js
```

This will be where you write your code.

To summarise you need to do the following:

* Initialise a queue with the correct relative paths to the images
* Convert and same the image using the library to another folder
* Write a message to a database 

Good luck!
  