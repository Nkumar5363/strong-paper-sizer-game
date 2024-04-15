
var randomNumber1=Math.floor(Math.random()*3)+1;
var randomPlayGame1="./image/paper"+randomNumber1+".jpg";

var image1=document.querySelectorAll(".img1")[0];

image1.setAttribute("src", randomPlayGame1);


var randomNumber2=Math.floor(Math.random()*3)+1;

var randomPlayGame2="./image/paper"+randomNumber2+".jpg";

var image2=document.querySelectorAll(".img1")[1];

image2.setAttribute("src", randomPlayGame2);

if(randomNumber1===1 && randomNumber2===2)
{
    document.querySelectorAll("h2")[0].innerHTML="WINNER 🙎‍♂️😎";
    document.querySelectorAll("h2")[1].innerHTML="LOOSER";
    document.querySelector(".child1").style.backgroundColor="purple";
    
}
else if(randomNumber1===2 && randomNumber2===3)
{
    
    document.querySelectorAll("h2")[0].innerHTML="WINNER 🙎‍♂️😎";
    document.querySelectorAll("h2")[1].innerHTML="LOOSER";
    document.querySelector(".child1").style.backgroundColor="purple";
}
else if(randomNumber1===1 && randomNumber2===3)
{
    document.querySelectorAll("h2")[0].innerHTML="LOOSER";
    document.querySelectorAll("h2")[1].innerHTML="WINNER 🙎‍♂️😎";
    document.querySelector(".child2").style.backgroundColor="purple";}
else if(randomNumber1===2 && randomNumber2===1)
{

    document.querySelectorAll("h2")[0].innerHTML="LOOSER";
    document.querySelectorAll("h2")[1].innerHTML="WINNER 🙎‍♂️😎";
    document.querySelector(".child2").style.backgroundColor="purple";
}
else if(randomNumber1===3 && randomNumber2===2)  
{
document.querySelectorAll("h2")[0].innerHTML="LOOSER";
document.querySelectorAll("h2")[1].innerHTML="WINNER 🙎‍♂️😎";
document.querySelector(".child2").style.backgroundColor="purple";
}
else if(randomNumber1===3 && randomNumber2===1)
{
    document.querySelectorAll("h2")[0].innerHTML="WINNER 🙎‍♂️😎";
    document.querySelectorAll("h2")[1].innerHTML="LOOSER";
    document.querySelector(".child1").style.backgroundColor="purple";
    
}
else 
{
    document.querySelectorAll("h2")[0].innerHTML="BOTH SAME";
    document.querySelectorAll("h2")[1].innerHTML="BOTH SAME";
    document.querySelector(".child1").style.backgroundColor="red";
    document.querySelector(".child2").style.backgroundColor="red";
}

