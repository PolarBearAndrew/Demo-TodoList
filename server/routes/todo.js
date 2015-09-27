
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
          status: false,
          del: false
        });
      })
      .then( result => {

        debug('[PUT] 新增一筆todo, success', result.dataValues );
        res.json( { data: result.dataValues } );
      })
      .catch( err => {

        debug('[PUT] 新增一筆todo, fail', err );
        next(err);
      });
});

/* [GET] 取得所有todo
 *
 */
router.get('/', (req, res, next) => {

  Todo.findAll(
        { where: { del: false } }
      )
      .then( result => {

        debug('[PUT] 取得所有todo, success', result );
        res.json( { data: result } );
      })
      .catch( err => {

        debug('[PUT] 取得所有todo, fail', err );
        next(err);
      });
});


/* [PUT] 修改一筆todo資料
 * input: todoId + info
 */
router.put('/', (req, res, next) => {

  Todo.update(
        { job: req.body.job },
        { where: { id: req.body.id } }
      )
      .then( result => {

        debug('[PUT] 修改一筆todo資料 todo, success', result );
        res.json( { data: result } );
      })
      .catch( err => {

        debug('[PUT] 修改一筆todo資料 todo, fail', err );
        next(err);
      });
});

/* [PUT] 完成/重新啟動一筆todo資料
 * input: todoId + info
 */
router.put('/completed', (req, res, next) => {

  Todo.update(
        { status: req.body.status },
        { where: { id: req.body.id } }
      )
      .then( result => {

        debug('[PUT] 完成/重新啟動一筆todo資料 todo, success', result );
        res.json( { data: result } );
      })
      .catch( err => {

        debug('[PUT] 完成/重新啟動一筆todo資料 todo, fail', err );
        next(err);
      });
});

/* [DELETE] 刪除(註銷)一筆todo
 * input: todoId
 */
router.delete('/', (req, res, next) => {

  Todo.update(
        { del: true },
        { where: { id: req.body.id } }
      )
      .then( result => {

        debug('[PUT] 修改一筆todo資料 todo, success', result );
        res.json( { data: result } );
      })
      .catch( err => {

        debug('[PUT] 修改一筆todo資料 todo, fail', err );
        next(err);
      });
});


module.exports = router;
