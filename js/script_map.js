$(document).ready(function () {
    
    $("#california-info").hide();
    $("#newyork-info").hide();
    $("#germany-info").hide();
    $("#greece-info").hide();
    $("#lebanon-info").hide();
    $("#china-info").hide();

    $("#california").hide();
    $("#newyork").hide();
    $("#germany").hide();
    $("#greece").hide();
    $("#lebanon").hide();
    $("#china").hide();
    
    var angleImg = 0;
    
    setTimeout(function(){
        $("#california").show(1000);
    }, 500);
    
    setTimeout(function(){
        $("#newyork").show(1000);
    }, 1000);
    
    setTimeout(function(){
        $("#germany").show(1000);
    }, 1500);
    
    setTimeout(function(){
        $("#greece").show(1000);
    }, 2000);
    
    setTimeout(function(){
        $("#lebanon").show(1000);
    }, 2500);
    
    setTimeout(function(){
        $("#china").show(1000);
    }, 3000);
    
    $("#img").css("position", "static");

    $("#img").unbind("click");
    
    $("#california").hover(function(){
        $("#california").attr("src", "images/california1.png");
    });
    
    $("#california").mouseleave(function(){
        $("#california").attr("src", "images/california.png");
    });
    
    $("#newyork").hover(function(){
        $("#newyork").attr("src", "images/newyork1.png");
    });

    $("#newyork").mouseleave(function(){
        $("#newyork").attr("src", "images/newyork.png");
    });
    
    $("#germany").hover(function(){
        $("#germany").attr("src", "images/germany1.png");
    });

    $("#germany").mouseleave(function(){
        $("#germany").attr("src", "images/germany.png");
    });
    
    $("#greece").hover(function(){
        $("#greece").attr("src", "images/greece1.png");
    });

    $("#greece").mouseleave(function(){
        $("#greece").attr("src", "images/greece.png");
    });
    
    $("#lebanon").hover(function(){
        $("#lebanon").attr("src", "images/lebanon1.png");
    });

    $("#lebanon").mouseleave(function(){
        $("#lebanon").attr("src", "images/lebanon.png");
    });
    
    $("#china").hover(function(){
        $("#china").attr("src", "images/china1.png");
    });

    $("#china").mouseleave(function(){
        $("#china").attr("src", "images/china.png");
    });

    $("#california").click(function(){
        $(".map-info").hide();
        $("#california-info").show("slide", { direction: "right" }, 300);
    });
    
    $("#newyork").click(function(){
        $(".map-info").hide();
        $("#newyork-info").show("slide", { direction: "right" }, 300);
    });
    
    $("#germany").click(function(){
        $(".map-info").hide();
        $("#germany-info").show("slide", { direction: "right" }, 300);
    });
    
    $("#greece").click(function(){
        $(".map-info").hide();
        $("#greece-info").show("slide", { direction: "right" }, 300);
    });
    
    $("#lebanon").click(function(){
        $(".map-info").hide();
        $("#lebanon-info").show("slide", { direction: "right" }, 300);
    });
    
    $("#china").click(function(){
        $(".map-info").hide();
        $("#china-info").show("slide", { direction: "right" }, 300);
    });

    $(".map-img").click(function(e){
        e.preventDefault();
        
        setResetInterval(false);
        
        $("#img").rotate({
            animateTo: angleImg + 360
        });
        angleImg = angleImg + 360;
        
        setTimeout(function () {
            e.preventDefault();
            setResetInterval(true);
        }, 820);
    });
    
    var rotate = 0;

    function setResetInterval(bool) {

        if (bool) {
            rotate = setInterval(function () {
                angleImg += 0.3;
                $("#img").rotate(angleImg);
            }, 10);
        } else {
            clearInterval(rotate);
        }
    }

    setResetInterval(true);
});