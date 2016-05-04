/**
 * Created by macbook on 5/3/16.
 */

//calculate the sum and average for the following input (non-number elements should be ignored)

var elements = ["0", 2, 4, 6, null, [], 8, 10];
//converting array to string and remove everything, which is not digit
var arr = [];

var array = elements.sort(function(a,b) {return a-b});
// document.writeln(array);
var arr = array.splice(3,5);
document.writeln(arr + "</br>");

//function for calculating sum
var sum = _.reduce(arr, function(memo, num){ return memo + num; }, 0);
document.writeln("The sum of the elements is: " + sum + "</br>");

//function for calculating average sum
var average =_.reduce(arr, function(memo, num){ return memo + num; }, 0)/ arr.length;
document.writeln("The average sum is: " + average + "</br>");