var jsdom = require("jsdom");
var JSDOM = jsdom.JSDOM;
var domChanger = new JSDOM();

var Methods = function () {
  this.document_ = domChanger.window.document;
  this.fixArea_ = this.document_.createElement('div');
}

/**** public logic ****/
Methods.prototype.setTargetHtml = function(htmlData){
  this.fixArea_.innerHTML = htmlData;
}

Methods.prototype.run = function(){
  this.run_();
}

Methods.prototype.getBodyHTML = function(){
  return this.fixArea_.innerHTML;
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