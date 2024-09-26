let dados = require('./dados');

function retornarMensagemDoDia(dia) {
    return dados.frases[dia + 5];
};
exports.retornarMensagemDoDia = retornarMensagemDoDia;