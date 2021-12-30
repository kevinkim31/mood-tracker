chrome.storage.sync.get(['year'], function () {

    // static variables
    var updateDate = new Date();
    var updateYear = updateDate.getFullYear();

    var isLeap = (updateYear % 400 == 0) || (updateYear % 100 != 0 && updateYear % 4 == 0);

    // hides February 29th button if current year is not a leap year
    if (!isLeap) {
        document.querySelector("#FEB29").style.transitionDuration = "0s";
        document.querySelector("#FEB29").style.visibility = "hidden";
    }

    // updates buttons if mood is changed from default (0) to numbers between 1 - 5
    chrome.storage.sync.get(['calendar'], function (e) {

        var calUpdate = e.calendar;

        for (let month = 0; month < calUpdate.length; month++) {

            for (let day = 0; day < calUpdate[month].length; day++) {

                var tableDay = document.getElementById("calendarTable").rows.namedItem("day" + (day + 1)).cells;

                if (calUpdate[month][day] == 1) {
                    tableDay[month + 1].getElementsByTagName("Button")[0].style.background = "#9dc36c";
                }
                else if (calUpdate[month][day] == 2) {
                    tableDay[month + 1].getElementsByTagName("Button")[0].style.background = "#76a53d";
                }
                else if (calUpdate[month][day] == 3) {
                    tableDay[month + 1].getElementsByTagName("Button")[0].style.background = "#537926";
                }
                else if (calUpdate[month][day] == 4) {
                    tableDay[month + 1].getElementsByTagName("Button")[0].style.background = "#3b4723";
                }
                else if (calUpdate[month][day] == 5) {
                    tableDay[month + 1].getElementsByTagName("Button")[0].style.background = "#242714";
                }
            }
        }
    });

    var thisyear = document.querySelector("#title");
    thisyear.innerHTML = "Your " + "<br>" + updateYear + "<br>" + "So Far";

    // if user presses the home button, they are sent back to the homepage
    document.querySelector("#homepage").addEventListener('click', () => {

        window.location.href = 'popup.html';

    });

});

// when a date button is hovered, the month, day and mood (if recorded) is displayed
window.onload = function () {

    var onHover = document.querySelectorAll(".hover");

    for (var i = 0; i < onHover.length; i++) {

        onHover[i].firstChild.addEventListener("mouseover", function (e) {
            
            var currentButton = e.target;
            var month = currentButton.id.substring(0, 3);
            var day = currentButton.id.substring(3, 5);
            var m = 0;
            var d = parseInt(day) - 1;
            
            document.querySelector("#hoverDate").innerHTML = month[0] + month.substring(1).toLowerCase() + " " + day;
            
            if (month === "JAN") {
                m = 0;
            }
            else if (month === "FEB") {
                m = 1;
            }
            else if (month === "MAR") {
                m = 2;
            }
            else if (month === "APR") {
                m = 3;
            }
            else if (month === "MAY") {
                m = 4;
            }
            else if (month === "JUN") {
                m = 5;
            }
            else if (month === "JUL") {
                m = 6;
            }
            else if (month === "AUG") {
                m = 7;
            }
            else if (month === "SEP") {
                m = 8;
            }
            else if (month === "OCT") {
                m = 9;
            }
            else if (month === "NOV") {
                m = 10;
            }
            else if (month === "DEC") {
                m = 11;
            }

            chrome.storage.sync.get(['calendar'], function (f) {

                var mood = f.calendar[m][d];
                
                if (mood === null) {
                    document.querySelector("#hoverMood").innerHTML = "";
                }
                else {
                    if (mood == 1)
                    {
                        document.querySelector("#hoverMood").innerHTML = "Fantastic";
                    }
                    else if (mood == 2)
                    {
                        document.querySelector("#hoverMood").innerHTML = "Fine";
                    }
                    else if (mood == 3)
                    {
                        document.querySelector("#hoverMood").innerHTML = "Bored";
                    }
                    else if (mood == 4)
                    {
                        document.querySelector("#hoverMood").innerHTML = "Upset";
                    }
                    else if (mood == 5)
                    {
                        document.querySelector("#hoverMood").innerHTML = "Miserable";
                    }
                }
            });
        });
        
        // reverts back to empty when user is not hovering the button anymore
        onHover[i].firstChild.onmouseout = function () {
            document.querySelector("#hoverDate").innerHTML = "";
            document.querySelector("#hoverMood").innerHTML = "";
        }
    }
}