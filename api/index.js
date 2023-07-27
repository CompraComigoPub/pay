const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const dotenv = require('dotenv');
dotenv.config();

const drivers = require('../local_modules/drivers.js');
drivers.init();
let driver = drivers.getDriver();

// Current driver (pagarme, vero, etc... )
let current_driver = driver.driver;

app.get('/api', (req, res) => {
  res.json({ message: 'Welcome to ON2 Payment Layer' });
});

app.get('/api/recepients', (req, res) => {
  current_driver
    .listRecepients()
    .then((response) => {
      res.send(JSON.stringify(response.data));
    })
    .catch((error) => {
      console.error(error.response.errors);
      res.sendStatus(400);
    });
});

app.post('/api/create-recepient', (req, res) => {
  let data = req.body;

  current_driver
    .createRecepient(data)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.error(error.response.errors);
    });

  res.sendStatus(200);
});

app.post('/api/simulate-payment', (req, res) => {
  let data = req.body;

  current_driver
    .simulatePayment(data.transactionID)
    .then((response) => {
      //console.log(`statusCode: ${response.status}`);
      console.log(response);
    })
    .catch((error) => {
      console.error(error.response.errors);
    });

  res.sendStatus(200);
});

app.post('/api/create-payment', (req, res) => {
  // Sets the driver payload as received
  current_driver.setCustomer(req.body.customer);
  current_driver.setSplitRules(req.body.split_rules);
  current_driver.setMethod(req.body.payment_method);
  current_driver.setAmount(req.body.amount);
  current_driver.setExpirationDate(req.body.boleto_expiration_date);
  current_driver.setInstructions(req.body.boleto_instructions);
  current_driver.setBilling(req.body.billing);

  current_driver
    .createPayment()
    .then((response) => {
      console.log(`statusCode: ${response.status}`);
      console.log(response);
    })
    .catch((error) => {
      console.error(error.response.errors);
    });

  res.sendStatus(200);
});

module.exports = app;
