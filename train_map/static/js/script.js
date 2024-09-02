document.addEventListener("DOMContentLoaded", function() {
    const canvas = document.getElementById("mapCanvas");
    const ctx = canvas.getContext("2d");

    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;

    // Train position and size
    let trainX = 100;
    let trainY = 100;
    const trainSize = 30;

    // Draw the train (a red square)
    function drawTrain() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "red";
        ctx.fillRect(trainX, trainY, trainSize, trainSize);
    }

    // Move the train (example: move right)
    function moveTrain() {
        trainX += 10;
        drawTrain();
    }

    // Initial drawing
    drawTrain();

    // Button click event to move the train
    document.getElementById("moveTrainButton").addEventListener("click", moveTrain);
});