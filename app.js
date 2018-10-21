var Methods = require('./server-side/methods');
var settings = require('./setting.json');
var fs = require("fs");
var axios = require('axios');

var DomParser = require('dom-parser');
var parser = new DomParser();

var methods = new Methods();

var express = require("express");
var multer = require('multer');
var app = express();
app.set('view engine', 'ejs');
app.use(express.static('public'));
var server = app.listen(3000, function(){
  console.log("Node.js is listening to PORT:" + server.address().port);
});

app.get('/dom-checker', function(req, res, next){
  res.render('dom-checker', {axios});
});

var upload = multer({dest: 'uploaded'});
app.post('/upload', upload.single('upload'), function(req, res){
  fs.readFile(req.file.path, {encoding: 'utf-8'}, function(err, data){
    if(err){
      return;
    }
    var html = parser.parseFromString(data, "text/html");
    methods.setTargetHtml(html.rawHTML);
    methods.run();

    var fileName = 'output/changed_' + req.file.originalname;
    fs.writeFile(fileName, methods.getBodyHTML(), function(err){
      if(err){
        console.log('Error');
      }
      res.download(fileName);
    });
  });  
});




/* 
■メモ
eslint入れたい
エラーハンドリング
axiosとかでクライアントで受け取れるようにしたい

*/