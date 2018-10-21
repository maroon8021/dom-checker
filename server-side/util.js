var Util = function () {
}

/**** public logic ****/
Util.prototype.getElementById = function(targetElement, id, tagName){
  this.fixArea_.innerHTML = htmlData;
}


/**** change logic ****/
Util.prototype.addClass_ = function(){
  var targetDom = this.document_.getElementById('tab_setting');
  targetDom.classList.add('additional-class');
}

Util.prototype.run_ = function(){
  this.addClass_();
}

module.exports = Util;