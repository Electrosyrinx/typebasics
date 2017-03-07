var typefaces = ['arial', 'baskerville', 'bauhaus', 'blackoak', 'bodoni', 'calibri', 'cambria', 'caslon', 'comicsans', 'cooperblack', 'courier', 'garamond', 'gillsans', 'impact', 'lucidasans', 'rockwell', 'timesnewroman', 'trajan'];

var bodyText1 = "Typography. The art of making text legible, readable and appealing. Typography can be used to communicate more than just words, but at the end of the day, it still has a job, and typographers find a way to bring that balance. Exploring this site will give you a better idea of what typography is, what some of the lingo is, and detailing some of the important people and technology in typography. They may just look like letters when you read them, but there was actually a considerable amount of time, thought and energy put into every nearly every font you see!";

$(document).ready(function(){
    
    $("#poster").hide();
    $("#nav").hide();
    
    var angleImg = 0;
    var angleImg1 = 0;
    var angleImg2 = 0;
    
    setInterval(function(){
        angleImg1 -= 0.1;
        $("#img1").rotate(angleImg1);
    },20);
    
    setInterval(function(){
        angleImg2 -= 0.1;
        $("#img2").rotate(angleImg2);
    },5);
    
    $("#img").click(function (){
        setTimeout(function(){
            $("#nav").slideDown();
        }, 2000);
    
        $("#img").animate({
            width: "0%"
        }).delay(1000).animate({
            width: "100%"
        });
        
        $("#img1").animate({
            width: "0%"
        });
        
        $("#img2").animate({
            width: "0%"
        });
        
        $("#rotator").removeClass("col-md-8");
        $("#rotator").addClass("col-md-6");

        $("#learnlingo").remove();
        
        $("#img").css("position", "static");
        $("#img").unbind("click");
        
        $("#rotator a").removeAttr("href");
        
        var typeface1 = 0;
        var typeface2 = 5;
        var typeface3 = 12;
        
        $("#main .row:first").append('<div id="info" class="col-md-6">' + 
                                        '<div class="row"><div class="col-md-12"><img id="text0" src="images/text0.png"><p>' + bodyText1 + '</p></div></div>' + 
                                        '<div class="row">' + 
                                            '<div id="typeface1" class="col-md-4 "><img class="typefaceimg" src="images/' + typefaces[typeface1] + '.png"></div>' + 
                                            '<div id="typeface2" class="col-md-4 "><img class="typefaceimg" src="images/' + typefaces[typeface2] + '.png"></div>' + 
                                            '<div id="typeface3" class="col-md-4 "><img class="typefaceimg" src="images/' + typefaces[typeface3] + '.png"></div>' + 
                                        '</div>' + 
                                     '</div>'
        );
        
        $("#info").hide();
        
        $("#typeface1").click(function(){
            $("#typeface1").fadeOut(500);
            typeface1 += 1;
            if (typeface1 === 18){
                typeface1 = 0;
            }
            setTimeout(function(){
                $("#typeface1 img").attr("src", 'images/' + typefaces[typeface1] + '.png');
            }, 500);
            $("#typeface1").fadeIn(500);
        });
        
        $("#typeface2").click(function(){
            $("#typeface2").fadeOut(500);
            typeface2 += 1;
            if (typeface2 === 18){
                typeface2 = 0;
            }
            setTimeout(function(){
                $("#typeface2 img").attr("src", 'images/' + typefaces[typeface2] + '.png');
            }, 500);
            $("#typeface2").fadeIn(500);
        });
        
        $("#typeface3").click(function(){
            $("#typeface3").fadeOut(500);
            typeface3 += 1;
            if (typeface3 === 18){
                typeface3 = 0;
            }
            setTimeout(function(){
                $("#typeface3 img").attr("src", 'images/' + typefaces[typeface3] + '.png');
            }, 500);
            $("#typeface3").fadeIn(500);
        });

        setTimeout(function(){
            $("#info").fadeIn(1000);
        }, 2500);
    });
    
    var rotate;

    function setResetInterval(bool){

        if(bool){
            rotate = setInterval(function(){
                angleImg += 0.1;
                $("#img").rotate(angleImg);
            },10);
        }else{
            clearInterval(rotate); 
        }
    }

    setResetInterval(true);
});