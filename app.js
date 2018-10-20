var DomParser = require('dom-parser');
var parser = new DomParser();

var jsdom = require("jsdom");
var JSDOM = jsdom.JSDOM;
var domChanger = new JSDOM();
var document = domChanger.window.document;
var body = domChanger.window.document.body;
var sampleHTML = `
  <div id="dom1">
    <span>text-1</span>
    <span>text-2</span>
  </div>
`;
var doc = parser.parseFromString(sampleHTML, "text/html");

body.innerHTML = body;

console.log(doc);
