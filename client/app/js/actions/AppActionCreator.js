
var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants  = require('../constants/AppConstants');
var Promise       = require('es6-promise').Promise;

var url = 'localhost:8080/api/todo';

var AppActionCreators = {

    /*
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

    check: function( val ){

        var target = { id: val.id, status: !val.status };

        $.ajax('http://' + url + '/completed',
        {
            type:"PUT",
            data: target,

            success: function(data, status, jqxhr){

                AppDispatcher.handleViewAction({

                    actionType: AppConstants.TODO_STATUS,
                    items: target
                });

            },

            error: function( err, status, errText ){
                console.error( 'ERROR', err.responseText );
            }

        })
    },

    modify: function( val ){

        AppDispatcher.handleViewAction({

            actionType: AppConstants.TODO_MODIFY,
            items: val
        });
    },

    update: function( val, newJob ){

        var target = { id: val.id, job: newJob };

        $.ajax('http://' + url,
        {
            type:"PUT",
            data: target,

            success: function(data, status, jqxhr){

                AppDispatcher.handleViewAction({

                    actionType: AppConstants.TODO_UPDATE,
                    items: target
                });

            },

            error: function( err, status, errText ){
                console.error( 'ERROR', err.responseText );
            }

        })
    },


    remove: function( val ){

        var target = { id: val.id };

        $.ajax('http://' + url,
        {
            type:"DELETE",
            data: target,

            success: function(data, status, jqxhr){

                AppDispatcher.handleViewAction({

                    actionType: AppConstants.TODO_REMOVE,
                    items: target
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
