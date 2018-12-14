var request = require("request");
const tokenManager = require('../services/token');
require('dotenv').config()


exports.getCustomerBasicInformation = function(callback) {

    let token = getCurrentToken();

    var options = { method: 'GET',
    url: process.env.URL_BASE + '/sales-services/customer-management/customer-reference-data-management/customer',
    headers: 
    {  'cache-control': 'no-cache',
        Accept: 'application/vnd.bancolombia.v1+json',
        Authorization: token } };

    request(options, function (error, response, body) {
    if (error) throw new Error(error);
        console.log(body);

    });
}


exports.getCustomerDetails = function(callback) {

    let token = getCurrentToken();

    var options = { method: 'GET',
      url: process.env.URL_BASE + '/sales-services/customer-management/customer-reference-data-management/customer-details',
      headers: 
       { 'cache-control': 'no-cache',
         Accept: 'application/json',
         Authorization: token } };
    
    request(options, function (error, response, body) {
      if (error) throw new Error(error);
    
      console.log(body);
    });
        

}


exports.getCustomerFinancialData = function(callback) {

    let token = getCurrentToken();

    var options = { method: 'GET',
      url: process.env.URL_BASE + '/sales-services/customer-management/customer-precedents/customers/financial-data',
      headers: 
       { 'cache-control': 'no-cache',
         Accept: 'application/vnd.bancolombia.v1+json',
         Authorization: token } };
    
    request(options, function (error, response, body) {
      if (error) throw new Error(error);
    
      console.log(body);
    });        

}


exports.getCustomerUbication = function(callback) {

    let token = getCurrentToken();

    var options = { method: 'GET',
      url:  process.env.URL_BASE + '/sales-services/customer-management/customer-reference-data-management/customers/ubication',
      headers: 
       { 'cache-control': 'no-cache',
         Accept: 'application/vnd.bancolombia.v1+json',
         Authorization: token } };
    
    request(options, function (error, response, body) {
      if (error) throw new Error(error);
    
      console.log(body);
    });
        

}