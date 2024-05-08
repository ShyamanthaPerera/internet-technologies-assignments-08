var colors = ["#FE0000","#008001","#0000FE","#FFFF00","#FFBFCD","#EE82EF"];

function changeColors(){
    let lastColor = colors.pop();
    colors.unshift(lastColor);

    $("#color1").css({background:colors[0]});
    $("#color2").css({background:colors[1]});
    $("#color3").css({background:colors[2]});
    $("#color4").css({background:colors[3]});
    $("#color5").css({background:colors[4]});
    $("#color6").css({background:colors[5]});
}

setInterval(changeColors,1000);