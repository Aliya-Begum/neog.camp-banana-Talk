var btnTranslate = document.querySelector("#btn-translate");
var btnInput = document.querySelector(".txt-input");

console.log(btnInput);

function clickHandler(){
    console.log("clicked");
    console.log("input",btnInput.value);
}

btnTranslate.addEventListener("click", clickHandler);
var txtArea = document.querySelector("textarea");
var btnPrimary = document.querySelector('.btn-primary');
var btnInput = document.querySelector('#input-btn');
var translator = document.querySelector("[name='translator']");
console.log(txtArea);
console.log(btnPrimary);
console.log(btnInput);
console.log(translator);