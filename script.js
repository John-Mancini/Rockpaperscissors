var userChoice= prompt("Do you choose rock, paper or scissors");

var computerChoice= Math.random();

console.log(computerChoice);

if(computerChoice<=.33){
    computerChoice="r"
}

else if(computerChoice>.33 && computerChoice<.67){
    computerChoice="p";
}

else{
    computerChoice="s";
} console.log("Computer: " + computerChoice);

var compare = function(choice1, choice2){

    if(choice1 === choice2){
        return "It's a tie!";
    }

        else if(choice1 === "r"){

            if(choice2 === "s"){

                return "r wins";

            }

        else{
            return "p wins";
        }
}
else if(choice2 === "p"){
    if(choice2 === "r"){
        return "p wins";
    }
    else{
        return "s wins";
    }
}
}

compare(userChoice, computerChoice);

