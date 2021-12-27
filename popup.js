// DATE

var currDate = new Date();
var currYear = currDate.getFullYear();

chrome.runtime.onInstalled.addListener (() => {
    chrome.storage.sync.set({'Year':currYear});
});

console.log('Current Year:', currYear);
console.log(currDate.toString());



