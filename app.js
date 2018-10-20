var Methods = require('./methods');
var settings = require('./setting.json');

var express = require("express");
var app = express();

var server = app.listen(3000, function(){
  console.log("Node.js is listening to PORT:" + server.address().port);
});

var fs = require("fs");

var DomParser = require('dom-parser');
var parser = new DomParser();

var jsdom = require("jsdom");
var JSDOM = jsdom.JSDOM;
var domChanger = new JSDOM();

var methods = new Methods(domChanger.window.document);

for (var index = 0; index < settings.targetFiles.length; index++) {
  fs.readFile(settings.targetFiles[index], {encoding: 'utf-8'}, function(err, data){
    if(err){
      return;
    }
    var html = parser.parseFromString(data, "text/html");
    methods.setTargetHtml(html.rawHTML);
    methods.run();
    console.log('huga');

    fs.writeFile('./output/changed_'+settings.targetFiles, methods.getBodyHTML());
  });  
}

console.log('hoge');


/* 
■メモ
アップロードしたファイルを変更して、ダウンロードできるようにしたい
https://tyfkda.github.io/blog/2016/03/01/nodejs-web-server.html
https://code-examples.net/ja/q/6f37ee

*/