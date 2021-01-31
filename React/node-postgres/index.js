const express = require('express')
const app = express()
const cors = require('cors')
const port = 3001

const merchant_model = require('./merchant_model')

app.use(cors());
app.use(express.json())
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers');
  next();
});

app.get('/', (req, res) => {
  console.log('function called'),
  merchant_model.getMerchants()
  .then(response => {
    console.log('recieved data');
    res.status(200).send(response);
  })
  .catch(error => {
    console.log('error in data');
    res.status(500).send(error);
  })
})

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})