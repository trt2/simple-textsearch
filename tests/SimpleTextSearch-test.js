import { assert, expect } from 'chai';

import * as SimpleTextSearch from '../src/SimpleTextSearch'; 

describe("getQueryStringList test", function() {
    describe("simple tests", function() {
        it('test query string parser 1', function() {
            let res = SimpleTextSearch.getQueryStringList('asd 123   999 test + ')
            console.log(res);
            
            expect(res).to.eql(['asd', '123', '999', 'test', '+']);
        });
        it('test query string parser 2', function() {
            let res = SimpleTextSearch.getQueryStringList('  asd 123   999 test + ')
            console.log(res);
            
            expect(res).to.eql(['asd', '123', '999', 'test', '+']);
        });
    });
});

describe("checkStringForAnySubString test", function() {
    describe("found tests", function() {
        it('test 1', function() {
            let searchQuery = 'ear';
            let text = 'This is a test search'
            let res = SimpleTextSearch.checkStringForAnySubString(text, SimpleTextSearch.getQueryStringList(searchQuery));
            console.log(res);
            expect(res).to.equal(true);
        });
        it('test 2', function() {
            let searchQuery = 'khis est';
            let text = 'This is a test search'
            let res = SimpleTextSearch.checkStringForAnySubString(text, SimpleTextSearch.getQueryStringList(searchQuery));
            console.log(res);
            expect(res).to.equal(true);
        });
    });

    describe("not found tests", function() {
        it('test 1', function() {
            let searchQuery = 'aear';
            let text = 'This is a test search'
            let res = SimpleTextSearch.checkStringForAnySubString(text, SimpleTextSearch.getQueryStringList(searchQuery));
            console.log(res);
            expect(res).to.equal(false);
        });
        it('test 2', function() {
            let searchQuery = 'khis rest';
            let text = 'This is a test search'
            let res = SimpleTextSearch.checkStringForAnySubString(text, SimpleTextSearch.getQueryStringList(searchQuery));
            console.log(res);
            expect(res).to.equal(false);
        });
    });
});

describe("checkStringForAllSubStrings test", function() {
    describe("found tests", function() {
        it('test 1', function() {
            let searchQuery = 'ear';
            let text = 'This is a test search'
            let res = SimpleTextSearch.checkStringForAllSubStrings(text, SimpleTextSearch.getQueryStringList(searchQuery));
            console.log(res);
            expect(res).to.equal(true);
        });
        it('test 2', function() {
            let searchQuery = 'his est';
            let text = 'This is a test search'
            let res = SimpleTextSearch.checkStringForAllSubStrings(text, SimpleTextSearch.getQueryStringList(searchQuery));
            console.log(res);
            expect(res).to.equal(true);
        });
    });

    describe("not found tests", function() {
        it('test 1', function() {
            let searchQuery = 'aear';
            let text = 'This is a test search'
            let res = SimpleTextSearch.checkStringForAllSubStrings(text, SimpleTextSearch.getQueryStringList(searchQuery));
            console.log(res);
            expect(res).to.equal(false);
        });
        it('test 2', function() {
            let searchQuery = 'khis test';
            let text = 'This is a test search'
            let res = SimpleTextSearch.checkStringForAllSubStrings(text, SimpleTextSearch.getQueryStringList(searchQuery));
            console.log(res);
            expect(res).to.equal(false);
        });
    });
});
