
const genNbr = () => {
    return Math.floor(Math.random()*6)+1;
}
let hs = 0;
function highscore(score){
    let pCtrl = document.getElementById("highscore");
    
    if(score>=hs){
        hs=score;
    }
    pCtrl.innerText=hs;
}

const game = () => {
    let inptCtrl = document.getElementById("score");
    let score = 0;
    let gameOver = false;
    while(!gameOver){
        let roll = genNbr();
        if(roll===1){
            score+=roll;
            gameOver=true;
        }
        else {
            score+=roll;
        }
    }
    inptCtrl.value = score;
    highscore(score);

}