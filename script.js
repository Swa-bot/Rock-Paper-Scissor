function getComputerChoice(){
    const num = Math.random
    let move = null;
    if(num<0.333){
        move = "rock";
    }
    else if(num<0.666){
        move = "paper";
    }
    else{
        move = "scissor"
    }

    return move;
}
////
function comp_results(computer_selection,player_selection){
    let winner = null;
    if(computer_selection == player_selection.toLowerCase()){
        return "Tie!"
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
    if(player_selection == winner){
        return 1
    }
    else{
        return 0
    }
}
function game(){
    let player_wins = 0
    let computer_wins = 0

    for(let i = 0; i<5;i++)
    {   

        while(player_input != "ROCK" && player_input != "PAPER" && player_input != "SCISSOR"){
            console.log("Oh no! It seems your input is not valid! Please try again!")
            player_input = prompt("What move are you playing? Type either rock, paper or scissor.");

            if(player_input != null && player_input != undefined){
            player_input = player_input.toUpperCase();
            }
        }

        const comp_input = getComputerChoice();

        const result = comp_results(comp_input,player_input);

        if(result == 1){
            player_wins++;
            console.log("You win! "+player_input+" beats "+comp_input+".");
        }  
        else if (result == 0){
            computer_wins++;
            console.log("You lose! "+comp_input+" beats "+player_input+".");
        }
        else{
            console.log("It was a tie! "+comp_input+" ties with "+player_input+".")
            i--;
        }
    }
    if(player_wins > computer_wins){
        console.log("You win the game!")    
        return
    }
    else{
        console.log("You lost the game!")
        return
    }
}
//game();