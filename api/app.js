const LISTEN_PORT = 3000;

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
  next();
});


const router = require('./Routes/v1/');

app.use('/api/v1/', router);

app.listen(process.env.PORT || LISTEN_PORT, () => {
  console.log(`listening on port ${LISTEN_PORT}`);
});
