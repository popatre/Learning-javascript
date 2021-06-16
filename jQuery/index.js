$("h1").mouseover(function(){
    $("h1").text("dont click again")
})

$("input").keypress(function(event){
    $("h1").text(event.key);
})