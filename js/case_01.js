var myInterval = null;
var array = ["A", "B", "C", "D", "E", "F"];

function replaceValues(){
    // change the array
    let lastValue = array.pop(); // remove the last index
    array.unshift(lastValue); // set the last index to array as first index

    //update the elements
    $("#value1").text(array[0]);
    $("#value2").text(array[1]);
    $("#value3").text(array[2]);
    $("#value4").text(array[3]);
    $("#value5").text(array[4]);
    $("#value6").text(array[5]);
}

$("#btn_start").on("click", ()=>{
    myInterval = setInterval(replaceValues, 1500);
})

$("#btn_stop").on("click", ()=>{
    clearInterval(myInterval);
})