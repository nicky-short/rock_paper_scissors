
function getComputerChoice(min, max) {
    min=Math.ceil(1);
    max=3;Math.floor(3);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
if (getComputerChoice()===1) {
    console.log("Rock");
}
else if (getComputerChoice()===2) {
    console.log("Paper");
}
else {
    console.log("Scissors");
}



