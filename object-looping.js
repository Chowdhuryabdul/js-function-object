var shoppingCart = {
    books: 3,
    sunglass: 1,
    keyborad: 5,
    mouse: 1,
    pen: 25,
    shoes: 2,
}


// to get keys 

const keys = Object.keys(shoppingCart);
console.log(keys)

// to get value 

const value = Object.values(shoppingCart)
console.log(value)


// to get the name of the property and the value of the property throguh loop 

for(var i = 0; i < keys.length; i++ ){
    // console.log(keys[i])
    var propertyName = keys[i];
    var propertyValue = shoppingCart[propertyName];
    // console.log(propertyName, propertyValue)
}

// another way--

// for... in loop

for(var propertyName in shoppingCart){
   const value = shoppingCart[propertyName]
    console.log(propertyName, value)
}