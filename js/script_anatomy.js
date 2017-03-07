var words = ["aperture", "apex", "arm", "ascender", "axis", "ball-terminal", "baseline",
             "beak", "bilateral-serifs", "bowl", "bracket", "cap-height", "counter", "crossbar",
             "cross-stroke", "crotch", "descender", "descender-line", "diacritic", "ear", "eye",
             "finial", "hook", "lachrymal-terminal", "leg", "ligature", "link", "loop",
             "open-counter", "serif", "shoulder", "spine", "stem", "swash", "tail", "terminal",
             "tittle", "vertex", "x-height"];


$(document).ready(function () {

  $("#poster").hide();
  $("#rotator").hide();

  setTimeout(function(){
    $("#rotator").show("slide", { direction: "left" }, 750);
  }, 250);

  var angleImg = 0;

  var replace = "";


  $("#main .row:first").append('<div id="interact" class="col-md-4 col-centered"><h1>Learn the lingo!</h1><select></select></div>');
  for (var index = 0; index < words.length; index++) {
    words[index].replace("-", " ");
    $("#interact select").append('<option class="' + words[index] + ' words" value="' + words[index] + '">' + words[index] + '</option>');
    words[index].replace(" ", "-");
  }

  var paragraphs = document.getElementsByClassName('words');

  $('#interact').append('<p><a href="http://www.typographydeconstructed.com/">Source</a></p>');
  $('#interact').append('<div id="definitionImage"></div>');

  for (var index2 = 0; index2 < paragraphs.length; index2++) {
    $("#interact select").change('click', function (e) {
      lastSibling(this).innerHTML = '<img src="images/' + $("#interact select").find(":selected").text() + '.png">';

      e.preventDefault();
      setResetInterval(false);

      $("#img").rotate({
        animateTo: angleImg + 360
      });
      angleImg = angleImg + 360;

      setTimeout(function () {
        e.preventDefault();
        setResetInterval(true);
      }, 800);
    });
  }

  $("#interact").hide();

  setTimeout(function(){
    $("#interact").show("slide", { direction: "right" }, 750);
  }, 750);

  $("#img").css("position", "static");

  $("#main").addClass("row-centered");


  $("#learnlingo").remove();

  $("#img").unbind("click");


  function lastSibling(node) {
    var tempObj = node.parentNode.lastChild;
    while (tempObj.nodeType != 1 && tempObj.previousSibling !== null) {
      tempObj = tempObj.previousSibling;
    }
    return (tempObj.nodeType == 1) ? tempObj : false;
  }


  var rotate = 0;

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