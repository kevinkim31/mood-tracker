chrome.storage.sync.get(['year'], function(e) {

    // static variables
    var currentYear = e.year;

    var updateDate = new Date();
    var updateMonth = updateDate.getMonth();
    var updateDay = updateDate.getDate();
    var updateYear = updateDate.getFullYear();

    // creates a new array if stored year does not match the system's current year
    // this new array then replaces the one in chrome storage
    if (updateYear != currentYear)
    {
        chrome.storage.sync.set({year:updateYear});
        const year = new Array(12);
        var isLeap = (updateYear%400 == 0)||(updateYear%100 != 0 && updateYear%4 == 0);

        year[0] = new Array(31);

        if (isLeap)
        {
            year[1] = new Array(29);
        }
        else
        {
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
        chrome.storage.sync.set({calendar:year});
    }

    // if user presses first button, mood is set to fantastic
    // stored array is then called from chrome storage and updated with this mood
    document.querySelector("#B1").addEventListener('click', ()=> {

        chrome.storage.sync.set({currButton:1});
        window.location.href = 'calendar.html';
        chrome.storage.sync.get(['calendar'], function(f) {

            var calUpdate = f.calendar;
            calUpdate[updateMonth][updateDay - 1] = 1;

            chrome.storage.sync.set({calendar:calUpdate});

        });

    });
    
    // if user presses second button, mood is set to fine
    // stored array is then called from chrome storage and updated with this mood
    document.querySelector("#B2").addEventListener('click', ()=> {
        chrome.storage.sync.set({currButton:2});
        window.location.href = 'calendar.html';
        chrome.storage.sync.get(['calendar'], function(f) {

            var calUpdate = f.calendar;
            calUpdate[updateMonth][updateDay - 1] = 2;

            chrome.storage.sync.set({calendar:calUpdate});

        });
        
    });
    
    // if user presses third button, mood is set to bored
    // stored array is then called from chrome storage and updated with this mood
    document.querySelector("#B3").addEventListener('click', ()=> {
        chrome.storage.sync.set({currButton:3});
        window.location.href = 'calendar.html';
        chrome.storage.sync.get(['calendar'], function(f) {

            var calUpdate = f.calendar;
            calUpdate[updateMonth][updateDay - 1] = 3;

            chrome.storage.sync.set({calendar:calUpdate});

        });

    });
    
    // if user presses fourth button, mood is set to upset
    // stored array is then called from chrome storage and updated with this mood
    document.querySelector("#B4").addEventListener('click', ()=> {
        chrome.storage.sync.set({currButton:4});
        window.location.href = 'calendar.html';
        chrome.storage.sync.get(['calendar'], function(result2) {

            var calUpdate = result2.calendar;
            calUpdate[updateMonth][updateDay - 1] = 4;

            chrome.storage.sync.set({calendar:calUpdate});

        });

    });
    
    // if user presses fifth button, mood is set to miserable
    // stored array is then called from chrome storage and updated with this mood
    document.querySelector("#B5").addEventListener('click', ()=> {
        chrome.storage.sync.set({currButton:5});
        window.location.href = 'calendar.html';
        chrome.storage.sync.get(['calendar'], function(result2) {

            var calUpdate = result2.calendar;
            calUpdate[updateMonth][updateDay-1]=5;

            chrome.storage.sync.set({calendar: calUpdate});

        });

    });

    // if user presses the calendar button, they are sent to the calendar page with no changes made to the mood
    document.querySelector("#calendarbutton").addEventListener('click', ()=> {

        window.location.href = 'calendar.html';

    });
});   

// buttons that display the mood and corresponding picture when hovered
window.onload = function() {

    document.getElementById("B1").onmouseover = function() { hover1() };
    document.getElementById("B2").onmouseover = function() { hover2() };
    document.getElementById("B3").onmouseover = function() { hover3() };
    document.getElementById("B4").onmouseover = function() { hover4() };
    document.getElementById("B5").onmouseover = function() { hover5() };

    document.getElementById("B1").onmouseout = function() { mouseout() };
    document.getElementById("B2").onmouseout = function() { mouseout() };
    document.getElementById("B3").onmouseout = function() { mouseout() };
    document.getElementById("B4").onmouseout = function() { mouseout() };
    document.getElementById("B5").onmouseout = function() { mouseout() };

    function hover1() {
        document.getElementById("plant").src="assets/plant1.png";
        document.getElementById("mood").innerHTML = "fantastic";
    }

    function hover2() {
        document.getElementById("plant").src="assets/plant2.png";
        document.getElementById("mood").innerHTML = "fine";
    }

    function hover3() {
        document.getElementById("plant").src="assets/plant3.png";
        document.getElementById("mood").innerHTML = "bored";
    }

    function hover4() {
        document.getElementById("plant").src="assets/plant4.png";
        document.getElementById("mood").innerHTML = "upset";
    }

    function hover5() {
        document.getElementById("plant").src="assets/plant5.png";
        document.getElementById("mood").innerHTML = "miserable";
    }

    function mouseout() {
        document.getElementById("plant").src="assets/pot.png";
        document.getElementById("mood").innerHTML = "&nbsp;";
    }
}