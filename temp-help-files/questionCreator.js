var qID = 1;
var aID = 1;
var json = [];

var numOfQ = 30;
var numOfA = 4;

var posOfTrueAnswer = [true, false, false, false];

for(let i = 0; i < numOfQ; ++i) {
    var question = {};
    question.id = qID++;
    question.answers = [];
    for(let q = 0; q < numOfA; ++q) {
        let answer = {};
        answer.id = aID++;
        answer.questionID = qID - 1;
        answer.correct = posOfTrueAnswer[q];
        answer.ans = 'Это вариант ответа' + ' ' + (aID - 1) + ' / ' + (qID - 1);
        if(answer.correct) answer.ans += ' CORRECT';
        question.answers.push(answer);
    }
    question.text = 'Это текст вопроса' + ' ' + (qID - 1);
    question.category = 'SPORT';
    posOfTrueAnswer.sort(compareRandom);
    json.push(question);
}

var json = JSON.stringify(json);

document.write(json);


function compareRandom(a, b) {
    return Math.random() - 0.5;
}

