"use strict";


/** Makes requests */
var caller = require('./caller');


/**
 * Authentication Object
 * @param obj
 * Ex: {
 *  client_id: 'XXXXKEY',
 *  client_secret: 'XXXXKEY_SECRET',
 *  scope: 'lifelog.profile.read+lifelog.activities.read+lifelog.locations.read',
 * }
 * @returns {{redirectURL: Function, getAccessToken: Function, refreshToken: Function}}
 */

var Auth = function (obj){

    /** Check for required parameters */
    if(!obj.client_id
        || !obj.scope
        || !obj.client_secret){
        throw "At least one parameter: client_id, scope, client_secret is null";
    }


    /** Client ID **/
    var client_id = obj.client_id;

    /** Client Secret **/
    var client_secret = obj.client_secret;

    /** Scope **/
    var scope = obj.scope;

    return {
        /**
         * Get Redirect URL
         * @param code Unique Identifier used for callbacks
         */
        redirectURL: function(state){
            if(state){
                return 'https://platform.lifelog.sonymobile.com/oauth/2/authorize?client_id='+client_id+'&scope='+scope+'&state='+state;
            }
            return 'https://platform.lifelog.sonymobile.com/oauth/2/authorize?client_id='+client_id+'&scope='+scope;
        },
        /**
         * Get Access Token from Code Retrieved in the Callback
         * @param mixed String:code or Object:Object returned from the callback
         * Ex:
         *      'ma7cbM9d'
         *      or
         *      {
         *          "scope": "lifelog.profile.read lifelog.activities.read lifelog.locations.read",
         *          "state": "null",
         *          "code": "ma7cbM9d"
         *      }
         *
         * @returns obj Authorization Code Response
         */
        getAccessToken: function(obj){
            var code;
            if(typeof obj === 'string'){ // assume it's a code
                code = obj;
            } else if(typeof obj === 'object'){
                code = obj.code;
            } else{
                throw "Null parameter in Auth.getAccessToken(). It must be a code or a returned object from Lifelog callback";
            }

            if(!code) throw "'The authorization code you received in response to your authenticate request' is null";

            var body =
                'client_id='+client_id+
                '&client_secret='+client_secret+
                '&grant_type=authorization_code' +
                '&code='+code;

            return caller.makePostRequest({
                headers: {'content-type' : 'application/x-www-form-urlencoded'},
                url:     'https://platform.lifelog.sonymobile.com/oauth/2/token',
                body:    body
            });
        },
        refreshToken: function(refreshToken){
            if(!refreshToken) throw "refreshToken parameter is undefined";

            var body =
                'client_id='+client_id+
                '&client_secret='+client_secret+
                '&grant_type=refresh_token' +
                '&refresh_token='+refreshToken;

            return caller.makePostRequest({
                headers: {'content-type' : 'application/x-www-form-urlencoded'},
                url:     'https://platform.lifelog.sonymobile.com/oauth/2/token',
                body:    body
            });
        }
    }
};


module.exports = Auth;


