function substituirPares(array){
    for(let i = 0;  i < array.length; i++){
        if (array[i] === 0){
        console.log("Você já é zero!!")
    } else if (array[i] % 2 === 0) {
        console.log(`Substituindo ${array[i]} por 0...`);
        array[i] = 0;
    }
}
return array;
}

let array = [1,3,4,6,7,30,80,90];
console.log(substituirPares(array));
