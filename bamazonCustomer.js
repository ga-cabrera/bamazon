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
        var tableDisplay = new Table ({
            head: ["Item ID", "Product Name", "Department", "Price", "Quantity"],
            colWidths: [10,30, 25, 7, 14]

        });
        for (var i = 0; i < res.length; i++) {
            tableDisplay.push(
                [res[i].item_id, res[i].product_name, res[i].department_name, res[i].price, res[i].stock_quantity]
            );
        }
        console.log(tableDisplay.toString());

    }
    )};
    displayItems();