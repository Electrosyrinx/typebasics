$(document).ready(function () {

    $("#rotator").hide();
    $("#video").hide();
    $("#deconstructed").hide();
    $("#ilove").hide();
    
    setTimeout(function(){
        $("#rotator").show("slide", { direction: "left" }, 750);
    }, 250);
    
    setTimeout(function(){
        $("#video").show("slide", { direction: "right" }, 750);
    }, 1000);
    
    setTimeout(function(){
        $("#deconstructed").show("slide", { direction: "right" }, 750);
    }, 1750);
    
    setTimeout(function(){
        $("#ilove").show("slide", { direction: "right" }, 750);
    }, 2500);
    
    var angleImg = 0;

    $("#img").css("position", "static");
    $("#img").unbind("click");

    $("#rotator a").removeAttr("href");


    var rotate;

    function setResetInterval(bool) {

        if (bool) {
            rotate = setInterval(function () {
                angleImg += 0.1;
                $("#img").rotate(angleImg);
            }, 10);
        } else {
            clearInterval(rotate);
        }
    }

    setResetInterval(true);
});