var request = require("request");

exports.getCards = function(token, callback) {
    var options = { method: 'GET',
        url: 'https://sbapi.bancolombia.com/hackathon/v1/operations/product-specific/cards',
        headers:
            { 'cache-control': 'no-cache',
                Authorization: 'Bearer ' + token,
                Accept: 'application/vnd.bancolombia.v1+json' } };

    request(options, function (error, response, body) {
        if (error) callback(err);

        console.log(body);
        callback(null, body);
    });
};

exports.getCardTransactions = function(cardId, token, callback){
    var options = { method: 'GET',
        url: 'https://sbapi.bancolombia.com/hackathon/v1/operations/specific-products/cards/credit/' + cardId + '/transactions',
        headers:
            {   'cache-control': 'no-cache',
                Authorization: 'Bearer ' + token,
                Accept: 'application/vnd.bancolombia.v1+json' } };

    request(options, function (error, response, body) {
        if (error) callback(err);

        console.log(body);
        callback(null, body);
    });
};

exports.getCardDetail = function(cardId, token, callback){
    var options = { method: 'GET',
        url: 'https://sbapi.bancolombia.com/hackathon/v1/operations/specific-products/cards/credit/' + cardId + '/detail',
        headers:
            {   'cache-control': 'no-cache',
                Authorization: 'Bearer ' + token,
                Accept: 'application/vnd.bancolombia.v1+json' } };

    request(options, function (error, response, body) {
        if (error) callback(err);

        console.log(body);
        callback(null, body);
    });
};

