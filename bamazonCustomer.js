var mysql = require('mysql');
var inquirer = require('inquirer');
var Table = require('cli-table');

//creating connection information for the sql database
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "bamazon"
});

// connecting to mysql server and database
connection.connect(function(err) {
    if (err) throw err;
    console.log("\nConnected. \nConnection ID " + connection.threadId + ". \n\nWelcome to Bamazon!\n\n")
});

//function which displays product via table node
var displayItems = function() {
    connection.query("SELECT * FROM  bamazon.products", function(err, res) {
        if (err) throw err;
        // variable creates a table in terminal/bash
        var tableDisplay = new Table ({
            head: ["Item ID", "Product Name", "Department", "Price", "Quantity"],
            colWidths: [10,30, 25, 7, 14] //gives width of each column 

        });
        // for loop that goes through every row in bamazon database and pushes to table
        for (var i = 0; i < res.length; i++) {
            tableDisplay.push(
                [res[i].item_id, res[i].product_name, res[i].department_name, res[i].price, res[i].stock_quantity]
            );
        }
        console.log(tableDisplay.toString());
        selectItem()
    }
    )};
    displayItems();

    //function that asks customer what they would like to purchase
    function selectItem() {
        inquirer
            .prompt ([
                {
                    name: "selectItem",
                    type: "input",
                    message: "What would you like to buy? Please enter Item ID",
                    filter: Number //only accepts numbers as an input
                },
                {
                    name: "amount",
                    type: "input",
                    message: "How many would you like to buy?",
                    filter: Number //only allows numbers as an input
                }
            ]).then(function(answers) {
                var selectedID = answers.selectItem;
                var amountNeeded = answers.amount;
                purchaseItem(selectedID, amountNeeded);
            });
    };
