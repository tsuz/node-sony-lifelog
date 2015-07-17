"use strict";


var QueryBuilder = {};

/** Configuration **/
var config = require('./config');

var baseURL = config.baseURL;

var version = config.version;


/** Common URL used for all kinds */
var commonURL = baseURL + '/'+version+'/users/me';

/** Activities Checker */
var activitiesRegExp = new RegExp('^activities','i');

/** Application Checker */
var applicationRegExp = new RegExp('^application','i');

QueryBuilder.build = function(event, parameters){

    if(!event) return commonURL;

    if(event === 'user')
    {
        return commonURL + '/user';
    }
    else if(event === 'activities')
    {
        var url = commonURL + '/activities';
        return combineParameters(url, parameters);
    }
    else if(activitiesRegExp.test(event) === true)
    {
        parameters.type = event;
        var url = commonURL + '/activities';
        return combineParameters(url, parameters);
    }
    else if(applicationRegExp.test(event) === true)
    {
        parameters.type = event;
        var url = commonURL + '/activities';
        return combineParameters(url, parameters);
    }
    else if(event === 'location')
    {
    // Single Location
        return commonURL + '/locations/' + parameters;
    }
    else if(event === 'locations')
    {
    // Multiple Location
        var url = commonURL + '/locations';
        return combineParameters(url, parameters);
    }
    else
    {
        return commonURL;
    }

};

/**
 * Combine Paramters into URL
 * @param event
 * @param paramters
 */
function combineParameters(url, parameters){
    if(!parameters) return url;

    url += '?';
    for(var key in parameters){
        url += key + '=' + parameters[key] + '&';
    }
    return url.substring(0, url.length-1);
}


module.exports = QueryBuilder;