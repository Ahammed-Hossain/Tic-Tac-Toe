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
            msgContainer.classList.remove("hide");

            disableBoxes(); // winner হলে box বন্ধ
            return; // winner পাওয়া গেলে loop আর চালাবো না
        }
    }
}

// সব box disable করো
function disableBoxes() {
    box.forEach((boxs) => {
        boxs.disabled = true; // box disable করে দাও
        boxs.style.pointerEvents = "none"; // pointer events বন্ধ করে দাও
    });
}

// সব box enable করো (reset/new game এর সময়)
function enableBoxes() {
    box.forEach((b) => {
        b.innerText = "";
        b.style.pointerEvents = "auto";
    });
}

let reset = document.querySelector(".resetBtn");
reset.addEventListener("click", () => {
    enableBoxes();
    curentPlayer = "X";
    msgContainer.classList.add("hide");
    console.log("Game Reset");
});

let newGame = document.querySelector(".new-Game");
newGame.addEventListener("click", () => {
    enableBoxes();
    curentPlayer = "X";
    msgContainer.classList.add("hide");
    console.log("New Game Started");
});