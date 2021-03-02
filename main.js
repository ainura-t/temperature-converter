var cur_celcius = 25;
var cur_fahrenheit = 75;

var c_to_f = (cur_celcius * 9);
c_to_f = c_to_f/5;
c_to_f = c_to_f + 32; 

var f_to_c = (cur_fahrenheit - 32);
f_to_c = f_to_c * 5;
f_to_c = f_to_c / 9;

document.write(cur_celcius + '\u00B0' + "C" + " in Farhenheit is " + c_to_f + '\u00B0' + "F");
document.write("<br>")
document.write(cur_fahrenheit + '\u00B0' + "F" + " in Celcius is " + f_to_c.toFixed(1) + '\u00B0' + "C");

