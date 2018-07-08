var QUnit = require('steal-qunit');
var feathersQueryLogic = require('./feathers-query-logic');

QUnit.module('feathers-query-logic');

QUnit.test('toQuery', function(){
    var query = feathersQueryLogic.toQuery({
        $sort: {data: 1},
        $populate: "foo",
        $limit: 10,
        $skip: 10,
        complete: true
    });

    QUnit.deepEqual(query, {
        sort: "data",
        $populate: "foo",
        page: {start: 10, end: 19},
        filter: {complete: true}
    });
});

QUnit.test('toParams', function(){
    var query = feathersQueryLogic.toParams({
        sort: "data",
        $populate: "foo",
        page: {start: 10, end: 19},
        filter: {complete: true}
    });

    QUnit.deepEqual(query, {
        $sort: {data: 1},
        $populate: "foo",
        $limit: 10,
        $skip: 10,
        complete: true
    });
});
