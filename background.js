// the year structure is created and stored in chrome storage on install
// this prevents the complete erasure of the array by accident

chrome.runtime.onInstalled.addListener(function (details) {
    if (details.reason == "instal") {
        var currDate = new Date();
        var currYear = currDate.getFullYear();

        chrome.storage.sync.set({
            year: currYear
        });

        const year = new Array(12);

        year[0] = new Array(31);
        year[1] = new Array(29);
        year[2] = new Array(31);
        year[3] = new Array(30);
        year[4] = new Array(31);
        year[5] = new Array(30);
        year[6] = new Array(31);
        year[7] = new Array(31);
        year[8] = new Array(30);
        year[9] = new Array(31);
        year[10] = new Array(30);
        year[11] = new Array(31);

        chrome.storage.sync.set({
            calendar: year
        });
    } else if (details.reason == "update") {
        // to be added if we ever update again
    }

});

chrome.storage.onChanged.addListener(function (changes, namespace) {
    for (let [key, {
            oldValue,
            newValue
        }] of Object.entries(changes)) {
        console.log(
            `Storage key "${key}" in namespace "${namespace}" changed.`,
            `Old value was "${oldValue}", new value is "${newValue}".`
        );
    }
});
