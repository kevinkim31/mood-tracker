// DATE
chrome.storage.sync.get(['daily'], function(result) {
    if (result.daily == "false")
    {
        chrome.storage.sync.get(['year'], function(result1) {
        
            document.querySelector("#B1").addEventListener('click', ()=> {
        
                chrome.storage.sync.set({currButton:1});
                chrome.storage.sync.set({daily: "true"});
                window.location.href = 'calendar.html';

                var upDate = new Date();
                var upDay = upDate.getDate();
                chrome.storage.sync.set({currDay: upDay});
        
            });
            
            document.querySelector("#B2").addEventListener('click', ()=> {
                chrome.storage.sync.set({currButton:2});
                chrome.storage.sync.set({daily: "true"});
                window.location.href = 'calendar.html';

                var upDate = new Date();
                var upDay = upDate.getDate();
                chrome.storage.sync.set({currDay: upDay});
                
            });
            
            document.querySelector("#B3").addEventListener('click', ()=> {
                chrome.storage.sync.set({currButton:3});
                chrome.storage.sync.set({daily: "true"});
                window.location.href = 'calendar.html';

                var upDate = new Date();
                var upDay = upDate.getDate();
                chrome.storage.sync.set({currDay: upDay});
            });
            
            document.querySelector("#B4").addEventListener('click', ()=> {
                chrome.storage.sync.set({currButton:4});
                chrome.storage.sync.set({daily: "true"});
                window.location.href = 'calendar.html';

                var upDate = new Date();
                var upDay = upDate.getDate();
                chrome.storage.sync.set({currDay: upDay});
            });
            
            document.querySelector("#B5").addEventListener('click', ()=> {
                chrome.storage.sync.set({currButton:5});
                chrome.storage.sync.set({daily: "true"});
                window.location.href = 'calendar.html';

                var upDate = new Date();
                var upDay = upDate.getDate();
                chrome.storage.sync.set({currDay: upDay});
            });

            // test
            var urmom = document.querySelector("#yeartest");
            urmom.innerHTML = "" + result1.year;
        });
    }
    
    else
    {
        chrome.storage.sync.get(['currDay'], function(result2) {
            var upDate1 = new Date();
            var upDay1 = upDate1.getDate();

            if (result2.currDay != upDay1)
            {
                chrome.storage.sync.set({currDay: upDay1});
                chrome.storage.sync.set({daily: "false"});
            }

            else
            {
                window.location.href = 'calendar.html';
            }
            

        });

    }
    
});

// ON HOVER FUNCTION

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
