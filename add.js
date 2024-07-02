// Add several variable in the function call--

/* function add(num1, num2){
    const sum = num1 + num2;
    return sum;
}

const result1 = add(12, 13)
const result2 = add(35, 7)
const finalResult = add(result1, result2)
console.log(finalResult)
console.log(result2) */



function add(item1, item2){
    const sum = item1 + item2;
    return sum
}

const num1 = add(12, 14);
const num2 = add(34, 7);
const totalNum = add(num1, num2)
console.log(num1)
console.log(totalNum)