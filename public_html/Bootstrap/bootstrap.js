$(document).ready(iniciar);

function iniciar(){
    $("#header").fadeOut();
    $("#incRight").click(incRight);
    $("#movimentcontinuu").click(movimentC);
    
    $("#button1").click(CambiarAzul);
    $("#button2").click(CambiarRojo);
    $("#button3").click(SetInvisible);
    $("#button4").click(SetVisible);
    $("#button5").click(ToggleVisible);
    $("#button6").click(incSize);
    $("#button7").click(decSize);
    $("#button8").click(incRight);
    $("#button9").click(decRight);
}


function CambiarAzul(){
    $("#panell1").css({"background-color":"blue","background-image":"none"});
}

function CambiarRojo(){
    $("#panell1").css({"background-color":"red","background-image":"none"});
}

function SetInvisible(){
    $("#panell2").fadeOut(1000);
}

function SetVisible(){
    $("#panell2").fadeIn(1000);
}

function ToggleVisible(){
    $("#panell2").fadeToggle();
}

function incSize(){
    $("#panell3").animate({
        "height":"50px"},
    {"duration":1500});
}

function decSize(){
    $("#panell3").animate({
        "height":"-=50px"},
    {"duration":2000});
}

function incRight(){
    $("#panell3").animate({
        "padding-left":"+=50px"},
    {"duration":1500});
}

function decRight(){
    $("#panell3").animate({
        "padding-left":"-=50"},
    {"duration":1500});
}

function movimentC(){
    $("#panell3").animate({
        
    });
}