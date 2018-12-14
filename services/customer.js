var request = require("request");
const tokenManager = require('../services/token');
require('dotenv').config()


exports.getCustomerBasicInformation = function(token, callback) {

    var options = { method: 'GET',
        url: 'https://sbapi.bancolombia.com/hackathon/v1/sales-services/customer-management/customer-reference-data-management/customer',
        headers:
            {
                'cache-control': 'no-cache',
                Authorization: 'Bearer ' + token } };

    request(options, function (error, response, body) {
        if (error) throw new Error(error);

        console.log(body);
        callback(null, body)
    });
}


exports.getCustomerDetails = function(token, callback) {

    var options = { method: 'GET',
      url: process.env.URL_BASE + '/sales-services/customer-management/customer-reference-data-management/customer-details',
      headers: 
       { 'cache-control': 'no-cache',
         Accept: 'application/json',
         Authorization: 'Bearer ' + token } };
    
    request(options, function (error, response, body) {
        if (error) callback(err);

        console.log(body);
        callback(null, body);
    });
        

}


exports.getCustomerFinancialData = function(token, callback) {

    var options = { method: 'GET',
      url: process.env.URL_BASE + '/sales-services/customer-management/customer-precedents/customers/financial-data',
      headers: 
       { 'cache-control': 'no-cache',
         Accept: 'application/vnd.bancolombia.v1+json',
         Authorization: 'Bearer ' + token } };
    
    request(options, function (error, response, body) {
        if (error) callback(err);

        console.log(body);
        callback(null, body);
    });        

}


exports.getCustomerUbication = function(token, callback) {

    var options = { method: 'GET',
      url:  process.env.URL_BASE + '/sales-services/customer-management/customer-reference-data-management/customers/ubication',
      headers: 
       { 'cache-control': 'no-cache',
         Accept: 'application/vnd.bancolombia.v1+json',
         Authorization: 'Bearer ' + token } };
    
    request(options, function (error, response, body) {
        if (error) callback(err);

        console.log(body);
        callback(null, body);
    });

}