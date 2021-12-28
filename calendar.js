chrome.storage.sync.get(['year'], function(result) {

    var updateDate = new Date();
    var updateYear = updateDate.getFullYear();
    var updateMonth = updateDate.getMonth();
    var updateDay = updateDate.getDate();

    var buttonDay = "day";

    for (let count = 1; count <= 31; count++)
    {
        if (updateDay == count)
        {
            buttonDay = buttonDay + count; 
        }
    }

    var tableDay = document.getElementById("calendarTable").rows.namedItem(buttonDay).cells;

    chrome.storage.sync.get(['currButton'], function(result1) {

        if (result1.currButton == 1)
        {
            tableDay[updateMonth+1].getElementsByTagName("Button")[0].style.background = "#9dc36c";
            
            /*
            var milf = document.querySelector("#hoverMood");
            var dilf = document.querySelector("hoverDate");

            milf.innerHTML = "Fantastic";
            var hi = tableDay[updateMonth+1].getElementsByTagName("Button")[0].id;
            dilf.innerHTML = "" + hi;
            */

        }
        else if (result1.currButton == 2)
        {
            tableDay[updateMonth+1].getElementsByTagName("Button")[0].style.background = "#76a53d";
        }
        else if (result1.currButton == 3)
        {
            tableDay[updateMonth+1].getElementsByTagName("Button")[0].style.background = "#537926";
        }
        else if (result1.currButton == 4)
        {
            tableDay[updateMonth+1].getElementsByTagName("Button")[0].style.background = "#3b4723";
        }
        else if (result1.currButton == 5)
        {
            tableDay[updateMonth+1].getElementsByTagName("Button")[0].style.background = "#242714";
        }
    });


     var thisyear = document.querySelector("#title");
     thisyear.innerHTML = "Your " + result.year + "<br>" + "So Far";
    
    document.querySelector("#homepage").addEventListener('click', ()=> {

        window.location.href = 'popup.html';

    });

});
