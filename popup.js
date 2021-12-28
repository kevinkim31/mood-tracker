// DATE
chrome.storage.sync.get(['year'], function(result1) {

    document.querySelector("#B1").addEventListener('click', ()=> {

        chrome.storage.sync.set({currButton:1});
        window.location.href = 'calendar.html';

    });
    
    document.querySelector("#B2").addEventListener('click', ()=> {
        chrome.storage.sync.set({currButton:2});
        window.location.href = 'calendar.html';
        
    });
    
    document.querySelector("#B3").addEventListener('click', ()=> {
        chrome.storage.sync.set({currButton:3});
        window.location.href = 'calendar.html';

    });
    
    document.querySelector("#B4").addEventListener('click', ()=> {
        chrome.storage.sync.set({currButton:4});
        window.location.href = 'calendar.html';

    });
    
    document.querySelector("#B5").addEventListener('click', ()=> {
        chrome.storage.sync.set({currButton:5});
        window.location.href = 'calendar.html';

    });

    // navigation button to calendar
    document.querySelector("#calendarpage").addEventListener('click', ()=> {
        window.location.href = 'calendar.html';

    });
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
