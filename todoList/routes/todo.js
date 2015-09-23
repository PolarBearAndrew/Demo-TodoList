var Sequelize = require('sequelize');
var express   = require('express');
var router    = express.Router();

// var sequelize = new Sequelize('todoList', 'root', 'root');

var sequelize = new Sequelize('todoList', 'root', 'root', {
  host: 'localhost',
  port: '8889',
  dialect: 'mysql',

  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },

  // SQLite only
  // storage: 'path/to/database.sqlite'
});

var Todo = sequelize.define('todo', {
  job: {
    type: Sequelize.STRING
  },
  status: {
    type: Sequelize.STRING
  }
}, {
  freezeTableName: true
});


/* [POST] 新增一筆todo
 *
 */
router.post('/', function(req, res, next) {

  res.end();
});

/* [GET] 取得所以有todo
 *
 */
router.get('/', function(req, res, next) {

  Todo.sync({force: false})
      .then( () => {

        return Todo.create({
          job: 'myJOB2',
          status: '0'
        });
      });

  res.send( { api: '[get] todo '} );
});

/* [GET] 取得完成/未完成的todo
 *
 */
router.get('/:status', function(req, res, next) {

  res.end();
});

/* [PUT] 新增一筆todo
 * input: todoId + info
 */
router.put('/', function(req, res, next) {

  res.end();
});

/* [DELETE] 刪除一筆todo
 * input: todoId
 */
router.put('/', function(req, res, next) {

  res.end();
});


module.exports = router;
