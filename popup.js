// buttons that display the mood and corresponding picture when hovered
window.onload = function () {

    // 
    var updateDate = new Date();
    var updateMonth = updateDate.getMonth();
    var updateDay = updateDate.getDate();
    var updateYear = updateDate.getFullYear();

    chrome.storage.sync.get(['year'], function (e) {

        // static variables
        var currentYear = e.year;

        // creates a new array if stored year does not match the system's current year
        // this new array then replaces the one in chrome storage
        if (updateYear != currentYear) {
            chrome.storage.sync.set({
                year: updateYear
            });
            const year = new Array(12);
            var isLeap = (updateYear % 400 == 0) || (updateYear % 100 != 0 && updateYear % 4 == 0);

            year[0] = new Array(31);

            if (isLeap) {
                year[1] = new Array(29);
            } else {
                year[1] = new Array(28);
            }

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

            // stores the current year in chrome storage
            chrome.storage.sync.set({
                calendar: year
            });
        }
    });

    // if user presses first button, mood is set to fantastic
    // stored array is then called from chrome storage and updated with this mood
    for (let i = 1; i <= 5; i++) {
        document.querySelector("#B" + i).addEventListener('click', () => {

            chrome.storage.sync.set({
                currButton: i
            });

            window.location.href = 'calendar.html';
            chrome.storage.sync.get(['calendar'], function (f) {

                var calUpdate = f.calendar;
                calUpdate[updateMonth][updateDay - 1] = i;

                chrome.storage.sync.set({
                    calendar: calUpdate
                }, function () {

                });
            });

        });

        document.getElementById("B" + i).onmouseover = function () {
            hover(i);
        };

        document.getElementById("B" + i).onmouseout = function () {
            mouseout();
        };
    }

    // if user presses the calendar button, they are sent to the calendar page with no changes made to the mood
    document.querySelector("#calendarbutton").addEventListener('click', () => {
        window.location.href = 'calendar.html';
    });

    function hover(mood) {
        var moods = ["fantastic", "fine", "bored", "upset", "miserable"]
        document.getElementById("plant").src = "assets/plant" + mood + ".png";
        document.getElementById("mood").innerHTML = moods[mood - 1];
    }

    function mouseout() {
        document.getElementById("plant").src = "assets/pot.png";
        document.getElementById("mood").innerHTML = "&nbsp;";
    }
}
