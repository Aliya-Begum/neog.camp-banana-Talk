var btnTranslate = document.querySelector("#btn-translate");
var btnInput = document.querySelector(".txt-input");
var outputDiv = document.querySelector(".output-div") ;

console.log(btnInput);

function clickHandler(){
    outputDiv.innerText = "euhhdij " +btnInput.value; 
}

btnTranslate.addEventListener("click", clickHandler);
