function add(number1, number2){
    console.log(number1, number2)
    var sum = number1 + number2;
    return sum;
}

/* there will be three thing you can do after return-
1. can not write any thing or keep it empty
2. you can wrtie a MAN or value 
3. you can write a variable when the call the funciton they will get this. */

/*--> if we think this without 'return' */

function add(number1, number2){
    console.log(number1, number2)
    var sum = number1 + number2;
    console.log(sum)
}
add(15, 20)

// in two cases we will get undefiend'

// 1. if we do not do anything from the function as return adn the valud of the return will be undefined
// 2. and if you write return but do not say anything. in such case you will get something undefined


// if we do it with the return-->

function add(number1, number2){
    console.log(number1, number2)
    var sum = number1 + number2;
    return sum;
    // this bit dark return means it will never be hit
    console.log('i need more money')
    return 15;
    retrun 'heelo'
}
var total = add(80, 20);
console.log('total', total)

/* note: if it hit in the 'return' in the function it will never go ahead */

/* anohter example */

function bringSingara(money){
    // can declare anohter vaiable
    var singaraPrice = 10;
    var quantity = money / singaraPrice;
    return quantity;
}

var myTaka = 150;
// var singaras = bringSingara(200)- i can write another way
var singaras = bringSingara(myTaka)
console.log('eating singaras:', singaras)


// another example--

function foodPrice(money){
    var somusaPrice = 5;
    var quantity = money / somusaPrice;
    return quantity;
}
var myTaka = 100;
var food = foodPrice(myTaka);
console.log('koita somusa khasi? seta dekhaw', food);
