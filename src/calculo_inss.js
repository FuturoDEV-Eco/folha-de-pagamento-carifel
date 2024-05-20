function calcularINSS(salarioBruto){

    const teto_inss = 908.85;
    let inss = 0;

    if(salarioBruto <= 1412){
        inss = Number(salarioBruto * 0.075);
    }
    else if(salarioBruto > 1412 && salarioBruto <= 2666.68){
        inss = Number(salarioBruto * 0.09); 
    }
    else if(salarioBruto > 2666.68 && salarioBruto <= 4000.03){
        inss = Number(salarioBruto * 0.12); 
    }
    else {
        inss = Number(salarioBruto * 0.14);   
    }
   
    if(inss > teto_inss){
        inss = teto_inss;
    }
    return inss.toFixed(2);
}

module.exports = calcularINSS;