const calcularINSS = require("./calculo_inss");
const calcularIR = require("./calculo_imposto_renda");
const calcularSalarioLiquido = require("./calculo_salario_liquido");


console.log(calcularINSS(3000))
console.log(calcularIR(3000))
console.log(calcularSalarioLiquido(3000));