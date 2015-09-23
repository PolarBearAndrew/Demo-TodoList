var Sequelize = require('sequelize');

var sequelize = new Sequelize('todoList', 'root', 'root', {
  host: 'localhost',
  port: '8889',
  dialect: 'mysql',

  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});

var Todo = sequelize.define('todo', {
  job: {
    type: Sequelize.STRING
  },
  status: {
    type: Sequelize.BOOLEAN
  },
  del: {
    type: Sequelize.BOOLEAN
  }
}, {
  freezeTableName: true
});

module.exports = Todo;
