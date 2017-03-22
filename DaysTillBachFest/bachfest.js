
function daysUntil()
{
    var intervalID = setInterval(function ()
    {
        var bach1Day = new Date("5/5/2017");
        var difference1 = (bach1Day - new Date());
        var days1 = Math.floor(difference1 / ((60 * 60 * 1000 * 24) * 1));
        var hours1 = Math.floor((difference1 % (60 * 60 * 1000 * 24)) / (60 * 60 * 1000) * 1);
        var minutes1 = Math.floor(((difference1 % (60 * 60 * 1000 * 24)) % (60 * 60 * 1000)) / (60 * 1000) * 1);
        var seconds1 = Math.floor((((difference1 % (60 * 60 * 1000 * 24)) % (60 * 60 * 1000)) % (60 * 1000)) / 1000 * 1);

        var bach2Day = new Date("7/14/2017");
        var difference2 = (bach2Day - new Date());
        var days2 = Math.floor(difference2 / ((60 * 60 * 1000 * 24) * 1));
        var hours2 = Math.floor((difference2 % (60 * 60 * 1000 * 24)) / (60 * 60 * 1000) * 1);
        var minutes2 = Math.floor(((difference2 % (60 * 60 * 1000 * 24)) % (60 * 60 * 1000)) / (60 * 1000) * 1);
        var seconds2 = Math.floor((((difference2 % (60 * 60 * 1000 * 24)) % (60 * 60 * 1000)) % (60 * 1000)) / 1000 * 1);

        if ((days1 <= 0 && hours1 <= 0 && minutes1 <= 0 && seconds1 <= 0) || window.location.href.indexOf("?test") > -1)
        {
            $("#world").show();
            $("#date1Div").hide();
            clearInterval(intervalID);
        }
        $('#date1Div').html(days1 + ":" + hours1 + ":" + minutes1 + ":" + seconds1);
        $('#date2Div').html(days2 + ":" + hours2 + ":" + minutes2 + ":" + seconds2);
    }, 10);

    var fontSize = $(window).width() / 6;

    $("#date1Div").css("font-size", fontSize);
    $("#date2Div").css("font-size", fontSize);


    $(window).resize(resizeStuff);
}

function resizeStuff()
{
    var fontSize = $(window).width() / 6;

    $("#date1Div").css("font-size", fontSize);
    $("#date2Div").css("font-size", fontSize);
}