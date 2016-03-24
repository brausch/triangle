var weight;
var height;

var bmi = function(weight, height) {
var convertedWeight = weight*0.45;
var convertedHeight = height*0.025;
return ( convertedWeight/(convertedHeight*convertedHeight) );
};

var heightAndWeight= function() {
weight= parseInt(prompt("what is your weight?"));
height= parseInt(prompt("what is your height?"));
alert(bmi(weight, height));
};

heightAndWeight();
