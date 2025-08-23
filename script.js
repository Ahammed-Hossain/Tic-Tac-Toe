let box = document.querySelectorAll(".boxs");
let msgContainer = document.querySelector(".msg-Container");
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
        checkDraw();
    });
});

let checkWin = () => {
    for(method of winMethods) {
        let pos1 = box[method[0]].innerText;
        let pos2 = box[method[1]].innerText;
        let pos3 = box[method[2]].innerText;
        if (pos1 != "" && pos2 != "" && pos3 != "") {
            if (pos1 === pos2 && pos2 === pos3) {
                msgContainer.classList.remove("hide");
                msgText.innerText = `Congratulation player ${pos1} is Winner.`;
                disableBoxes();
            };
        };
    };
};

function checkDraw() {
    
        if ([...box].every(box => box.innerText !== '')) {
                msgContainer.classList.remove("hide");
                msgText.innerText = `Its a Draw`;
            };
    };

disableBoxes = () => {
  box.forEach(b => b.disabled = true);
};

enableBoxes = () => {
  box.forEach(b => {
    b.innerText = "";
    b.disabled = false;
  });
};
let reset = document.querySelector(".resetBtn");
reset.addEventListener("click", () => {
    enableBoxes();
    curentPlayer = "X";
    msgContainer.classList.add("hide");
});

let newGame = document.querySelector(".new-Game");
newGame.addEventListener("click", () => {
    enableBoxes();
    curentPlayer = "X";
    msgContainer.classList.add("hide");
});

// Add event listener to close the message container
