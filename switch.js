const color ='yellow'
if(color === 'green'){
    console.log('you are my green friend')
}

else if(color === 'blue'){
    console.log('you are my blue friend')
}

else if(color === 'red'){
    console.log('you are my red friend')
}

else if(color === 'white'){
    console.log('you are my white friend')
}

else if(color === 'yellow'){
    console.log('you are my yellow friend')
}

else{
    console.log('you are my black friend')
}

// how to use switch. this is faster version of the 'if else'

/* alternative of 'if else' is 'switch' */

switch(color){
    case 'green':
        console.log('you are my green friend');
        break;
    case 'blue':
        console.log('you are my blue friend');
        break;
    case 'white':
        console.log('you are my white friend');
        break;
    case 'red':
        console.log('you are my red friend');
        break;
    case 'yellow':
        console.log('you are my yellow friend');
        break;
    default:
        console.log('you are my kala friend')
}