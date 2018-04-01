# Strategy - Online/Offline MP3 Client

In this exercise we are going to utilise the capabilities of the strategy pattern by toggling the status of a Media Player client from online to offline.

Whilst offline the media client will read the file from a specified configured location. It will read the mp3 file from disk and then output the ID3 tag information for that mp3 file.

## Exercise

Your task is to create the online strategy for reading a file from an online location. You will have to download the file using an HTTP client and then similarly pass it through the ID3 Tags reader library we have provided. 

Audio files can be read in .mp3 format and must contain ID3 Tag information to work for this exercise.