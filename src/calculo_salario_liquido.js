const calcularINSS = require("./calculo_inss");
const calcularIR = require("./calculo_imposto_renda");

function calcularSalarioLiquido(salarioBruto){

    let salarioLiquido = 0;
    let inss = 0;
    let ir = 0;

    inss = calcularINSS(salarioBruto);
    ir = calcularIR(salarioBruto);
    salarioLiquido = salarioBruto - inss - ir;

 return salarioLiquido.toFixed(2);
}
module.exports = calcularSalarioLiquido;