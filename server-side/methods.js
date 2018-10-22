var jsdom = require("jsdom");
var JSDOM = jsdom.JSDOM;
var domChanger = new JSDOM();

var Methods = function () {
  this.document_ = domChanger.window.document;
  this.fixArea_ = this.document_.createElement('div');
  this.htmlStr_ = [];
}

/**** public logic ****/
Methods.prototype.setTargetHtml = function(htmlData){
  this.htmlStr_ = htmlData.split(/\n/);
}

Methods.prototype.run = function(){
  this.run_();
}

Methods.prototype.getBodyHTML = function(){
  return this.fixArea_.innerHTML;
  var result = ''
  for(i=0; i < huga.length; i++){
    result += (huga[i] + '\n') 
  }
  return result;
}

/**** change logic ****/
Methods.prototype.addClass_ = function(){
  var targetDom = this.fixArea_.querySelector('#tab_setting');
  if(targetDom){
    targetDom.classList.add('additional-class');
  }
}

Methods.prototype.run_ = function(){
  this.addClass_();
}

module.exports = Methods;