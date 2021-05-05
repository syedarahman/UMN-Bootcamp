// Animate "hi, i'm syeda" text
$("hero-section").mouseover(function(){
    $("my-name").css("text-align", "center");
  });

// On hover, slightly enlarge case study picture from 50% to 60&
$("case-study-pic").hover(function() {
    $("case-study-pic").css("width", "60%");
})