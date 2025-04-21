

let value="";
console.log("running");
console.log(value);
createNumberButton();

function createNumberButton(){
    let cdiv=document.querySelector(".numberButtons")
    for(let i=0;i<=9;i++){
        cdiv.innerHTML+=`<button onclick="valueNumberMaker(${i})">${i}</button>`
    }
}

function valueNumberMaker(param){
    value+=`${param}`
    render();
}
function operatorMaker(param){
    value+=`${param}`
    render();
}
function calculateValue(){
    let result = math.evaluate(value);
    document.querySelector(".displayCalculation").innerHTML=`${result}`;
    value="";
}

function clearall(){
    value=``;
    render();
}

function render(){
document.querySelector(".displayCalculation").innerHTML=`${value}`;
}
