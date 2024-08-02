import input from 'readline-sync';

for (let cont = 1; cont <=10; cont++) {
    let nome = input.question(`Nome da ${cont + '°'} pessoa:`)
    let SalarioBruto = input.questionFloat(`Salário da ${cont + '°'} pessoa: `)
    //
    if(SalarioBruto <= 2.100){
        console.log(`Nome ${nome}\nIsento do imposto de renda.}`)
        continue
    }

    else if (SalarioBruto <= 2.800){
        let SalarioLiquido = SalarioBruto - (SalarioBruto * (7.5/100))
        console.log(`Nome ${nome}\nImposto de renda a ser pago: ${(SalarioLiquido.toFixed(2))}`)
    }

    else if (SalarioBruto <= 3.750){
        let SalarioLiquido = SalarioBruto - (SalarioBruto * (15/100))
        console.log(`Nome ${nome}\nImposto de renda a ser pago: ${(SalarioLiquido.toFixed(2))}`)
    }

    else if (SalarioBruto <= 4.660){
        let SalarioLiquido = SalarioBruto - (SalarioBruto * (22.5/100))
        console.log(`Nome ${nome}\nImposto de renda a ser pago: ${(SalarioLiquido.toFixed(2))}`)
    }

    else{
        let SalarioLiquido = SalarioBruto - (SalarioBruto * (27.5/100))
        console.log(`Nome ${nome}\nImposto de renda a ser pago: ${(SalarioLiquido.toFixed(2))}`)
    } 
}
