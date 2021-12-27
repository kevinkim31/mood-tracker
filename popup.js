// DATE
/*
chrome.storage.sync.get(['year'], function(result) {
    var urmom = document.querySelector("#yeartest");
    urmom.innerHTML = "" + result.year;
});

// ON HOVER FUNCTION
*/

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
        document.getElementById("mood").innerHTML = "1";
    }

    function hover2() {
        document.getElementById("plant").src="assets/plant2.png";
        document.getElementById("mood").innerHTML = "2";
    }

    function hover3() {
        document.getElementById("plant").src="assets/plant3.png";
        document.getElementById("mood").innerHTML = "3";
    }

    function hover4() {
        document.getElementById("plant").src="assets/plant4.png";
        document.getElementById("mood").innerHTML = "4";
    }

    function hover5() {
        document.getElementById("plant").src="assets/plant5.png";
        document.getElementById("mood").innerHTML = "5";
    }

    function mouseout() {
        document.getElementById("plant").src="assets/pot.png";
        document.getElementById("mood").innerHTML = "&nbsp;";
    }
}

