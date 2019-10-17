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
    console.log("\nConnected. \nConnection ID " + connection.threadId + ". \n\nWelcome to Bamazon!")
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
                },
                {
                    name: "amount",
                    type: "input",
                    message: "How many would you like to buy?",
                }
            ]).then(function(answers) {
                var selectedID = answers.selectItem;
                var amountNeeded = answers.amount;
                purchaseItem(selectedID, amountNeeded);
            });
    };

    //function that will let customer purchase items depending if there are enough in stock
    function purchaseItem(selectedID, amountNeeded) {
        connection.query('SELECT * FROM bamazon.products WHERE item_id = ' + selectedID, function(err, res) {
            if(err) {
                console.log("Error. Someting whent wrong. Please reset application");
            }
            else if (amountNeeded <= res[0].stock_quantity) {
                var totalAmount = res[0].price * amountNeeded;
                console.log(`Gongrats! You are now the proud owner of a ${res[0].product_name}!\n`)
                console.log(`Product: ${res[0].product_name}\nQuantity: ${amountNeeded}\nTotal Amount: $${totalAmount}\n\nThank you for choosing Bamazon!\nWe are not ripping off Amazon!\n`);
                connection.query("UPDATE bamazon.products SET stock_quantity = stock_quantity - " + amountNeeded + " WHERE item_id = " + selectedID);
                displayItems();
            }
            else {
                console.log(`\nUh Oh, we don't seem to have enough ${res[0].product_name} in stock. Please try again!\n`);
                selectItem();
            };
        });
    };