// DATE


chrome.storage.sync.get(['year'], function(result) {

    document.querySelector("#B1").addEventListener('click', ()=> {
        
        /*
        var updateDate = new Date();
        var updateYear = updateDate.getFullYear();
        var updateMonth = updateDate.getMonth();
        var updateDay = updateDate.getDate();

        
        if (updateYear == result.year)
        {
            window.location.href = 'calendar.html';
            
            var currButton = document.getElementById(updateDay).getElementsByClassName(updateMonth + 1);
            currButton.style.bgcolor = '#9dc36c';
    

        }
        */

        chrome.storage.sync.set({currButton:1});
        window.location.href = 'calendar.html';
        

   


    });
    
    document.querySelector("#B2").addEventListener('click', ()=> {
        window.location.href = 'calendar.html';
        
    });
    
    document.querySelector("#B3").addEventListener('click', ()=> {
        window.location.href = 'calendar.html';
    });
    
    document.querySelector("#B4").addEventListener('click', ()=> {
        window.location.href = 'calendar.html';
    });
    
    document.querySelector("#B5").addEventListener('click', ()=> {
        window.location.href = 'calendar.html';
    });


    
    // test
    var urmom = document.querySelector("#yeartest");
    urmom.innerHTML = "" + result.year;
    
    
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
        document.getElementById("mood").innerHTML = "bless";
    }

    function hover2() {
        document.getElementById("plant").src="assets/plant2.png";
        document.getElementById("mood").innerHTML = "fine";
    }

    function hover3() {
        document.getElementById("plant").src="assets/plant3.png";
        document.getElementById("mood").innerHTML = "empty";
    }

    function hover4() {
        document.getElementById("plant").src="assets/plant4.png";
        document.getElementById("mood").innerHTML = "upset";
    }

    function hover5() {
        document.getElementById("plant").src="assets/plant5.png";
        document.getElementById("mood").innerHTML = "tragic";
    }

    function mouseout() {
        document.getElementById("plant").src="assets/pot.png";
        document.getElementById("mood").innerHTML = "&nbsp;";
    }
}






