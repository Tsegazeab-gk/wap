

function initialize() {
    var btnDecorate=document.getElementById("btndecorate");
     btnDecorate.onclick=decorate;

     var checkBoxElem=document.getElementById("checkbox");
     checkBoxElem.onchange=checkboxdecorate;
}

function decorate() {

var  textAreaElem=document.getElementById("textarea");

    var fontSize1= window.getComputedStyle(textAreaElem,null).fontSize;
console.log(fontSize1);

    var resized=parseInt(fontSize1)+ 2;

   textAreaElem.style.fontSize=resized+"px";
};

function checkboxdecorate() {

    var textAreaElem=document.getElementById("textarea");

    var checkBoxElem=document.getElementById("checkbox");

 if(checkBoxElem.checked) {
     textAreaElem.style.fontWeight = "bold";
     textAreaElem.style.color = "green";
     textAreaElem.style.textDecoration = "underline";
 }
 else
     textAreaElem.style.fontWeight="normal";

}

window.onload=initialize;

