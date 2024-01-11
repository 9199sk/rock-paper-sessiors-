let userscore=0;
let compscore=0;



//select all div and para
const choices=  document.querySelectorAll(".choices1");
let msg=document.querySelector("#msg");
const userscoreespara= document.querySelector(".user-score");
const compscorepara =document.querySelector(".comp-score");





const gencomputerchoise =()=>{
    const options =["rock","paper","scissor"];
    //rock, paper, sessior 
   const ranidx= Math.floor(Math.random()*3);
   return options[ranidx];
}

const drawgame=()=>{
   msg.innerHTML="game was draw! play again"
   msg.style.backgroundColor=" rgb(9, 9, 85)";
}

const showwinner=(userwin,userchoices,computerchoice)=>{
    if(userwin){
        userscore++;
        userscoreespara.innerText =userscore;
        msg.innerHTML=`you win! your ${userchoices} beats ${computerchoice}`
        msg.style.backgroundColor="green";
        
    }else{
       compscore++;
       compscorepara.innerText= compscore; 
       msg.innerHTML=`you Lose! your ${userchoices} beats ${computerchoice}`
       msg.style.backgroundColor="red";
    }

}



//this is user chosie ----
const playgame =(userchoices)=> {
    console.log("use choise", userchoices);

    ///again genrate computer choise
    const computerchoice = gencomputerchoise();
    console.log("comp choise=",computerchoice);

    //function call---
    if(userchoices === computerchoice){
        drawgame();
        
    }
    else{
    let  userwin =true;
    if(userchoices === "rock"){
        //sessior ya rock computer chosse
       userwin= computerchoice ==="paper" ? false : true;
    }
    else if(userchoices === "paper") {
        //rock,sessior
        userwin=computerchoice==="scissor" ? false : true;

    }else{
        //rock, paper
      userwin =  computerchoice === "rock" ? false : true;
    }
    showwinner(userwin,userchoices,computerchoice);


    }

};



choices.forEach((choices1) =>{
    choices1.addEventListener("click",()=>{
        const userchoices= choices1.getAttribute("id");
       playgame(userchoices)
    });
});