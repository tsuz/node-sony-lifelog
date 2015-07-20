"use strict";

/**
 * Sony Lifelog API
 * Usage:
 *
 *      var lifelog = require('sony-lifelog');
 *
 *      // If you have access token,
 *      var app = lifelog.app({ token: 'token-bla' })
 *      app.users()
 *          .then(function(results){
 *              // do something with results
 *          }, function(reason){
 *              // error reason
 *          });
 *
 *      // If you don't have access token,
 *
 *      var auth = lifelog.auth({
 *          client_id: 'bla_key',
 *          secret: 'bla_key',
 *          scope: 'lifelog.profile.read+lifelog.activities.read+lifelog.locations.read'
 *      });
 *      var url = auth.getRedirectURL();
 *          // send user to url
 *
 *          // after callback operation...
 *          auth.getAccessToken(code)
 *              .then(function(results){
 *                  // do something with results
 *                  var accessToken = results.access_token;
 *
 *                  var app = lifelog.app({token: accessToken});
 *                  app.users()
 *                      .then(function(results){
 *                          // got this users result
 *                      }, function(reason){
 *                         // error reason
 *                      });
 *              }, function(reason){
 *                  // error reason
 *              });
 *
 *
 */


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
        if(obj.client_id || obj.scope || obj.client_secret){
            return authObj(obj);
        }
        return null;
    }
};


module.exports = SonyLifelog;
