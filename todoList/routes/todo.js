var express = require('express');
var router = express.Router();

/* [GET] 取得所以有todo
 *
 */
router.get('/todo', function(req, res, next) {

  res.end();
});

/* [GET] 取得完成/未完成的todo
 *
 */
router.get('/todo/:status', function(req, res, next) {

  res.end();
});

/* [POST] 新增一筆todo
 *
 */
router.post('/todo', function(req, res, next) {

  res.end();
});

/* [PUT] 新增一筆todo
 * input: todoId + info
 */
router.put('/todo', function(req, res, next) {

  res.end();
});

/* [DELETE] 刪除一筆todo
 * input: todoId
 */
router.put('/todo', function(req, res, next) {

  res.end();
});


module.exports = router;
