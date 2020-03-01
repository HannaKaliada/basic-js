module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
    let answerObj = {
        turns : 0,
        seconds : 0,
    }
    answerObj.turns = Math.pow(2,disksNumber)-1;
    answerObj.seconds = answerObj.turns/(turnsSpeed/3600);
    return answerObj;
}