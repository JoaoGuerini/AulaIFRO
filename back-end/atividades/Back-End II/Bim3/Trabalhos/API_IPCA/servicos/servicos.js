import { json } from 'express'
import historicoInflacao from '../dados/dados.js'

export const returnAll = () => {
    return historicoInflacao
}

export const returnYears = (yearInput) => {
    parseInt(yearInput, 10)

    if(yearInput <=2014 || yearInput >= 2025 || isNaN(yearInput)) {
        console.log('tipo' + typeof(yearInput) + 'sdsa' + typeof(Number))
        return 'Dados não encontrados'
    }

    else{
        const allForYear = historicoInflacao.filter(year => (year.ano == yearInput))
        return (allForYear)
    }
}

export const returnId = (inputId) => {
    parseInt(inputId, 10)

    if(isNaN(inputId)){
        return 'Dados não encontrados'
    }
    else{
        return historicoInflacao.find(id => id.id == inputId)
    }

}

export const returnCalc = (valor, mesInicial, anoInicial, mesFinal, anoFinal) => {
    let resultado = valor;
    let initValue = historicoInflacao.find(item => item.ano === anoInicial && item.mes === mesInicial);

    while (initValue.ano < anoFinal || (initValue.ano === anoFinal && initValue.mes <= mesFinal)) {
        console.log(initValue)
        resultado *= (1 + initValue.ipca / 100); // é  a mesmo coisa que: resultado = valor * ((1 + (ipca1/100)) * (1 + (ipca2/100)) * (1 + (ipcaN/100)))
        initValue.mes += 1;

        if (initValue.mes > 12) {
            initValue.mes = 1;
            initValue.ano += 1;
        }
    }

    return `$ resultado: ${resultado.toFixed(2)}`;
};
