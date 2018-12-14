require('dotenv').config();

let currentToken = "";

// FUNCION QUE RECUPERA EL TOKEN DE BD
exports.getCurrentToken = function() {
    return currentToken;
}

// FUNCION QUE GUARDA EL TOKEN ACTIVO EN BD
exports.setCurrentToken = function(tkn) {
    currentToken = tkn;
}