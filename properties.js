var shoppingCart = {
    books: 3,
    sunglass: 1,
    keyborad: 5,
    mouse: 1,
    pen: 25
}

// 3 ways to get the property value 

// 1.  how many pen i have boutght. i can do it when i know the specific property name, use dot notation to get the property value.
var penCount = shoppingCart.pen;
// 2.  alternative system to get the property-- 
// i can do it when i know the specific property name, use dot notation to get the property value.
var pencount2 = shoppingCart['pen']

// 3.  another system-- if the name of the property in the variable how to do it. this is more dynamic system

var propertyName = 'mouse';
var propertyValue = shoppingCart[propertyName]
// console.log(propertyName, propertyValue)

// to get all the properties in a array 
// var properties = Object.keys(shoppingCart)
// console.log(properties)

// to get all the value 
// var propertyValue = Object.values(shoppingCart)
// console.log(propertyValue)

console.log(shoppingCart)

// set propety values 

// first system 

shoppingCart.mouse = 15;
console.log(shoppingCart)

// second system 

shoppingCart['mouse'] = 29
console.log(shoppingCart)

// third system (it is a variable)
shoppingCart[propertyName] = 89;
console.log(shoppingCart)