import historicoInflacao from '../dados/dados.js'

export const returnAll = () => {
    return historicoInflacao
}

export const returnYears = (yearInput) =>{
    console.log(yearInput)
    const dadosAno = []

    if(!yearInput || yearInput <=2014 || yearInput >= 2025) {
        return 'Dados não encontrados'
    }

    else{
        historicoInflacao.forEach(yearInput => {
            if(yearInput.ano === yearInput)
            {
                dadosAno.push(yearInput)
            }
        })
        return dadosAno
    }
}