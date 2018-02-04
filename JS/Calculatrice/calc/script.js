(function() {

var Numbers = document.querySelectorAll (".calc > button");
var Operators = document.querySelectorAll (".operations > button");
var Egale = document.querySelectorAll (".egale > button");
var Result = document.querySelectorAll (".result > button");
var currNumber = "";

function getNumber () {
    currNumber += this.getAttribute("Numbers");
  }

function getOperator() {
    Operators = this.getAttribute("Operators");

}


})();
