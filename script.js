window.addEventListener("load",function(){
/////Variables & constants
    let player_wins = 0
    let computer_wins = 0
    const btns = document.querySelectorAll("button");

    function getComputerChoice(){
        const num = Math.floor(Math.random()*10);
        let move = null;
        if(num<3){
            move = "rock";
        }
        else if(num<6){
            move = "paper";
        }
        else{
            move = "scissor"
        }

        return move;
    }

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
    while(computer_wins <5 && player_wins < 5){
        btns.forEach((element)=>{
            element.addEventListener("click",(e)=>{
                //Variables & Constants
                const player_input = e.target.textContent;
                let comp_input = getComputerChoice();
                const result = comp_results(comp_input,player_input);
                const msg = document.querySelector(".msg");

                if(result == 0){
                    computer_wins++;
                    msg.textContent = "Oh no, you lose!";
                }
                else if(result==1 ){
                    player_wins++;
                    msg.textContent = "Yay you win!";
                }
                else if(result == 2){
                    msg.textContent = "It's a tie!";
                }

            });
        });
    }
    if(player_wins == 5){
        
    }

});
