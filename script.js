let playGame=confirm("Lets play rock, paper or scissors");
    if(playGame){

        let playerChoice = prompt("Please enter r, p , or s");
        if (playerChoice){
            let playerOne = playerChoice.trim() .toLowerCase();
            if (
                playerOne === "r"||
                 playerOne === "p" ||
                  playerOne === "s") 
                  {
                let computerChoice= Math.floor(Math.random() * 3 + 1);
                let computer = computerChoice === 1 ? "r"
                    : computerChoice === 2 ? "p"
                    : "s";
                let results = playerOne === computer
                    ? "Tie game!"
                    : playerOne === "r" && computer === "p"
                    ? `playerOne: ${playerOne}\nComputer: ${computer}\nComputer wins!`
                    : playerOne === "s" && computer === "rock"
                    ? `playerOne: ${playerOne}\nComputer: ${computer}\nComputer wins!`
                    :playerOne === "p" && computer ==="s"
                    ? `playerOne: ${playerOne}\nComputer: ${computer}\nComputer wins!`
                    : `playerOne: ${playerOne}\nComputer: ${computer}\nplayerOne wins!`;
                    alert(results);
                    let playAgain = confirm("Play Again?");
                    playAgain ? location.reload() :alert ("Ok, thanks for playing.");
                  }  else{
                alert("Entry Invalid.");
        }
        
    } else{
            alert("Maybe next time.");
        }
     } else{
        alert("Ok, maybe next time.");
    }


// console.log(computerChoice);

// if(computerChoice<=.33){
//     computerChoice="r"
// }

// else if(computerChoice>.33 && computerChoice<.67){
//     computerChoice="p";
// }

// else{
//     computerChoice="s";
// } console.log("Computer: " + computerChoice);

// var compare = function(choice1, choice2){

//     if(choice1 === choice2){
//         return "It's a tie!";
//     }

//         else if(choice1 === "r"){

//             if(choice2 === "s"){

//                 return "r wins";

//             }

//         else{
//             return "p wins";
//         }
// }
// else if(choice2 === "p"){
//     if(choice2 === "r"){
//         return "p wins";
//     }
//     else{
//         return "s wins";
//     }
// }
// }

// compare(userChoice, computerChoice);

