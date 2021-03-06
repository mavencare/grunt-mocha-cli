'use strict';

var path = require('path');
var grunt = require('grunt');


exports['grunt pass'] = function (test) {
    test.expect(1);

    grunt.util.spawn({
        grunt: true,
        args: ['--gruntfile', path.resolve(__dirname, 'fixture/grunt-pass-gruntfile.js')]
    }, function (error, output, code) {
        test.strictEqual(code, 0, 'grunt should pass');
        test.done();
    });
};

exports['grunt fail'] = function (test) {
    test.expect(1);

    grunt.util.spawn({
        grunt: true,
        args: ['--gruntfile', path.resolve(__dirname, 'fixture/grunt-fail-gruntfile.js')]
    }, function (error, output, code) {
        test.notStrictEqual(code, 0, 'grunt should fail');
        test.done();
    });
};

exports['grunt files'] = function (test) {
    test.expect(2);

    grunt.util.spawn({
        grunt: true,
        args: ['--gruntfile', path.resolve(__dirname, 'fixture/grunt-files-gruntfile.js')]
    }, function (error, output, code) {
        test.notStrictEqual(output.stdout.indexOf('2 passing'), -1, 'should pass 2 tests');
        test.strictEqual(code, 0, 'grunt should pass');
        test.done();
    });
};

exports['grunt options'] = function (test) {
    test.expect(1);

    grunt.util.spawn({
        grunt: true,
        args: ['--gruntfile', path.resolve(__dirname, 'fixture/grunt-options-gruntfile.js')]
    }, function (error, output, code) {
        test.strictEqual(code, 0, 'grunt should pass');
        test.done();
    });
};

exports['force option'] = function (test) {
    test.expect(1);

    grunt.util.spawn({
        grunt: true,
        args: ['--gruntfile', path.resolve(__dirname, 'fixture/option-force-gruntfile.js')]
    }, function (error, output, code) {
        test.strictEqual(code, 0, 'grunt should pass');
        test.done();
    });
};

exports['files option'] = function (test) {
    test.expect(2);

    grunt.util.spawn({
        grunt: true,
        args: ['--gruntfile', path.resolve(__dirname, 'fixture/option-files-gruntfile.js')]
    }, function (error, output, code) {
        test.notStrictEqual(output.stdout.indexOf('2 passing'), -1, 'should pass 2 tests');
        test.strictEqual(code, 0, 'grunt should pass');
        test.done();
    });
};

exports['missing files'] = function (test) {
    test.expect(2);

    grunt.util.spawn({
        grunt: true,
        args: ['--gruntfile', path.resolve(__dirname, 'fixture/missing-files-gruntfile.js')]
    }, function (error, output, code) {
        test.notStrictEqual(output.stdout.indexOf('1 passing'), -1, 'should pass 1 test');
        test.strictEqual(code, 0, 'grunt should pass');
        test.done();
    });
};
