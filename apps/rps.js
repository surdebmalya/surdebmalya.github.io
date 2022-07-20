function display(scoreOfPlayer, scoreOfComputer) {
    let ground = document.getElementById("ground")
    ground.innerHTML = `
    <div class="w3-row-padding" style="margin:0 -16px">
        <div class="w3-half w3-margin-bottom">
            <h1>
                Your Score: ` + scoreOfPlayer + `
            </h1>
            <p style="font-size: 1.5em;">
                Choose one option
            </p>
            <div class="w3-row-padding">
                <div class="w3-third w3-margin-bottom">
                    <button style="text-decoration: none;" onclick="playerInput(0);">
                        <img src="./images/rock.png" width="50px" height="80px">
                    </button>
                </div>
                <div class="w3-third w3-margin-bottom">
                    <button style="text-decoration: none;" onclick="playerInput(1);">
                        <img src="./images/paper.png" width="50px" height="80px">
                    </button>
                </div>
                <div class="w3-third w3-margin-bottom">
                    <button style="text-decoration: none;" onclick="playerInput(2);">
                        <img src="./images/scissor.png" width="50px" height="80px">
                    </button>
                </div>
            </div>
        </div>
        <div class="w3-half w3-margin-bottom">
            <h1>
                Computer Score: ` + scoreOfComputer + `
            </h1>
            <p style="font-size: 1.5em;">
                Computer will select randomly from these 3 options.
            </p>
        </div>
    </div>
    `
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function nextMove() {
    scoreOfPlayer = localStorage.getItem("playerScore");
    scoreOfComputer = localStorage.getItem("computerScore");
    display(scoreOfPlayer, scoreOfComputer)
}

function renderResult(result, playerIndex, computerIndex) {
    let ground = document.getElementById("ground")
    playerScore = parseInt(localStorage.getItem("playerScore"));
    computerScore = parseInt(localStorage.getItem("computerScore"));
    if (result == 0) {
        playerScore = playerScore + 1
        localStorage.setItem("playerScore", playerScore)
    } else if (result == 1) {
        computerScore = computerScore + 1
        localStorage.setItem("computerScore", computerScore)
    }
    playerImage = "."
    if (playerIndex == 0) playerImage = "./images/rock.png"
    else if (playerIndex == 1) playerImage = "./images/paper.png"
    else playerImage = "./images/scissor.png"
    computerImage = "."
    if (computerIndex == 0) computerImage = "./images/rock.png"
    else if (computerIndex == 1) computerImage = "./images/paper.png"
    else computerImage = "./images/scissor.png"
    lowerButtonHTML = `
    <button onclick="nextMove();">
        Play Next Move
    </button>
    `
    if (playerScore == 5) {
        lowerButtonHTML = `
        <p style="font-size: 1.5em;">
            Congratulations, you have won the game! 🥳
        </p>
        <button onclick="startTheGame();">
        Challenge Again
        </button>
        `
    }
    else if(computerScore==5) {
        lowerButtonHTML = `
        <p style="font-size: 1.5em;">
            Sorry, you have lost the game! 😟
        </p>
        <button onclick="startTheGame();">
        Try Again
        </button>
        `
    }
    ground.innerHTML = `
    <div class="w3-row-padding" style="margin:0 -16px">
        <div class="w3-half w3-margin-bottom">
            <h1>
                Your Choice
            </h1>
            <div class="w3-row-padding" style="margin: 64px">
                <div style="text-align: center;">
                    <img src=`+ playerImage + ` width="100px" height="140px">
                </div>
            </div>
        </div>
        <div class="w3-half w3-margin-bottom">
            <h1>
                Computer Choice
            </h1>
            <div class="w3-row-padding" style="margin: 64px">
                <div style="text-align: center;">
                    <img src=`+ computerImage + ` width="100px" height="140px">
                </div>
            </div>
        </div>`+ lowerButtonHTML + `
    </div>
    `
}

function playerInput(playerChoice) {
    // 0: Rock
    // 1: Paper
    // 2: Scissor
    computerChoice = getRndInteger(0, 2)
    result = -1;
    if (playerChoice == 0 && computerChoice == 0) {
        result = -1;
    }
    else if (playerChoice == 0 && computerChoice == 1) {
        result = 1;
    }
    else if (playerChoice == 0 && computerChoice == 2) {
        result = 0;
    }
    else if (playerChoice == 1 && computerChoice == 0) {
        result = 0;
    }
    else if (playerChoice == 1 && computerChoice == 1) {
        result = -1;
    }
    else if (playerChoice == 1 && computerChoice == 2) {
        result = 1;
    }
    else if (playerChoice == 2 && computerChoice == 0) {
        result = 1;
    }
    else if (playerChoice == 2 && computerChoice == 1) {
        result = 0;
    }
    else {
        result = -1;
    }
    renderResult(result, playerChoice, computerChoice)
}

function startTheGame() {
    console.log("Start the game button clicked!")
    localStorage.setItem("playerScore", 0)
    localStorage.setItem("computerScore", 0)
    playerScore = localStorage.getItem("playerScore");
    computerScore = localStorage.getItem("computerScore");

    display(playerScore, computerScore)
}