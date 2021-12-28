// DATE
chrome.runtime.onInstalled.addListener (() => {
    var currDate = new Date();
    var currYear = currDate.getFullYear();
    chrome.storage.sync.set({year:currYear});
});
