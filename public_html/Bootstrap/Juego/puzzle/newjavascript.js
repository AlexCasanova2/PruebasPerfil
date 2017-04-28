$(document).ready(iniciar);

function iniciar(){
    $(".img").css({"width":"100%","height":"100%"});
    $("#ficha2").css({"width":"29%"});
    $("#puzzle2").css({"width":"29%"});
    $("#puzzle3").css({"width":"29%"});
    $("#fichas_puzzle>img").css({"width":"12%","height":"12%"});
    $("#fichas_puzzle>img").click(moverfichas);
    $("#ficha_seleccionada").click(volverficha);
    $("img").css({"width":"","height":"40%"});
    $("#ficha_seleccionada").click(poner);
}


function moverfichas(){
    if($("#ficha_seleccionada").children().length>0){
        $("#ficha_seleccionada>img").appendTo("#fichas_puzzle");
    }
    $(this).appendTo("#ficha_seleccionada");
}

function volverficha(){
    $(this).children("img").appendTo("#fichas_puzzle");
}

function poner(){
    $("fica_seleccionada").children("img").appendTo(".row");
        
    
}


