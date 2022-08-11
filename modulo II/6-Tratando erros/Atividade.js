function validaArray(arr, num) {
    try {
        if (!arr && !num) throw new ReferenceError('ENVIE OS PARAMETROS');

        if (typeof arr !== 'object') 
            throw new TypeError("ARRAY PRECISA SER DO TIPO OBJECT");

        if (typeof num !== 'number') 
            throw new TypeError('ARRAY PRECISA SER DO TIPO OBJECT1');

        if(arr.length !== num) 
            throw new RangeError('Tamanho Invalido!');
        return arr;
    } catch(e){
        if(e instanceof ReferenceError){
            console.log("Este erro é um ReferenceError");
            console.log(e.message);
        }else if(e instanceof TypeError){
            console.log("Este erro é um TypeError");
            console.log(e.message);
        }else if(e instanceof RangeError){
            console.log("Este erro é um RangeError");
            console.log(e.message);
        }else {
            console.log("Tipo de erro não esperado:" + e);
        }
    }

}

console.log(validaArray([0, 1, 1, 2, 3], 5));