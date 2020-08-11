const axios = require('axios');
const jsdom = require('jsdom');
var express = require('express');
var path = require('path');

var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));



app.use(function(req, res, next) {
  
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header('Content-Type', 'application/json');
  next();
});



app.get('/covid-19', function(req, res) {

  module.exports = axios.get('https://covid19.saglik.gov.tr/').then(html => {

  let dom = new jsdom.JSDOM(html.data);

   const $ = selector => dom.window.document.querySelector(selector).textContent.trim();

   let Covid={

   toplamTest : $("div.container-fluid:nth-child(1) div.full div.container-fluid div.row.bg:nth-child(4) div.col-md-12.col-lg-6:nth-child(1) div.card div.card-body div.corona-bg div.row div.col-lg-7.col-md-7.col-sm-12 div.row:nth-child(1) div.col-6.col-sm-6:nth-child(1) div:nth-child(1) ul.list-group.list-group-genislik li.d-flex.justify-content-between.baslik-k:nth-child(1) > span:nth-child(2)"),
   toplamHasta : $("div.container-fluid:nth-child(1) div.full div.container-fluid div.row.bg:nth-child(4) div.col-md-12.col-lg-6:nth-child(1) div.card div.card-body div.corona-bg div.row div.col-lg-7.col-md-7.col-sm-12 div.row:nth-child(1) div.col-6.col-sm-6:nth-child(1) div:nth-child(1) ul.list-group.list-group-genislik li.d-flex.justify-content-between.baslik-k:nth-child(2) > span:nth-child(2)"),
   toplamVefat : $("div.container-fluid:nth-child(1) div.full div.container-fluid div.row.bg:nth-child(4) div.col-md-12.col-lg-6:nth-child(1) div.card div.card-body div.corona-bg div.row div.col-lg-7.col-md-7.col-sm-12 div.row:nth-child(1) div.col-6.col-sm-6:nth-child(1) div:nth-child(1) ul.list-group.list-group-genislik li.d-flex.justify-content-between.baslik-k:nth-child(3) > span:nth-child(2)"),
   zaturreOran : $("div.container-fluid:nth-child(1) div.full div.container-fluid div.row.bg:nth-child(4) div.col-md-12.col-lg-6:nth-child(1) div.card div.card-body div.corona-bg div.row div.col-lg-7.col-md-7.col-sm-12 div.row:nth-child(1) div.col-6.col-sm-6:nth-child(1) div:nth-child(1) ul.list-group.list-group-genislik li.d-flex.justify-content-between.baslik-k:nth-child(4) > span:nth-child(2)"),
   toplamAgirHasta : $("div.container-fluid:nth-child(1) div.full div.container-fluid div.row.bg:nth-child(4) div.col-md-12.col-lg-6:nth-child(1) div.card div.card-body div.corona-bg div.row div.col-lg-7.col-md-7.col-sm-12 div.row:nth-child(1) div.col-6.col-sm-6:nth-child(1) div:nth-child(1) ul.list-group.list-group-genislik li.d-flex.justify-content-between.baslik-k:nth-child(5) > span:nth-child(2)"),
   toplamIyilesenHasta : $("div.container-fluid:nth-child(1) div.full div.container-fluid div.row.bg:nth-child(4) div.col-md-12.col-lg-6:nth-child(1) div.card div.card-body div.corona-bg div.row div.col-lg-7.col-md-7.col-sm-12 div.row:nth-child(1) div.col-6.col-sm-6:nth-child(1) div:nth-child(1) ul.list-group.list-group-genislik li.d-flex.justify-content-between.baslik-k:nth-child(6) > span:nth-child(2)"),

   bugunkuTest : $("div.container-fluid:nth-child(1) div.full div.container-fluid div.row.bg:nth-child(4) div.col-md-12.col-lg-6:nth-child(1) div.card div.card-body div.corona-bg div.row div.col-lg-5.col-md-5.col-sm-12 div.mtop-bosluk.buyuk-bilgi-l ul.list-group li.d-flex.justify-content-between.baslik-k-2.bg-acik:nth-child(1) > span.buyuk-bilgi-l-sayi"),
   bugunkuHasta :$("div.container-fluid:nth-child(1) div.full div.container-fluid div.row.bg:nth-child(4) div.col-md-12.col-lg-6:nth-child(1) div.card div.card-body div.corona-bg div.row div.col-lg-5.col-md-5.col-sm-12 div.mtop-bosluk.buyuk-bilgi-l ul.list-group li.d-flex.justify-content-between.baslik-k-2.bg-koyu:nth-child(2) > span:nth-child(2)"),
   bugunkuVefat : $("div.container-fluid:nth-child(1) div.full div.container-fluid div.row.bg:nth-child(4) div.col-md-12.col-lg-6:nth-child(1) div.card div.card-body div.corona-bg div.row div.col-lg-5.col-md-5.col-sm-12 div.mtop-bosluk.buyuk-bilgi-l ul.list-group li.d-flex.justify-content-between.baslik-k-2.bg-acik:nth-child(3) > span:nth-child(2)"),
   bugunkuIyilesen : $("div.container-fluid:nth-child(1) div.full div.container-fluid div.row.bg:nth-child(4) div.col-md-12.col-lg-6:nth-child(1) div.card div.card-body div.corona-bg div.row div.col-lg-5.col-md-5.col-sm-12 div.mtop-bosluk.buyuk-bilgi-l ul.list-group li.d-flex.justify-content-between.baslik-k-2.bg-koyu:nth-child(4) > span:nth-child(2)"),

   gun : $("div.container-fluid:nth-child(1) div.full div.container-fluid div.row.bg:nth-child(4) div.col-md-12.col-lg-6:nth-child(1) div.card div.card-body div.corona-bg div.row div.col-lg-7.col-md-7.col-sm-12 div.row:nth-child(1) div.col-6.col-sm-6:nth-child(2) div.margin--15 div:nth-child(1) div.takvim.text-center > p.p1"),
   ay : $("div.container-fluid:nth-child(1) div.full div.container-fluid div.row.bg:nth-child(4) div.col-md-12.col-lg-6:nth-child(1) div.card div.card-body div.corona-bg div.row div.col-lg-7.col-md-7.col-sm-12 div.row:nth-child(1) div.col-6.col-sm-6:nth-child(2) div.margin--15 div:nth-child(1) div.takvim.text-center > p.p2"),
   yil : $("div.container-fluid:nth-child(1) div.full div.container-fluid div.row.bg:nth-child(4) div.col-md-12.col-lg-6:nth-child(1) div.card div.card-body div.corona-bg div.row div.col-lg-7.col-md-7.col-sm-12 div.row:nth-child(1) div.col-6.col-sm-6:nth-child(2) div.margin--15 div:nth-child(1) div.takvim.text-center > p.p3"),
   };

  
   
    Covid = JSON.stringify(Covid);

    res.end(Covid);
 

});

});



module.exports = app;
