var request = require("request");

exports.getAgents = function(token, callback){

    var options = { method: 'GET',
        url: 'https://sbapi.bancolombia.com/v1/sales-service/cross-channel/service-points/agents',
        qs:
            { latitude: '4.6169882',
                longitude: '-74.0686297',
                searchRadius: '0.1' },
        headers:
            {
                'cache-control': 'no-cache',
                Authorization: 'Bearer ' + token,
                Accept: 'application/vnd.bancolombia.v1+json' } };

    request(options, function (error, response, body) {
        if (error) callback(error);

        console.log(body);
        callback(null, body)
    });
};

exports.getBranches = function(token, callback){

    var options = { method: 'GET',
        url: 'https://sbapi.bancolombia.com/v1/sales-service/cross-channel/service-points/branches',
        qs:
            { latitude: '4.6169882',
                longitude: '-74.0686297',
                searchRadius: '0.1' },
        headers:
            {
                'cache-control': 'no-cache',
                Authorization: 'Bearer ' + token,
                Accept: 'application/vnd.bancolombia.v1+json' } };

    request(options, function (error, response, body) {
        if (error) callback(error);

        console.log(body);
        callback(null, body)
    });
};

exports.getAtms = function(token, callback){

    var options = { method: 'GET',
        url: 'https://sbapi.bancolombia.com/v1/sales-service/cross-channel/service-points/atms',
        qs:
            { latitude: '4.6169882',
                longitude: '-74.0686297',
                searchRadius: '0.1' },
        headers:
            {
                'cache-control': 'no-cache',
                Authorization: 'Bearer ' + token,
                Accept: 'application/vnd.bancolombia.v1+json' } };

    request(options, function (error, response, body) {
        if (error) callback(error);

        console.log(body);
        callback(null, body)
    });
};

