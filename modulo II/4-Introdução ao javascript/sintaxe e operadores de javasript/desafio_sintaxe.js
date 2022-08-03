function comparaNumeros(num1, num2) {
    const primeiraFrase = criaPrimeiraFrase(num1, num2);
    const segundaFrase = criaSegundaFrase(num1, num2);

    return `${primeiraFrase} ${segundaFrase}`;
}

function criaPrimeiraFrase(num1, num2) {
    let saoiguais = '';
    if (num1 != num2){
        saoiguais = 'não';
    }
    return `Os Números ${num1} e ${num2} ${saoiguais} são iguais.`;
}

function criaSegundaFrase(num1, num2) {
    let resultado = num1 + num2;
    let resultado10 = "menor";
    let resultado20 = "menor";

    if (resultado > 10){
        resultado10 = 'maior';
    }
    if (resultado > 20){
        resultado20 = 'maior';
    }
    return ` Sua soma é ${resultado}, que é ${resultado10} que 10 e ${resultado20} que 20.`;
}

console.log(comparaNumeros(10,25));
