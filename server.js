const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const connectDb = require ('./DbConnection/Connection');

app.use(bodyParser.urlencoded())
app.use(express.json());
// connect to mongo db
connectDb();
// starts express server
const Port = process.env.Port || 3000;
 app.listen(Port , ()=> console.log('server started on '+Port));
 // add routes to server 
 app.use('/user', require('./route/UserRouter'));
 app.use('/Polygone', require('./route/PolygoneRouter'));