// how to get the average--

/* function makeAverage (num1, num2, num3){
    const total = num1 + num2 + num3;
    const average = total / 3;
    return average
}

const num1Value = 12;
const num2Value = 14;
const num3Value = 18;

var myAverage = makeAverage(num1Value, num2Value, num3Value)
console.log('this is the make average', myAverage) */

/* function bar(){
    console.log('bar')
}

bar()

function foo(){
    console.log('foo')
    bar();
}

foo(); */

// function oddEven(number){
//     console.log('want to find odd or even number', actualNumnber)
// }

// const number = 20;
// var actualNumnber = oddEven[number];

const signal = ('red');
    if(signal === 'red'){
        console.log('you will be in danger')
    }
    else if(signal === 'yellow'){
        console.log('you should stop')
    }
    else if(signal === 'green'){
        console.log('you can cross')
    }
    else{
        console.log('you must need to see the traffice light carefully')
    }

switch(signal){
    case 'red':
        console.log('you will be in danger');
        break;
    case 'yellow':
        console.log('you should stop')
        break;
    case 'green':
        console.log('you can cross');
        break
    default:
        console.log('you must need to see the traffice light carefully')  ; 

}





