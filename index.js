"use strict";

/**
 * Sony Lifelog API
 * @type {{}}
 */

/** Whether an object is strictly an array */
var isArray = require('util').isArray;

/** Request Module **/
var request = require('request');

/** Application Side **/
var appObj = require('./application');

/** Authentication Side **/
var authObj = require('./auth');

var SonyLifelog =  {

    app: function(obj){
        /** Application Object **/
        if(obj.token){
            return appObj(obj);
        }
        return null;
    },
    auth: function(obj){
        /** Validate Auth Object **/
        if(obj.client_id && obj.scope && obj.client_secret){
            return authObj(obj);
        }
        return null;
    }
};


module.exports = SonyLifelog;
