function getQueryStringList(queryString) {
    return queryString.trim().split(/\s+/);
};

function checkStringForAnySubString(str, strlist) {
    for (let sq=0;sq<strlist.length;sq++) {
        if (str.indexOf(strlist[sq]) !== -1) {
            return true;
        }
    }

    return false;
};

function checkStringForAllSubStrings(str, strlist) {
    for (let sq=0;sq<strlist.length;sq++) {
        if (str.indexOf(strlist[sq]) === -1) {
            return false;
        }
    }

    return true;
};

export { getQueryStringList, checkStringForAnySubString, checkStringForAllSubStrings };