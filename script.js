let box = document.querySelectorAll(".boxs");
let msgContainer = document.querySelector(".main-Container");
let msgText = document.querySelector(".msg"); // message show করার জন্য একটা আলাদা element নাও

let curentPlayer = "X";

let winMethods = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

box.forEach((boxs) => {
    boxs.addEventListener("click", () => {
        if (boxs.innerText === "") {
            boxs.innerText = curentPlayer;
            curentPlayer = curentPlayer === "X" ? "O" : "X";
        }
        checkWin();
    });
});

function checkWin() {
    for (let method of winMethods) {   // forEach এর জায়গায় for-of ব্যবহার করলাম
        let [a, b, c] = method;
        if (
            box[a].innerText &&
            box[a].innerText === box[b].innerText &&
            box[a].innerText === box[c].innerText
        ) {
            let winner = box[a].innerText;
            console.log("Winner: " + winner);

            msgText.innerText = `🎉 Congratulation Player ${winner} Wins! 🎉`;
            disableBoxes();
            // msgContainer.classList.remove("hide"); // winner পাওয়া গেলে message show করো
            // winner হলে box বন্ধ
            return; // winner পাওয়া গেলে loop আর চালাবো না
        }
    }
};
function disableBoxes() {
  box.forEach(b => b.disabled = true);
};

function enableBoxes() {
  box.forEach(b => {
    b.innerText = "";
    b.disabled = false;
  });
};
let reset = document.querySelector(".resetBtn");
reset.addEventListener("click", () => {
    enableBoxes();
    curentPlayer = "X";
    // msgContainer.classList.add("hide");
    console.log("Game Reset");
});

let newGame = document.querySelector(".new-Game");
newGame.addEventListener("click", () => {
    enableBoxes();
    curentPlayer = "X";
    // msgContainer.classList.add("hide");
    console.log("New Game Started");
});