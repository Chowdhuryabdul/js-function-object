// section for the variable 

// 1. what is variable?
// Variables are containers for storing information. Creating a variable in JavaScript is called "declaring" a variable: var carName; After the declaration, the variable is empty (it has no value).

// 2. how to declare a variable?

// var item = 'volvo';
// var number = 20;

// 3. types of variable? and how to find the types of variable?

// There are three tyeps of variable- 1. string, 2. boolean and 3. Numeric

// 'var item = 'volvo';
// console.log(typeof item);
// var number = 20;
// console.log(typeof number);'


// 4. what are primitve and non-primitve data types?

// Primitive data structures are simple and predefined types like integers and booleans, used for basic data storage, whereas non-primitive structures like arrays and lists are more complex, designed for organizing collections of data and enabling advanced data manipulation.

// 5. Naming convention of the javascript variables?
// Varibale naming convention--
// Names can contain letters, digits, underscores and dollar signs
// Names must begin with letter!! Not with the number
// Names can also begin with the dollar sign 
// Names are case sensitive, thus y and Y are different variables

// 6. math operaitons?

var number1 = 12;
var number2 = 13;
// var sum = (number1 + number2)
// console.log(sum)

// var deduct = (number1 - number2)
// console.log(deduct)

// var mulitple = number1 * number2;
// console.log(mulitple)

// var devision = number1 / number2
// console.log(devision)

// var remainder = number1 % number2
// console.log(remainder)

var number1 = 12;
var number2 = 13;

// to add extra  value 
// number1 = number1 + 20;
// console.log(number1)

// number1 += 10;
// console.log(number1)

// number2 -= 10;
// console.log(number2)

// number2 *= 3
// console.log(number2)

// var number1 = 0.1;
// var number2 = 0.2;

// var sum = number1 + number2
// console.log(sum)
// var sum = sum.toFixed(3)
// console.log(sum)

// var sum = parseInt(sum)
// console.log(sum)

// var sum = parseFloat(sum)
// console.log(sum)

// Array------

// var items =[20, 23, 24, 25, 26]
// console.log(items.length)
// console.log(items[3])
// console.log(items[5])
// items [0] = 28;
// console.log(items)

// var position = items.indexOf(24);
// console.log(position)

// items.push(50)
// console.log(items)

// items.unshift(70)
// console.log(items)

// items.pop()
// console.log(items)

// items.shift()
// console.log(items)

// var delet = items.slice(2, 4)
// console.log(delet)

var myAmount = 50000;
var macBookPrice = 40000;
var gamingLaptop = 30000;
var lenovo = 20000;
var usedPc = 10000;
if(macBookPrice > myAmount){
    console.log('i will buy a macbook');   
}
else if(gamingLaptop > macBookPrice){
    console.log('i will buy a gaming LAptop')
}

else if(lenovo > gamingLaptop){
    console.log('i will buy lenovo')
}

else if(usedPc < lenovo){
    console.log('i will buy used one')
}

else{
    console.log('i will used mobile phone')
}


