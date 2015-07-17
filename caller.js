"use strict";

/**
 * This makes request to the Lifelog Server
 * @type {{}}
 */


var Promise = require('bluebird');

var request = require('request');


/**
 * All Error Codes
 * @type {{statusCode: number, title: string, description: string}[]}
 */
var ErrorCodes = [
    {
        statusCode: 401,
        title: 'AccessDenied',
        description: 'You do not have permission to access the requested resource. The error message may contain more information on why access was denied.'
    },
    {
        statusCode: 402,
        title: 'InsufficientAuthentication',
        description: 'No access token was provided, or the provided access token was invalid. The error message may contain more information.'
    },
    {
        statusCode: 404,
        title: 'ResourceNotFound',
        description: 'The requested resource does not exist.'
    },
    {
        statusCode: 422,
        title: 'AccessDenied',
        description: 'The request could not be parsed or contained invalid values. The error message contains more information about which fields were invalid.'
    }
];

/**
 * Handle Rejection with Description
 * @param err
 * @returns {Function}
 */
var rejectHandler = function(err){
    return function(reject){
        if(err.description){
            // If description is not set, then append from above
            var obj;
            for(var i = 0; i < ErrorCodes.length; i++){
                if(err.code == ErrorCodes[i].statusCode){
                    err.description = ErrorCodes[i].description;
                    break;
                }
            }
        }
        reject(err);
    };
};

/**
 * Make Request
 * @param options
 * @returns {bluebird}
 */
var Caller = function(token){

    /** Options for HTTPS Request **/
    var options = {};

    options.headers = {
        'Authorization' : 'Bearer ' + token,
        'Accept': 'application/json',
        'Accept-Encoding': 'gzip',
        'Content-Encoding': 'gzip'
    };

    return {
        makeRequest: function(url){
            return url;
            return new Promise(function (resolve, reject) {
                options.url = url;
                request(options, function(err, response, body){
                    if(err){
                        rejectHandler(err);
                    }
                    else{
                        resolve(body);
                    }
                });

            });
        },
        makePostRequest: function(customObj){
            return new Promise(function (resolve, reject) {
                request.post(customObj, function(err, response, body){
                    if(err){
                        rejectHandler(err);
                    }
                    else{
                        resolve(body);
                    }
                });

            });
        }
    }

};


module.exports = Caller;