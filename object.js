// how to declare properties 

var student = {
    id: 115, 
    name: 'solaiman khan', 
    class: 9, 
    marks: 98
}

var mobile = {
    brand: 'samsung',
    price: 19000,
    storage: '64gb',
    camera: '7MP',
    color: 'black'
}

var myComputer = {
    brand: 'lenovo',
    price: 39000,
    coolor: 'silver',
    processor: 'i7'
}

console.log(myComputer.price)
console.log(myComputer.brand)

// if i want to change the value of the key 

myComputer.processor ='i79'
console.log(myComputer)