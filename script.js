window.addEventListener("load",function(){
/////Variables & constants
    let player_wins = 0
    let computer_wins = 0
    const btns = document.querySelectorAll("button");
    const scores = document.querySelector("#scores>div");

//This function generates a random option which is the computer's move
    function getComputerChoice(){
        const num = Math.floor(Math.random()*10);
        if(num<3){
            return "rock";
        }
        else if(num<6){
           return "paper";
        }
        else{
            return "scissor";
        }
    }
//This function takes the player and computer's input and returns who the winner is
    function comp_results(computer_selection,player_selection){
        let winner = null;
        if(computer_selection == player_selection.toLowerCase()){
            return 2
        }

        if(computer_selection == "rock"){
            winner = "PAPER"
        }
        else if (computer_selection == "paper"){
            winner = "SCISSOR"
        }
        else{
            winner = "ROCK"
        }
        if(player_selection.toUpperCase() == winner){
            return 1
        }
        else{
            return 0
        }
    }
    //Here we add an event listener to each button and run a series of code every time a button is pressed
        btns.forEach((element)=>{
            element.addEventListener("click",(e)=>{
                //Variables & Constants
                const player_input = e.target.textContent;
                let comp_input = getComputerChoice();
                const result = comp_results(comp_input,player_input);
                const msg = document.querySelector(".msg");

                //This code uses the result variable which is the
                // returned value of the "ComputerChoice" function
                // and changes the message in the "msg" p tag
                // appropriately as well as updating the comp/player wins
                if(result == 0){
                    computer_wins+=1;
                    msg.textContent = "Oh no, you lose!";
                }
                else if(result==1 ){
                    player_wins+=1;
                    msg.textContent = "Yay you win!";
                }
                else if(result == 2){
                    msg.textContent = "It's a tie!";
                }
                //This keeps updating the scores in the "#scores" element
                scores.textContent = "Computer: "+computer_wins+"/5 You: "+player_wins+"/5.";
                
                //This code removes the buttons once the
                // player or computer reaches 5 wins and
                // displays the appropriate message in the "#main" div
                if(player_wins >= 5 || computer_wins >=5){
                    btns.forEach((element)=>{
                        element.style.display = "none";
                    });
                    if(player_wins == 5){
                        document.querySelector("#main").textContent = "Yay you won the game! Refresh the page if you would like to play again!";

                    }
                    else{
                        document.querySelector("#main").textContent = "Oh no, you lost the game! Refresh the page if you would like to play again!";
                    }
                }
            });
        });
});
