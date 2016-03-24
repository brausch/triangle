var poundsToKilograms = function() {
	var input = parseInt(prompt("What is the weight in Pounds?"));
	var output = (input * 0.453592);
  alert("The weight is " + output + "kgs.");
};

var ounceToGram = function() {
	var input = parseInt(prompt("What is the weight in ounces?"));
	var output = (input * 28.3495);
  alert("The weight is " + output + "gs.");
};

var pintToLiter = function() {
	var input = parseInt(prompt("What is the volume in pints?"));
	var output = (input * 0.473176);
  alert("The volume is " + output + "l.");
};

var flozToMl = function() {
	var input = parseInt(prompt("What is the volume in Fluid Ounces?"));
	var output = (input * 29.5735);
  alert("The volume is " + output + "ml.");
};

poundsToKilograms();
ounceToGram();
pintToLiter();
flozToMl();
