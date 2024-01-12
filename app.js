let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");
let msg = document.querySelector("#msg");

let playerX = true;

let winnPattern = [
    [0, 1, 2],
    [0, 4, 8],
    [0, 3, 6],
    [3, 4, 5],
    [6, 7, 8],
    [6, 4, 2],
    [1, 4, 7],
    [2, 5, 8]
];

const disableButtons = () => {
    for (let box of boxes) {
        box.disabled = true;
        box.style.backgroundColor = "green";
        box.style.color = "white";
    }
}
const enableButtons = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.style.backgroundColor = "#FBFFB9";
        box.style.color = "#ce4b2d";
        box.innerText = "";
        playerX=true;
    }
    msg.innerText = "";
}
const checkWinner = () => {

    for (pattern of winnPattern) {

        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;
        if (pos1Val === pos2Val && pos2Val === pos3Val && pos1Val !== "") {
            console.log("winner is", pos1Val)
            showWinner(pos1Val);
            disableButtons();

        }

    }
};
const showWinner = (winner) => {
    msg.innerText = `Congragulations   "${winner}"  Won`;

}


boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (playerX) {
            box.innerText = "X";

            playerX = false;
        }
        else {
            box.innerText = "O";
            playerX = true;
        }
        box.disabled = true;
        checkWinner();
    }
    )
})
resetBtn.addEventListener("click", enableButtons);