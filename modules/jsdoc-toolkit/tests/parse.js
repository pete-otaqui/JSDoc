/**
	@overview Testing the jsdoc-toolkit/parse module.
	@author Michael Mathews <micmath@gmail.com>
	@license Apache License 2.0 - See file 'LICENSE.markdown' in this project.
 */
var test = require('jsdoc-toolkit/test');
var parse = require('jsdoc-toolkit/parse');

exports.testParseAPI = function() {
	test.expect(2);
	
	test.assertEqual(
		'function', typeof parse.getDocs, 'parse.getDocs is defined as a function'
	);
	
	test.assertEqual(
		0, parse.docSet.length, 'parse.docSet is defined and has a length of 0'
	);
}

exports.testParseGetDocs = function() {
	test.expect(1);
	
	var filePaths = [HOME + '/modules/jsdoc-toolkit/tests/data-example.js'];
	
	parse.getDocs(filePaths[0]);
	
	var docSet = parse.docSet;
	
	test.assertEqual(
		3, parse.docSet.length, 'docSet has been populated by 3 docs'
	);
}

exports.testParseNameProperty = function() {
	test.expect(1);
	
	var shapeDocs = parse.docSet.getDocsByName('Shape');
	test.assertEqual(
		'Shape', shapeDocs[0].name, 'Shape doc has property name set to "Shape"'
	);
}

exports.testParseKindProperty = function() {
	test.expect(1);
	
	var shapeDocs = parse.docSet.getDocsByName('Shape');
	test.assertEqual(
		'constructor', shapeDocs[0].kind, 'Shape doc has property kind set to "constructor"'
	);
}

exports.testParseDescProperty = function() {
	test.expect(1);
	
	var shapeDocs = parse.docSet.getDocsByName('Shape');
	test.assertEqual(
		'A 2D shape.', shapeDocs[0].desc, 'Shape doc has property desc set to the first line of the comment.'
	);
}