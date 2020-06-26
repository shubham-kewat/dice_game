let img1 = document.querySelector(".img1")
let img2 = document.querySelector(".img2")
let result = document.querySelector('.result')

let randomNumberForDice1 = Math.floor(Math.random()*6)
let randomNumberForDice2 = Math.floor(Math.random()*6)
console.log(randomNumberForDice1+ " "+ randomNumberForDice2)
result.innerHTML = ""

calculateWinner(randomNumberForDice1,randomNumberForDice2)

function calculateWinner(num1,num2){
    if((num1>=1&&num1<=6)&&(num2>=1&&num2<=6)){
        
        img1.setAttribute("src","images/dice"+num1+".png")
        img2.setAttribute("src","images/dice"+num2+".png")    
    
        if(num1>num2){
            result.innerHTML = "winner is player1"
        }else if(num1<num2){
            result.innerHTML = "winner is player2"
        }else{
            result.innerHTML = 'game draw'    
        }
    
    }else{
        let s1 = Math.floor(Math.random()*6);
        let s2 = Math.floor(Math.random()*6); 
        console.log(s1+" "+s2)
        calculateWinner(s1,s2)
    }
    
}




