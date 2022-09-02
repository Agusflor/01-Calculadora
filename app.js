const process=require('process');

const sumar = require('./sumar');
const restar = require('./restar');
const multiplicar = require('./multiplicar');
const dividir = require('./division');

const operacion= process.argv[2];
const numeroA= +process.argv[3];
const numeroB= +process.argv[4];

if (operacion=== "sumar"){
   console.log(sumar(numeroA, numeroB));

}else if (operacion === "restar"){
    console.log(restar(numeroA, numeroB));
}else if(operacion ==="multiplicar"){
    console.log(multiplicar(numeroA,numeroB))
}else if (operacion==="dividir"){
    console.log(dividir(numeroA, numeroB))
};
