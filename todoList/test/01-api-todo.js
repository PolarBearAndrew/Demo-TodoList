var request = require('request');

//debug
var debug = require('debug')('TEST:todo');

//init data
var initData = {
    id: '999',
    job: '測試工作',
    status: 0
};

describe('[ (01) API unit test - users ]', () => {

    before( () => {
        // ...
    });

    describe('正常操作測試', () => {

        it('[POST] 新增 todo ', done => {

            request({
                url: 'http://localhost:8080/api/todo/',
                method: 'POST',
                json: true,
                form: initData
            }, (err, res, data) => {

                return done();
            });
        });

        it('[GET] 查詢 todo (1) all', done => {

            request({
                url: 'http://localhost:8080/api/todo/',
                method: 'GET',
                json: true,
                form: { uid: uid }
            }, (err, res, data) => {

                return done();
            });
        });

        it('[GET] 查詢 todo (2) with status', done => {

            request({
                url: 'http://localhost:8080/api/todo/done',
                method: 'GET',
                json: true,
                form: { uid: uid }
            }, (err, res, data) => {

                return done();
            });
        });

        it('[PUT] 修改 todo ', done => {

            request({
                url: 'http://localhost:8080/api/todo/',
                method: 'PUT',
                json: true,
                form: expectData
            }, (err, res, data) => {

                return done();
            });
        });

        it('[DELETE] 刪除 todo ', done => {

            request({
                url: 'http://localhost:8080/api/todo/',
                method: 'DELETE',
                json: true,
                form: { uid: uid }
            }, (err, res, data) => {

                return done();
            });
        });
    });

    after( done => {
        // ...
    });
});
