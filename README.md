# Bamazon

Bamazon is a node application that uses MySQL to create a database for this mock-up online store.

## Link to Video Demo
(https://www.youtube.com/watch?v=-Lhf5kUW27Y&feature=youtu.be)

## Getting Started
Make sure you have node installed onto your computer as well as git bash (if you're using a PC). If you have a mac, you can use terminal for this application. 
When you find the folder for this application in your terminal/bash, type in "node bamazonCustomer.js" and the app will begin running.

## Running the App
When the app is running, there will be a table that displays what a customer can purchase including the item's ID number, department, price and quantity amount that's in stock. this table is made using cli-table in node. A question will then be prompted, asking what you would like to buy and inputing the item_id. the app will then ask how many of said item you would like to purchase, and you will input a number. If the number you entered isn't above the amount of amount in stock, you have purchased your items and will updated the table using mysql in node. If your number is too high, the app will ask you to try again. 

## Deployment

This app is still a work in progress. I plan on adding a manager version of this on here to add and update items without the need of purchasing and even select departments to choose what items I want. This was a challenging assignment but I learned a lot.

## Built With

* [node](https://nodejs.org/en/docs/)
* [MySQL](https://dev.mysql.com/doc/)
* [Javascript]

## Authors

* **Gerson Cabrera** - *Initial work*


## Acknowledgments

* My Fans