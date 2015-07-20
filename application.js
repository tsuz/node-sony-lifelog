"use strict";

/**
 * This builds queries
 * @type {exports}
 */
var QueryBuilder = require('./query-builder');

/** Request Maker **/
var caller = require('./caller');

var Application = function(token){

    if(!token){
        throw "Paramter token is null";
    }

    var _token = token;

    var App = {
        user: _user,
        activitiesAll: _activities,
        activities: {
            applicationAll: _activities_application,
            application: {
                album: _activities_application_camera,
                books: _activities_application_books,
                browsing: _activities_application_browsing,
                camera: _activities_application_camera,
                communication: _activities_application_communication,
                game: _activities_application_books,
                movie: _activities_application_movie,
                other: _activities_application_other,
                tv: _activities_application_movie
            },
            camera: _activities_camera,
            music: _activities_music,
            physicalAll: _activities_physical_all,
            physical: {
                walk: _activities_physical_walk,
                run: _activities_physical_run,
                bicycle:_activities_physical_bicycle,
                other: _activities_physical_other
            },
            sleep: _activities_sleep,
            transport: _activities_transport
        },
        locations: {
            single: _locations_single,
            multiple: _locations_multiple
        }
    };

    return App;


    /**
     * Get User Object
     * @returns Promise
     */
    function _user(){
        var url = QueryBuilder.build();

        return caller.makeRequest(url, _token, true);
    }

    /**
     * Get All Activities
     * @returns Promise
     */
    function _activities(params){
        var url = QueryBuilder.build('activities', params);

        return caller.makeRequest(url, _token, true);
    }


    /**
     * Activites -> Books
     * @returns Promise
     */
    function _activities_application_books(params){
        var url = QueryBuilder.build('application:books', params);
        
        return caller.makeRequest(url, _token, true);
    }

    /**
     * Activities -> Browsing
     * @param params
     * @returns Promise
     */
    function _activities_application_browsing(params){
        var url = QueryBuilder.build('application:browsing', params);
        
        return caller.makeRequest(url, _token, true);
    }

    /**
     * Activities -> All
     * @param params
     * @private
     */
    function _activities_application(params){
        var url = QueryBuilder.build('application', params);

        return caller.makeRequest(url, _token, true);
    }

    /**
     * Activities -> Camera
     * @param params
     * @returns Promise
     */
    function _activities_application_camera(params){
        var url = QueryBuilder.build('application:camera', params);
        
        return caller.makeRequest(url, _token, true);
    }

    /**
     * Activities -> Communication
     * @param params
     * @returns Promise
     */
    function _activities_application_communication(params){
        var url = QueryBuilder.build('application:communication', params);
        
        return caller.makeRequest(url, _token, true);
    }

    /**
     * Activities -> Game
     * @param params
     * @returns Promise
     */
    function _activities_application_game(params){
        var url = QueryBuilder.build('application:game', params);
        
        return caller.makeRequest(url, _token, true);
    }

    /**
     * Activities -> Movie
     * @param params
     * @returns Promise
     */
    function _activities_application_movie(params){

        var url = QueryBuilder.build('application:movie', params);
        return caller.makeRequest(url, _token, true);
    }

    /**
     * Activities -> Music
     * @param params
     * @returns Promise
     */
    function _activities_application_music(params){
        var url = QueryBuilder.build('application:music', params);
        
        return caller.makeRequest(url, _token, true);
    }


    /**
     * Activities -> Others
     * @param params
     * @returns Promise
     */
    function _activities_application_other(params){
        var url = QueryBuilder.build('application:other', params);
        
        return caller.makeRequest(url, _token, true);
    }

    /**
     * Camera
     * @param params
     * @returns Promise
     */
    function _activities_camera(params){
        if(!params) params = {};
        params.type = 'camera';
        var url = QueryBuilder.build('activities', params);
        
        return caller.makeRequest(url, _token, true);
    }

    /**
     * Music
     * @param params
     * @returns Promise
     */
    function _activities_music(params){
        if(!params) params = {};
        params.type = 'music';
        var url = QueryBuilder.build('activities', params);
        
        return caller.makeRequest(url, _token, true);
    }


     /**
     * Activities -> Physical
     * @param params
     * @returns Promise
     */
    function _activities_physical_all(params){
        if(!params) params = {};
        params.type = 'physical';
        var url = QueryBuilder.build('activities', params);
        
        return caller.makeRequest(url, _token, true);
    }

     /**
     * Activities -> Physical -> Walk
     * @param params
     * @returns Promise
     */
    function _activities_physical_walk(params){
        if(!params) params = {};
        params.type = 'physical:walk';
        var url = QueryBuilder.build('activities', params);
        
        return caller.makeRequest(url, _token, true);
    }


     /**
     * Activities -> Physical -> Run
     * @param params
     * @returns Promise
     */
    function _activities_physical_run(params){
        if(!params) params = {};
        params.type = 'physical:run';
        var url = QueryBuilder.build('activities', params);
        
        return caller.makeRequest(url, _token, true);
    }

     /**
     * Activities -> Physical -> Bicycle
     * @param params
     * @returns Promise
     */
    function _activities_physical_bicycle(params){
        if(!params) params = {};
        params.type = 'physical:bicycle';
        var url = QueryBuilder.build('activities', params);
        
        return caller.makeRequest(url, _token, true);
    }
     /**
     * Activities -> Physical -> Other
     * @param params
     * @returns Promise
     */
    function _activities_physical_other(params){
        if(!params) params = {};
        params.type = 'physical:other';
        var url = QueryBuilder.build('activities', params);
        
        return caller.makeRequest(url, _token, true);
    }


    /**
     * Activities -> Sleep
     * @param params
     * @returns Promise
     */
    function _activities_sleep(params){
        if(!params) params = {};
        params.type = 'sleep';
        var url = QueryBuilder.build('activities', params);
        
        return caller.makeRequest(url, _token, true);
    }

    /**
     * Activities -> Transport
     * @param params
     * @returns Promise
     */
    function _activities_transport(params){
        if(!params) params = {};
        params.type = 'transport';
        var url = QueryBuilder.build('activities', params);
        
        return caller.makeRequest(url, _token, true);
    }


    /**
     * Locations -> Single
     * @param params
     * @returns Promise
     */
    function _locations_single(params){
        if(!params) params = {};
        params.type = 'transport';
        if(!params.id) throw "To call 'Single Location', id parameter must be declared in the parameter object";
        var url = QueryBuilder.build('location', params.id);
        
        return caller.makeRequest(url, _token, true);
    }

    /**
     * Locations -> Multiple
     * @param params
     * @returns Promise
     */
    function _locations_multiple(params){
        if(!params) params = {};
        params.type = 'transport';
        var url = QueryBuilder.build('locations', params);
        
        return caller.makeRequest(url, _token, true);
    }

};



module.exports = Application;