function calcularIR(salarioBruto){
   
    let ir = 0;

    if(salarioBruto > 2112 && salarioBruto <= 2826.65){
        ir = Number(salarioBruto * 0.075); 
    }
    else if(salarioBruto > 2826.65 && salarioBruto <= 3751.05){
        ir = Number(salarioBruto * 0.17); 
    }
    else if(salarioBruto > 3751.05 && salarioBruto <= 4664.68){
        ir = Number(salarioBruto * 0.225); 
    }
    else if(salarioBruto > 4664.68){
        ir = Number(salarioBruto * 0.275); 
    }
    return ir.toFixed(2);
    
}
module.exports = calcularIR;