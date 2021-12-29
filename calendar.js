chrome.storage.sync.get(['year'], function(result) {

    var updateDate = new Date();
    var updateYear = updateDate.getFullYear();
    var updateMonth = updateDate.getMonth();
    var updateDay = updateDate.getDate();

    var isLeap = (updateYear%400 == 0)||(updateYear%100 != 0 && updateYear%4 == 0);


    if (!isLeap)
    {
        document.querySelector("#FEB29").style.visibility= "hidden";
    }

    chrome.storage.sync.get(['calendar'], function(result3) {

        var calUpdate = result3.calendar;

        for (let month = 0; month < calUpdate.length; month++)
        {
            for (let day = 0; day < calUpdate[month].length; day++)
            {
                var tableDay = document.getElementById("calendarTable").rows.namedItem("day"+(day+1)).cells;

                if (calUpdate[month][day] == 1)
                {
                    tableDay[month+1].getElementsByTagName("Button")[0].style.background = "#9dc36c";
                }
                else if (calUpdate[month][day] == 2)
                {
                    tableDay[month+1].getElementsByTagName("Button")[0].style.background = "#76a53d";
                }
                else if (calUpdate[month][day] == 3)
                {
                    tableDay[month+1].getElementsByTagName("Button")[0].style.background = "#537926";
                }
                else if (calUpdate[month][day] == 4)
                {
                    tableDay[month+1].getElementsByTagName("Button")[0].style.background = "#3b4723";
                }
                else if (calUpdate[month][day] == 5)
                {
                    tableDay[month+1].getElementsByTagName("Button")[0].style.background = "#242714";
                }
            }
        }
    });

     var thisyear = document.querySelector("#title");
     thisyear.innerHTML = "Your " + updateYear + "<br>" + "So Far";
    
    // navigation button to homepage
    document.querySelector("#homepage").addEventListener('click', ()=> {
        window.location.href = 'popup.html';
    });

});
