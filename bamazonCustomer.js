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
})