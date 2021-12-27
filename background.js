// DATE
chrome.runtime.onInstalled.addListener (() => {
    var currDate = new Date();
    var currYear = currDate.getSeconds();
    chrome.storage.sync.set({year:currYear});
});
