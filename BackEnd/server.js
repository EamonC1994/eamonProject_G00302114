//Imports
var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');

//mongoose database connection
var mongoose = require('mongoose');
var mongoDB = 'mongodb://Eamon:hello123@ds137913.mlab.com:37913/lab5';
mongoose.connect(mongoDB);

//Schema Definition
var Schema = mongoose.Schema;
var customerSchema = new Schema({
    custName: String,
    custEmail: String,
    custNum: String
})
var CustomerModel = mongoose.model('customer', customerSchema);


//Here we are configuring express to use body-parser as middle-ware. 
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Fixes CORS error
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

//Create
app.post('/name', function (req, res) {
    res.send("Hello you sent " +
        req.body.firstname + " " +
        req.body.lastname);
})

app.get('/', function (req, res) {
    res.send('Hello from Eamon Conneely');
})

app.post('/api/customer', function (req, res) {
    console.log("Customer Record Successful");
    console.log(req.body.custName);
    console.log(req.body.custEmail);
    console.log(req.body.custNum);

    CustomerModel.create({
        custName: req.body.custName,
        custEmail: req.body.custEmail,
        custNum: req.body.custNum
    });
    res.send('Record added');


})

//Read
app.get('/api/customer', function (req, res) {
    CustomerModel.find(function (err, data) {
        res.json(data);
    });
})

app.get('/api/customer/:id', function (req, res) {
    console.log("Read Customer " + req.params.id);

    CustomerModel.findById(req.params.id,
        function (err, data) {
            res.json(data);
        });
})

//Update
app.put('/api/customer/:id', function (req, res) {
    console.log("Update Customer" + req.params.id);
    console.log(req.body.custName);
    console.log(req.body.custEmail);
    console.log(req.body.custNum);

    CustomerModel.findByIdAndUpdate(req.params.id, req.body,
        function (err, data) {
            res.send(data);
        })
})

//Delete
app.delete('/api/customer/:id', function (req, res) {
    console.log(req.params.id);

    CustomerModel.deleteOne({ _id: req.params.id },
        function (err, data) {
            if (err)
                res.send(err);
            res.send(data);
        })
})

//Starts server
var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port

    console.log("Example app listening at http://%s:%s", host, port)
})

//second schema definition
var Schema = mongoose.Schema;
var employeeSchema = new Schema({
    empNum: String,
    empName: String,
    empJobTitle: String
})
var EmployeeModel = mongoose.model('employee', employeeSchema);


//Here we are configuring express to use body-parser as middle-ware. 
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

//Create
app.post('/name', function (req, res) {
    res.send("Hello you sent " +
        req.body.firstname + " " +
        req.body.lastname);
})

app.get('/', function (req, res) {
    res.send('Hello from Eamon Conneely');
})

app.post('/api/employee', function (req, res) {
    console.log("Employee Record Successful");
    console.log(req.body.empNum);
    console.log(req.body.empName);
    console.log(req.body.empJobTitle);

    EmployeeModel.create({
        empNum: req.body.empNum,
        empName: req.body.empName,
        empJobTitle: req.body.empJobTitle
    });
    res.send('Record added');


})

//Read
app.get('/api/employee', function (req, res) {
    EmployeeModel.find(function (err, data) {
        res.json(data);
    });
})

app.get('/api/employee/:id', function (req, res) {
    console.log("Read Employee " + req.params.id);

    EmployeeModel.findById(req.params.id,
        function (err, data) {
            res.json(data);
        });
})

//Update
app.put('/api/employee/:id', function (req, res) {
    console.log("Update Employee" + req.params.id);
    console.log(req.body.empNum);
    console.log(req.body.empName);
    console.log(req.body.empJobTitle);

    EmployeeModel.findByIdAndUpdate(req.params.id, req.body,
        function (err, data) {
            res.send(data);
        })
})

//Delete
app.delete('/api/employee/:id', function (req, res) {
    console.log(req.params.id);

    EmployeeModel.deleteOne({ _id: req.params.id },
        function (err, data) {
            if (err)
                res.send(err);
            res.send(data);
        })
})