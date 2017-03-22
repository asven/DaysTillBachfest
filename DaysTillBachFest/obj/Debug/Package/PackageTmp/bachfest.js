
function daysUntil()
{
    var intervalID = setInterval(function ()
    {
        var bachDay = new Date("5/5/2017");
        var difference = (bachDay - new Date());
        var days = Math.floor( difference / ((60 * 60 * 1000 * 24) * 1));
        var hours = Math.floor((difference % (60 * 60 * 1000 * 24)) / (60 * 60 * 1000) * 1);
        var minutes = Math.floor(((difference % (60 * 60 * 1000 * 24)) % (60 * 60 * 1000)) / (60 * 1000) * 1);
        var seconds = Math.floor((((difference % (60 * 60 * 1000 * 24)) % (60 * 60 * 1000)) % (60 * 1000)) / 1000 * 1);
        var millseconds = Math.floor((((difference % (60 * 60 * 1000 * 24)) % (60 * 60 * 1000)) % (60 * 1000)) % 1000 * 1);
        if ((days <= 0 && hours <= 0 && minutes <= 0 && seconds <= 0 && millseconds <= 0) || window.location.href.indexOf("?test") > -1)
        {
            $("#world").show();
            $("#dateDiv").hide();
            clearInterval(intervalID);
        }
        $('#dateDiv').html(days + ":" + hours + ":" + minutes + ":" + seconds + ":" + millseconds);
    }, 10);

    $("#dateDiv").css("font-size", $(window).width() / 7);
    $("#dateDiv").css("padding-top", $(window).height() / 4);
    $("#dateDiv").css("padding-left", $(window).width() / 15);

    $(window).resize(resizeStuff);
}

function resizeStuff()
{
    $("#dateDiv").css("font-size", $(window).width() / 7);
    $("#dateDiv").css("padding-top", $(window).height() / 4);
    $("#dateDiv").css("padding-left", $(window).width() / 15);
}