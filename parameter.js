/* 
if i take a parameter (money) during function than i need to set the value of the parametere when i call the function */

function bringSinggara(money){
    console.log('mama singgara den')
    console.log(money)
}
bringSinggara(500);


// to declare a function 
function bringSinggara(money){
    console.log('aai nen khan')
    console.log('eto tk disen:', money)
}
// how to call the previous function. the value will put here it will be the value of the function
// bringSinggara(400); ---> eta akta 
// i can give here anaother variable which will be the value of the function i mean 'money'
var taka = 300;
bringSinggara(taka);


// i can give several parameter 
function add(num1, num2){
    console.log('going to add:', num1, num2)
}
// function call 
add(229, 123);

function sum (a, b, c, d, e, f){
   console.log(a, b, c, d, e, f)
   console.log(sum)
}
// function call 
sum(12, 13, 14, 15)


