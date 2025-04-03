let compscore=0
let userscore=0
let tied =0


function playRound() { 
let a= Math.random();
a=a*100;
console.log(a)

let comp;

if(a>=0&&a<=33){comp=1} //1 ->rock
else if (a>33&&a<66){comp = 2} // 2 -> paper
else {comp=3}// 3-> scissor

let user = prompt("Enter a number between 1 to 3:"); 
user = Number(user); 

if(comp==user)
    {
        console.log("game tied")
        tied++;
    }
else if ((comp==1&&user==2) || (comp==2 && user ==3) || (comp==3 && user ==1))
    {
    console.log("user won")
    userscore++;
    }
else if ((comp==1&&user==3)|| (comp==2&&user==1) || (comp==3 && user ==2))
    {
        console.log("comp won")
        compscore++;
    }
    console.log("user input is "+user+" comp "+comp)
}
    let i=0
    while(i<5){
        i++;
    playRound();
    
    console.log("current score is user: "+userscore+"comp:"+compscore+" tied:"+tied)
    }