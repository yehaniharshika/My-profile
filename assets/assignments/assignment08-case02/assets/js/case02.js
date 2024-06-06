var colorarray = ['red','green','blue','yellow','lightpink','deeppink'];
var myInterval = null;
function  replaceColors(){
    var lastColor = colorarray.pop();
    colorarray.unshift(lastColor)

    $("#box-color1").css("background-color", colorarray[0]);
    $("#box-color2").css("background-color", colorarray[1]);
    $("#box-color3").css("background-color", colorarray[2]);
    $("#box-color4").css("background-color", colorarray[3]);
    $("#box-color5").css("background-color", colorarray[4]);
    $("#box-color6").css("background-color", colorarray[5]);
}

$("#start_btn").on("click", () =>{
    myInterval = setInterval(replaceColors,2000);
});

$("#stop_btn").on("click", () =>{
    clearInterval(myInterval);
});