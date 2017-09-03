# Stock Price History

For this task we'd like to incorporate everything we've learned in Chapter 2:

 * Asynchronous continuous-passing style callbacks (CPS)
 * Error handling in asynchronous applications
 * Observer pattern / listening on events to trigger application behaviour
 * Modules for splitting your application into manageable chunks

We'd like to write an application that reports (every 30 seconds) the Microsoft Stock Price (MSFT) since the start of the millennium. It reports the value that day along with the percentage change since the last day stock price update.

Our data will come from the csv file `stock-price-MSFT.csv` which is in the following format:

``` csv
timestamp,open,high,low,close,volume
2017-09-01,74.7100,74.7400,73.6400,73.9400,21593192
2017-08-31,74.0300,74.9600,73.8000,74.7700,26688077
2017-08-30,73.0100,74.2100,72.8300,74.0100,16826094
2017-08-29,72.2500,73.1600,72.0500,73.0500,11325418
```

We want to read each line from the csv starting from the most recent stock price to the least recent. We're going to do this every 30 seconds.

Our application should handle any problem with reading corrupted data (i.e. any blank lines or lines of data that do not match the format we require) by ignoring that line and continuing to attempt to read the next line in the csv file. It should not crash in doing so and should report the error to the console with an explanation as to why it failed.

As each line from the CSV is read in it should report the following:

 * Stock price
 * Whether the price went UP or DOWN
 * Percentage change

Each of these should be reported by a different event and not the same function so you will need to make use of the EventEmitter class and the Observer pattern.

You should look to split your application into classes and modules. You could look to have two modules:

 * A module to read the stock market prices from CSV files
 * A module for calculating stock price change
 * A module for outputting the results to console and handling errors

We should also have sensible classes, for example:

 * StockPriceConsumer
 * StockPriceCalculator
 * StockPriceOutput

## Sample output
