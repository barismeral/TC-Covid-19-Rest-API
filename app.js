const axios = require('axios');
const jsdom = require('jsdom');
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

  module.exports = axios.get('https://covid19.saglik.gov.tr/').then(html => {

  let dom = new jsdom.JSDOM(html.data);

   const $ = selector => dom.window.document.querySelector(selector).textContent.trim();

   let Covid={

   toplamTest : $("section.mt-30:nth-child(6) div.col-md-10.offset-1 div.container div.shadow.left_bar div.veri_list:nth-child(2) div.row div.col-lg-4.col-sm-6 ul.guncel_durum li:nth-child(1) > strong.toplam-test-sayisi:nth-child(2)"),
   toplamHasta : $("section.mt-30:nth-child(6) div.col-md-10.offset-1 div.container div.shadow.left_bar div.veri_list:nth-child(2) div.row div.col-lg-4.col-sm-6 ul.guncel_durum li:nth-child(2) > strong.toplam-vaka-sayisi:nth-child(2)"),
   toplamVefat : $("section.mt-30:nth-child(6) div.col-md-10.offset-1 div.container div.shadow.left_bar div.veri_list:nth-child(2) div.row div.col-lg-4.col-sm-6 ul.guncel_durum li:nth-child(3) > strong.toplam-vefat-sayisi:nth-child(2)"),
   zaturreOran : $("section.mt-30:nth-child(6) div.col-md-10.offset-1 div.container div.shadow.left_bar div.veri_list:nth-child(2) div.row div.col-lg-4.col-sm-6 ul.guncel_durum li:nth-child(4) > strong.hastalarda_zaturre_oran:nth-child(2)"),
   toplamAgirHasta : $("section.mt-30:nth-child(6) div.col-md-10.offset-1 div.container div.shadow.left_bar div.veri_list:nth-child(2) div.row div.col-lg-4.col-sm-6 ul.guncel_durum li:nth-child(5) > strong.agir_hasta_sayisi:nth-child(2)"),
   toplamIyilesenHasta : $("section.mt-30:nth-child(6) div.col-md-10.offset-1 div.container div.shadow.left_bar div.veri_list:nth-child(2) div.row div.col-lg-4.col-sm-6 ul.guncel_durum li:nth-child(6) > strong.toplam-iyilesen-hasta-sayisi:nth-child(2)"),

   bugunkuTest : $("section.mt-30:nth-child(6) div.col-md-10.offset-1 div.container div.shadow.left_bar div.veri_list:nth-child(2) div.row div.col-lg-5.col-sm-12 div.box.box-odd div.col-md-12 ul.gunluk_durum li.odd:nth-child(1) > strong.bugunku-test-sayisi:nth-child(2)"),
   bugunkuHasta :$("section.mt-30:nth-child(6) div.col-md-10.offset-1 div.container div.shadow.left_bar div.veri_list:nth-child(2) div.row div.col-lg-5.col-sm-12 div.box.box-odd div.col-md-12 ul.gunluk_durum li.even:nth-child(2) > strong.bugunku-vaka-sayisi:nth-child(2)"),
   bugunkuVefat : $("section.mt-30:nth-child(6) div.col-md-10.offset-1 div.container div.shadow.left_bar div.veri_list:nth-child(2) div.row div.col-lg-5.col-sm-12 div.box.box-odd div.col-md-12 ul.gunluk_durum li.odd:nth-child(3) > strong.bugunku-vefat-sayisi:nth-child(2)"),
   bugunkuIyilesen : $("section.mt-30:nth-child(6) div.col-md-10.offset-1 div.container div.shadow.left_bar div.veri_list:nth-child(2) div.row div.col-lg-5.col-sm-12 div.box.box-odd div.col-md-12 ul.gunluk_durum li.even:nth-child(4) > strong.bugunku-iyilesen-sayisi:nth-child(2)"),

   gun : $("section.mt-30:nth-child(6) div.col-md-10.offset-1 div.container div.shadow.left_bar div.veri_list:nth-child(2) div.row div.col-lg-3.col-sm-6 p.big_date > b.date_date"),
   ay : $("section.mt-30:nth-child(6) div.col-md-10.offset-1 div.container div.shadow.left_bar div.veri_list:nth-child(2) div.row div.col-lg-3.col-sm-6 p.big_date > b.date_mounth"),
   yil : $("section.mt-30:nth-child(6) div.col-md-10.offset-1 div.container div.shadow.left_bar div.veri_list:nth-child(2) div.row div.col-lg-3.col-sm-6 p.big_date > b.date_year"),
   };

  
   
    Covid = JSON.stringify(Covid);

    res.end(Covid);
 

});

});



module.exports = app;
