const calcularINSS = require("./calculo_inss");
const calcularIR = require("./calculo_imposto_renda");
const calcularSalarioLiquido = require("./calculo_salario_liquido");
const readline = require("readline");

const input = readline.createInterface(process.stdin,process.stdout);

//funçaõ para formatar cpf
function formatarCPF(cpf){
    return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, `$1.$2.$3-$4`)
}

let nome = "";
let cpf = "";
let mes = 0;
let salario = 0;
let salarioLiquido = 0;
let inss = 0;
let ir = 0;

input.question("Nome: ", (nomeDigitado) =>{
    nome = nomeDigitado;

input.question("CPF: ", (cpfDigitado) =>{
    cpf = formatarCPF(cpfDigitado);

input.question("Mês do pagamento (formato XX numerico): ", (mesDigitado) =>{
    mes = mesDigitado;

input.question("Salário bruto: ", (salarioDigitado) =>{
    salario = salarioDigitado;
input.close();

salarioLiquido = calcularSalarioLiquido(salario);
inss = calcularINSS(salario);
ir = calcularIR(salario);
console.log("--Folha de Pagamento--");
console.log("Nome: " + nome);
console.log("CPF: " + cpf);
console.log("Salário Bruto: R$ " + salario);
console.log("INSS: R$ "+ inss);
console.log("Imposto de Renda: R$ " + ir);
console.log("Salário líquido: R$ " + salarioLiquido);

});
});
});
});  