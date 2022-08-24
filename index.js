let active = false;
let firstPlayer = true;
const allBoxes = document.querySelectorAll(".box")
const container = document.querySelector(".container")
const turnText = document.querySelector(".text")
container.addEventListener("click", (e) => {
    const target = e.target;
    let gameOn = true;
    let game;
    if(target.classList.contains("box")){
        if(firstPlayer && target.classList.contains("active")){
            target.classList.remove("active");
            target.innerText = "X";
            firstPlayer = false;
            if(gameOn)turnText.innerText = "Second player turn"
            if(!gameOn)turnText.innerText = "First player victory"
        }else if(!firstPlayer && target.classList.contains("active")){
            target.classList.remove("active");
            target.innerText = "O";
            firstPlayer = true;
            if(gameOn)turnText.innerText = "First player turn"
            if(!gameOn)turnText.innerText = "Second player victory"
        }
        game = {
            1: allBoxes[0].innerText, 2: allBoxes[1].innerText, 3: allBoxes[2].innerText,
            4: allBoxes[3].innerText, 5: allBoxes[4].innerText, 6: allBoxes[5].innerText,
            7: allBoxes[6].innerText, 8: allBoxes[7].innerText, 9: allBoxes[8].innerText
        }; 
        if(checkArr([game[1], game[2], game[3]]) || checkArr([game[1], game[4], game[7]])  || checkArr([game[1], game[5], game[9]]) || checkArr([game[2], game[5], game[8]]) || checkArr([game[3], game[6], game[9]]) || checkArr([game[4], game[5], game[6]]) || checkArr([game[7], game[5], game[3]]) || checkArr([game[7], game[8], game[9]])){
            if(!firstPlayer){
                alert("First player won!")
                for(let box of allBoxes){
                    box.innerText = ""
                    box.classList.add("active")
                }
            }
            if(firstPlayer){
                alert("Second player won!")
                for(let box of allBoxes){
                    box.innerText = ""
                    box.classList.add("active")
                }
            }
            gameOn = false;
        }        
    };
});
function checkArr(arr){
    return arr.every((el, i, obj) => (obj[0]) && (el === obj[0]))
}