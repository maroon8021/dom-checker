var Methods = function (document) {
  this.document_ = document;
  this.body_ = document.body;
}

/**** public logic ****/
Methods.prototype.setTargetHtml = function(htmlData){
  this.body_.innerHTML = htmlData;
}

Methods.prototype.run = function(){
  this.run_();
}

Methods.prototype.getBodyHTML = function(){
  return this.body_.innerHTML;
}

/**** change logic ****/
Methods.prototype.addClass_ = function(){
  var targetDom = this.document_.getElementById('dom1');
  targetDom.classList.add('additional-class');
}

Methods.prototype.run_ = function(){
  this.addClass_();
}

module.exports = Methods;