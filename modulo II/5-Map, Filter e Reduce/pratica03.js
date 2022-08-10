// Filtro que recebe Array e repassa Par
function filtraPares(arr){
    return arr.filter(callbackPar);
}

// Filtro que recebe array e rapssa IMpar
function filtraImpares(arr){
    return  arr.filter(callbackImpar);
}
// Condicional que passa para filtro a condição par
function callbackPar(item){
    return item % 2 === 0;
}

// Condicinal que passa para filtro a condição IMpar
function callbackImpar(item){
    return item % 2 !== 0;
}

// Array que passamos as funções
const meuArray = [1, 20, 3, 6, 8, 20, 42];

// Console log para passar na tela
console.log("O Array Passado é: ", meuArray)

console.log("Os Númreo pares são:",filtraPares(meuArray));

console.log("Os números Impares são:",filtraImpares(meuArray));