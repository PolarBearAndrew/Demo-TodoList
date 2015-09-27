
var AppConstants = require('../constants/AppConstants');
var Dispatcher = require('flux').Dispatcher;

var AppDispatcher = new Dispatcher();

$.extend( AppDispatcher, {

    handleServerAction: function(action) {
        var payload = {
            source: AppConstants.SOURCE_SERVER_ACTION,
            action: action
        };

        this.dispatch(payload);
    },

    handleViewAction: function(action) {
        var payload = {
            source: AppConstants.SOURCE_VIEW_ACTION,
            action: action
        };

        this.dispatch(payload);
    },

    handleRouterAction: function(path) {
        this.dispatch({
            source: AppConstants.SOURCE_ROUTER_ACTION,
            action: path
        });
    }
});

module.exports = AppDispatcher;
