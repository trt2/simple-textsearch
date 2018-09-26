# Simple Text Search

Simple functions for checking of a string contains all or any of the words in a list of strings.

## Usage

Usage of the functions:
```
import * as SimpleTextSearch from '@trt2/simple-textsearch';
// Imports the following functions:
// - SimpleTextSearch.getQueryStringList(queryString)           // returns array of strings
// - SimpleTextSearch.checkStringForAnySubString(str, strlist)  // returns boolean
// - SimpleTextSearch.checkStringForAllSubStrings(str, strlist) // returns boolean

const text = 'my test string'
const searchQuery = SimpleTextSearch.getQueryStringList('my search string');
// searchQuery = ['my', 'search', 'string']

// Does text contain any of the strings in searchQuery?
let res = SimpleTextSearch.checkStringForAnySubString(text, searchQuery); 
// res = true

// Does text contain all of the strings in searchQuery?
res = SimpleTextSearch.checkStringForAllSubStrings(text, searchQuery); 
// res = false
```