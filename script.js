console.log("Test")

// selection index
// rock = 0
// paper = 1 
// scissors = 2

// ramdomly generate computer selection rock, paper, scissors
function computerPlay() {
    let n;
    n = Math.floor(Math.random()*3)
    return n;
}

// rock papper scissors comparison
function playRound(player_selection, computer_selection) {
    let play_result
    if (player_selection == computer_selection) {
        play_result = "draw!";
    }

    else if (player_selection-computer_selection == 1) {
        play_result = "you win!";
    }

    else if (player_selection-computer_selection == -2) {
        play_result = "you win!";
    }

    else if (player_selection-computer_selection == -1) {
        play_result = "you lose!";
    }

    else if (player_selection-computer_selection == 2) {
        play_result = "you lose!";
    }

    return play_result;
}

// convert player input to integer
function convert_player_input(text_input) {
    let player_input
    if (text_input.toLowerCase() == "rock") {
        player_input = 0;
    }

    else if (text_input.toLowerCase() == "paper") {
        player_input = 1;
    }

    else if (text_input.toLowerCase() == "scissors") {
        player_input = 2;
    }

    return player_input
}

// convert number to text for logging
function number_to_text(number_input) {
    let text_output
    if (number_input == 0) { 
        text_output = "rock";
    }

    else if (number_input == 1) { 
        text_output = "papper";
    }

    else if (number_input == 2) { 
        text_output = "scissors";
    }

    return text_output;
}

// single game
function single_game() {
    let player_input = prompt("Please select one: rock, paper, scissors!");
    let player_selection = convert_player_input(player_input);
    let computer_selection = computerPlay();
    let single_game_result

    console.log("Your selection: "+player_input);
    console.log("Computer's selection: "+number_to_text(computer_selection));
    console.log(playRound(player_selection, computer_selection));

    switch (playRound(player_selection, computer_selection)) {
        case "draw!":
            single_game_result = "d";
            break;
        case "you win!":
            single_game_result = "w";
            break;
        case "you lose!":
            single_game_result = "l";
            break;
    }

    return single_game_result;
}

// serie of 5 games
function game() {
    
    let player_score = 0;
    let computer_score = 0;

    for (i=0;i<5;i++) {
        console.log("Round: "+(i+1))

        this_game_result = single_game()

        if (this_game_result == "w") {
            player_score += 1;
        }

        else if (this_game_result == "l") {
            computer_score += 1;
        }
    }

    console.log("#### Summary ####");
    console.log("Your score: "+player_score);
    console.log("Computer score: "+computer_score);

    if (player_score == computer_score) {
        console.log("It's a draw!");
    }

    else if (player_score > computer_score) {
        console.log("You win the serie!");
    }

    else if (player_score < computer_score) {
        console.log("You lose the serie!");
    }
}