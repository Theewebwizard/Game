
function hideOthers(clickedImage)
{
    var images = document.querySelectorAll(".image");
    images.forEach(function (image)
    {
        if (image !== clickedImage)
        {
            image.style.display = "none";
        }
    }
    );
}

function getRandomNumber() {
    // 1 = rock
    // 2 = paper
    // 3 = scissor
    var randomDecimal = Math.random();
    var randomNumber = Math.floor(randomDecimal * 3) + 1;
    return randomNumber;
}

function checking(clickedImage, computerChoice) {
    const clickedAlt = clickedImage.alt;
    // console.log(clickedAlt);
    if (
        (clickedAlt === "rock" && computerChoice === "scissor") ||
        (clickedAlt === "paper" && computerChoice === "rock") ||
        (clickedAlt === "scissor" && computerChoice === "paper")
    ) {
        return 1; 
    } else if (clickedAlt === computerChoice) {
        return 0; 
    } else {
        return -1; 
    }
}

function show_result(result) {
    if (result == 1) {
        var temp = document.getElementById("won");
        temp.style.display = "block";
    }
    else if (result == 0) {
        var temp = document.getElementById("tie");
        temp.style.display = "block";
    }
    else {
        var temp = document.getElementById("lost");
        temp.style.display = "block";
    }
}

function onImageClick(clickedImage) 
{
    const images = document.querySelectorAll(".image");
    const randomValue = getRandomNumber();
    let computerChoice;
        images.forEach(function (image) {
        if (image !== clickedImage) {
            image.style.display = "none";
        } else {
            clickedImage.style.display = "block";
        }
    });
    const computerImage = document.createElement("img");
    computerImage.classList.add("image");
    if (randomValue === 1) {
        computerChoice = "rock";
        computerImage.src = "obsidian.png"; // Replace "rock.png" with the actual image path
    } else if (randomValue === 2) {
        computerChoice = "paper";
        computerImage.src = "file.png"; // Replace "paper.png" with the actual image path
    } else {
        computerChoice = "scissor";
        computerImage.src = "scissor.png"; // Replace "scissor.png" with the actual image path
    }
    console.log("Computer Choice:", computerChoice);
    var result = checking(clickedImage, computerChoice);
    var resultContainer = document.getElementById("result");
    resultContainer.appendChild(computerImage);
    show_result(result);
    console.log("Result:", result);
}




