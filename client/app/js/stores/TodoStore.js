/**
 * TodoStore
 */

//========================================================================
//
// IMPORT

var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants  = require('../constants/AppConstants');
var actions       = require('../actions/AppActionCreator');

var objectAssign = require('object-assign');
var EventEmitter = require('events').EventEmitter; // 取得一個 pub/sub 廣播器

//========================================================================

var Store = {};

// all toods
var arrTodos = [];

// ctlr
var filter = 'none';


/**
 * 建立 Store class，並且繼承 EventEMitter 以擁有廣播功能
 */
objectAssign( Store, EventEmitter.prototype, {

    /**
     * Public API
     * 供外界取得 store 內部資料
     */
    getTodos: function(){
        return arrTodos;
    },

    getFilter: function(){
        return filter;
    },
    //
    noop: function(){}
});

//========================================================================
//
// event handlers

Store.dispatchToken = AppDispatcher.register( function eventHandlers(evt){

    // evt .action 就是 view 當時廣播出來的整包物件
    // 它內含 actionType
    var action = evt.action;

    switch (action.actionType) {

        /**
         *
         */
        case AppConstants.TODO_LOAD:

            arrTodos = action.items.data;

            Store.emit( AppConstants.CHANGE_EVENT );

            break;

        case AppConstants.TODO_FILTER:

            filter = action.items;

            Store.emit( AppConstants.CHANGE_EVENT );

            break;

        case AppConstants.TODO_ADD:

            arrTodos.unshift(action.items.data);

            Store.emit( AppConstants.CHANGE_EVENT );

        case AppConstants.TODO_STATUS:

            arrTodos = arrTodos.map( function( val ){

                if( val.id === action.items.id ){

                    console.log('success');

                    var tmp = val;
                    tmp.status = !tmp.status;
                    return tmp;
                }

                return val;
            });

            Store.emit( AppConstants.CHANGE_EVENT );

        default:
    }
})

//
module.exports = Store;
