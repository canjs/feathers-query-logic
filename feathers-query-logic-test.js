var QUnit = require('steal-qunit');
var feathersQueryLogic = require('./feathers-query-logic');

QUnit.module('feathers-query-logic');

QUnit.test('toQuery', function() {
	var query = feathersQueryLogic.toQuery({
		$sort: {
			data: 1
		},
		$populate: "foo",
		$limit: 10,
		$skip: 10,
		complete: true
	});

	QUnit.deepEqual(query, {
		sort: "data",
		$populate: "foo",
		page: {
			start: 10,
			end: 19
		},
		filter: {
			complete: true
		}
	});

	// Test for $or
	query = feathersQueryLogic.toQuery({
		$sort: {
			data: 1
		},
		$limit: 10,
		$skip: 10,
		$or: [{
			name: "matt"
		}, {
			name: "justin"
		}]
	});

	QUnit.deepEqual(query, {
		sort: "data",
		page: {
			start: 10,
			end: 19
		},
		filter: {
			$or: [{
				name: "matt"
			}, {
				name: "justin"
			}]
		}
	});
});

QUnit.test('toParams', function() {
	var query = feathersQueryLogic.toParams({
		sort: "data",
		$populate: "foo",
		page: {
			start: 10,
			end: 19
		},
		filter: {
			complete: true
		}
	});

	QUnit.deepEqual(query, {
		$sort: {
			data: 1
		},
		$populate: "foo",
		$limit: 10,
		$skip: 10,
		complete: true
	});

	// Test for $or
	query = feathersQueryLogic.toParams({
		sort: "data",
		page: {
			start: 10,
			end: 19
		},
		filter: {
			$or: [{
				name: "matt"
			}, {
				name: "justin"
			}]
		}
	});

	QUnit.deepEqual(query, {
		$sort: {
			data: 1
		},
		$limit: 10,
		$skip: 10,
		$or: [{
			name: "matt"
		}, {
			name: "justin"
		}]
	});
});
