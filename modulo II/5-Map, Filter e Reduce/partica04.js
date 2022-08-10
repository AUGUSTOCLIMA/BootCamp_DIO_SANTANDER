// function somaArray(arr){
//      return arr.reduce(function(prev, current){
//         return prev + current;
//     })
// }
// const array = [1, 2];

// console.log(somaArray(array));

const lista = [
    {
        name: 'sabão em pó',
        preco: 30
    },
    {
        name: 'detergente',
        preco: 15
    },
    {
        name: 'Qboa',
        preco: 3
    },
    {
        name: 'Bombril',
        preco: 50
    },
];

const saldoDisponivel = 100;

function calculaSaldo(saldoDisponivel, lista){
    return lista.reduce(function(prev, current, index){
        console.log('Rodada', index + 1);
        console.log({prev});
        console.log({current});
        return prev - current.preco;
    }, saldoDisponivel);
}

console.log(calculaSaldo(saldoDisponivel, lista));