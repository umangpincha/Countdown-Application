let myText = document.querySelector("#my-text");
let result  = document.querySelector(".countdown-area");

function iterateCounter(result1){
    if(result1 < 0){
        return;
    }
    result.textContent = result1;
    result1 = result1-1;
    console.log(result.textContent);
    setTimeout(function (){iterateCounter(result1)},1000)
}

function startCounter(){
    let result1 = myText.value;
    iterateCounter(result1);
}