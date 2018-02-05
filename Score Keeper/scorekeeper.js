var player1Button = document.querySelector("#p1");
var player2Button = document.querySelector("#p2");
var player1Display = document.getElementById("span1"); 
var player2Display = document.getElementById("span2");
var numInputDisplay = document.getElementById("span3");
var numInput = document.querySelector("input");
var p1Score = 0;
var p2Score = 0;
var reset = document.querySelector("#reset");
var gameOver = false;
var winningScore = 5;


player1Button.addEventListener("click", function(){
    if (!gameOver){
        p1Score++;
        if (p1Score === winningScore){
            gameOver = true;
            player1Display.classList.add("winner");
        }
        player1Display.textContent = p1Score
    }
       
    });


player2Button.addEventListener("click", function () {
    if (!gameOver) {
        p2Score++;
        if (p2Score === winningScore) {
            gameOver = true;
            player2Display.classList.add("winner");
        
    }
        player2Display.textContent = p2Score;
    }
});


reset.addEventListener("click", function(){
    console.log("reset clicked");
    p1Score = 0;
    p2Score = 0;
    player1Display.textContent = 0;
    player2Display.textContent = 0;
    player1Display.classList.remove("winner");
    player2Display.classList.remove("winner");
    gameOver = false;
})

numInput.addEventListener("change", function(){
    numInputDisplay.textContent = numInput.value;
    winningScore = Number(numInput.value);

    
});
