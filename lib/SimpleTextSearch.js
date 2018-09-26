"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
function getQueryStringList(queryString) {
    return queryString.trim().split(/\s+/);
};

function checkStringForAnySubString(str, strlist) {
    for (var sq = 0; sq < strlist.length; sq++) {
        if (str.indexOf(strlist[sq]) !== -1) {
            return true;
        }
    }

    return false;
};

function checkStringForAllSubStrings(str, strlist) {
    for (var sq = 0; sq < strlist.length; sq++) {
        if (str.indexOf(strlist[sq]) === -1) {
            return false;
        }
    }

    return true;
};

exports.getQueryStringList = getQueryStringList;
exports.checkStringForAnySubString = checkStringForAnySubString;
exports.checkStringForAllSubStrings = checkStringForAllSubStrings;