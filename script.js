var compScore = 0;
var userScore = 0;
var tieScore = 0;
var compRoshambo
repeat = true
while (repeat == true) { 
        var userRoshambo = prompt("Please choose r, p, or s.");
        console.log(userRoshambo);

        var compNumber = Math.random();
        console.log(compNumber)

        if (compNumber < .33) {
            compRoshambo = "r"
        } else if (compNumber < .66) {
            compRoshambo = "p"
        } else {
            compRoshambo = "s"
        }

        console.log(compRoshambo);
        alert(`You chose ${userRoshambo}, the computer chose ${compRoshambo}.`)

        if (compRoshambo === userRoshambo) {
            alert(`It's a tie! Spooky! O.O`)
            console.log(++tieScore);
        } else if (compRoshambo == "r" && userRoshambo == "p") {
            alert(`You won! Awesome! :-D`)
            console.log(++userScore);
        } else if (compRoshambo == "p" && userRoshambo == "s") {
            alert(`You won! Awesome! :-D`)
            console.log(++userScore);
        } else if (compRoshambo == "s" && userRoshambo == "r") {
            alert(`You won! Awesome! :-D`)
            console.log(++userScore);
        } else if (compRoshambo == "r" && userRoshambo == "s") {
            alert(`You lost. Idiot. Git Gud.`)
            console.log(++compScore);
        } else if (compRoshambo == "s" && userRoshambo == "p") {
            alert(`You lost. Idiot. Git Gud.`)
            console.log(++compScore);
        } else if (compRoshambo == "p" && userRoshambo == "r") {
            alert(`You lost. Idiot. Git Gud.`)
            console.log(++compScore);
        } 

        alert(`User: ${userScore} 
Computer: ${compScore}
Ties: ${tieScore}`)
    var repeat = confirm(`Would you like to play again?`);
    console.log(repeat);
    }
