/**
 *
 */
var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');
var Promise = require('es6-promise').Promise;

var url = 'localhost:8080/api/todo';
//var url = '120.96.75.142:8080';  //at home

var AppActionCreators = {

    /**
     * app init, init load
     */
    load: function(){

        $.ajax('http://' + url,
        {
            type:"GET",

            success: function(data, status, jqxhr){

                AppDispatcher.handleViewAction({

                    actionType: AppConstants.TODO_LOAD,
                    items: data
                });

            },

            error: function( err, status, errText ){
                console.error( 'ERROR', err.responseText );
            }

        })

    },

    filter: function( ctrl ){

        AppDispatcher.handleViewAction({

            actionType: AppConstants.TODO_FILTER,
            items: ctrl
        });
    },

    add: function( val ){

        $.ajax('http://' + url,
        {
            type:"POST",
            data: { job: val },

            success: function(data, status, jqxhr){

                AppDispatcher.handleViewAction({

                    actionType: AppConstants.TODO_ADD,
                    items: data
                });

            },

            error: function( err, status, errText ){
                console.error( 'ERROR', err.responseText );
            }

        })
    },

    noop: function(){}
};

module.exports = AppActionCreators;
