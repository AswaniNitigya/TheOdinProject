const button= document.querySelector("#finalbtn")

button.addEventListener('click',verification);

function verification(){
    let value1 = document.querySelector("#password").value
    let value2 = document.querySelector("#cpassword").value
    if(value1!==value2){
        document.querySelector("#pNOTmatch").innerHTML=`Password Not matched`
    }
}