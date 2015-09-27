
var MainApp      = React.createFactory(require('./views/MainApp.jsx'));
var AppConstants = require('./constants/AppConstants');
var actions      = require('./actions/AppActionCreator');

$(function(){

  	actions.load();
  	React.render( MainApp(), document.getElementById('container') );
})
