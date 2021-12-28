chrome.storage.sync.get(['year'], function(result) {

    var updateDate = new Date();
    var updateYear = updateDate.getFullYear();
    var updateMonth = updateDate.getMonth();
    var updateDay = updateDate.getDate();

    var buttonMonth = "";

    if (updateMonth == 0)
    {
        buttonMonth = "jan";
    }
    else if (updateMonth == 1)
    {
        buttonMonth = "feb";
    }
    else if (updateMonth == 2)
    {
        buttonMonth = "mar";
    }
    else if (updateMonth == 3)
    {
        buttonMonth = "apr";
    }
    else if (updateMonth == 4)
    {
        buttonMonth = "may";
    }
    else if (updateMonth == 5)
    {
        buttonMonth = "jun";
    }
    else if (updateMonth == 6)
    {
        buttonMonth = "jul";
    }
    else if (updateMonth == 7)
    {
        buttonMonth = "aug";
    }
    else if (updateMonth == 8)
    {
        buttonMonth = "sep";
    }
    else if (updateMonth == 9)
    {
        buttonMonth = "oct";
    }
    else if (updateMonth == 10)
    {
        buttonMonth = "nov";
    }
    else
    {
        buttonMonth = "dec";
    }


    // var urmum = document.querySelector("#wuttest");
    // urmum.innerHTML = "" + result.year;

    var hello = document.getElementsByClassName(buttonMonth);

    var test = document.querySelector("#wuttest");
    //test.innerHTML = buttonMonth;

    var i;

    function changeColor(){
        for (i = 0; i < hello.length; i++)
        {
            hello[i].style.backgroundColor = "#9dc36c";
        }
    }
    

});
