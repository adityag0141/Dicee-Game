function play() {
    var random1 = ((Math.random()) * 6);
    var dice1 = ((Math.floor(random1) + 1));
    var random2 = ((Math.random()) * 6);
    var dice2 = ((Math.floor(random2) + 1));
    var diceImage1 = "dice" + dice1 + ".png";
    var diceSource1 = "images/" + diceImage1;
    var diceImage2 = "dice" + dice2 + ".png";
    var diceSource2 = "images/" + diceImage2;
    document.querySelectorAll("img")[0].setAttribute("src", diceSource1);
    document.querySelectorAll("img")[1].setAttribute("src", diceSource2);
    if (dice1 > dice2) {
        document.querySelector("h1").textContent = "Player 1 wins!"
    }
    else if (dice1 == dice2) {
        document.querySelector("h1").textContent = "Draw!"

    }
    else {
        document.querySelector("h1").textContent = "Player 2 wins!"
    }
}