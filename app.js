const axios = require('axios');
var express = require('express');

var app = express();
app.set('port', process.env.PORT || 5000);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(process.env.PORT || 5000,()=>{

        console.log("server is running");

});


app.use(function(req, res, next) {
  
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header('Content-Type', 'application/json');
  next();
});



app.get('/covid-19', function(req, res) {


  axios.get('https://covid19.saglik.gov.tr//covid19api?getir=sondurum').then(html => {


        res.end(JSON.stringify(html.data));

  });

});

module.exports = app;
