
import express from 'express'
import Todo    from '../model/todo.js'

let router  = express.Router();
let debug   = require('debug')('API:todo');

/* [POST] 新增一筆todo
 * input  : job
 * output : id, job, status
 */
router.post('/', (req, res, next) => {

  // create
  Todo.sync( { force: false } )
      .then( () => {

        return Todo.create({
          job: req.body.job,
          status: 0
        });
      })
      .then( result => {

        debug('[PUT] 新增一筆todo, success', result.dataValues );
        res.json( { data: result.dataValues } );
      })
      .catch( err => {

        debug('[PUT] 新增一筆todo, fail', err.dataValues );
        next(err);
      });
});

/* [GET] 取得所以有todo
 *
 */
router.get('/', (req, res, next) => {


  res.end();

});

/* [GET] 取得完成/未完成的todo
 *
 */
router.get('/:status', (req, res, next) => {

  res.end();
});

/* [PUT] 新增一筆todo
 * input: todoId + info
 */
router.put('/', (req, res, next) => {

  res.end();
});

/* [DELETE] 刪除一筆todo
 * input: todoId
 */
router.put('/', (req, res, next) => {

  res.end();
});


module.exports = router;
