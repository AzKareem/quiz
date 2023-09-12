const Questions = [{
    q: "What is capital of India?",
    a: [{text: "Gandhinagar", isCorrect: false},
        {text: "Surat", isCorrect: false},
        {text: "Delhi", isCorrect: true},
        {text: "Mumbai", isCorrect: false}
    ]

},
    {
        q: "What is the capital of Thailand?",
        a: [{text: "Lampang", isCorrect: false, isSelected: false},
            {text: "Phuket", isCorrect: false},
            {text: "Ayutthaya", isCorrect: false},
            {text: "Bangkok", isCorrect: true}
        ]

    },
    {
        q: "What is the capital of Gujarat",
        a: [{text: "Surat", isCorrect: false},
            {text: "Vadodara", isCorrect: false},
            {text: "Gandhinagar", isCorrect: true},
            {text: "Rajkot", isCorrect: false}
        ]

    },
    {
        q: "What is the capital of Austria",
        a: [{text: "Vienna", isCorrect: true},
            {text: "Surat", isCorrect: false},
            {text: "Vadodara", isCorrect: false},
            {text: "Rajkot", isCorrect: false}
        ]

    },
    {
        q: "What is the capital of Germany",
        a: [{text: "Surat", isCorrect: false},
            {text: "Vadodara", isCorrect: false},
            {text: "Rajkot", isCorrect: false},
            {text: "Berlin", isCorrect: true}
        ]

    },
    {
        q: "What is the capital of Afghanistan",
        a: [{text: "Kabul", isCorrect: true},
            {text: "Surat", isCorrect: false},
            {text: "Vadodara", isCorrect: false},
            {text: "Rajkot", isCorrect: false}
        ]

    },
    {
        q: "What is the capital of Iran",
        a: [{text: "Surat", isCorrect: false},
            {text: "Tehran", isCorrect: true},
            {text: "Vadodara", isCorrect: false},
            {text: "Rajkot", isCorrect: false}
        ]

    },
    {
        q: "What is the capital of Pakistan",
        a: [{text: "Surat", isCorrect: false},
            {text: "Vadodara", isCorrect: false},
            {text: "Islamabad", isCorrect: true},
            {text: "Rajkot", isCorrect: false}
        ]

    },
    {
        q: "What is the capital of Turkey",
        a: [{text: "Surat", isCorrect: false},
            {text: "Vadodara", isCorrect: false},
            {text: "Instanbul", isCorrect: true},
            {text: "Rajkot", isCorrect: false}
        ]

    }

]
let currQuestion = 0
const test = 0
let score = 0
const number = Questions.length;
let countOfCorrectAnswer = 0;
const buttonsContainer = document.getElementById("Questions-buttons")

Questions.forEach((question, index) => {
    const node = document.createElement("button");
    node.addEventListener("click", () => loadQues(index));
    node.id = `q${index}`;
    const questionNr = document.createTextNode(`Question ${index + 1}`);
    node.appendChild(questionNr);
    buttonsContainer.appendChild(node);

});

function loadQues(index) {
    document.getElementById("question-number").textContent = `Question ${countOfCorrectAnswer + 1} of ${number}`;
    const question = document.getElementById("ques")
    const opt = document.getElementById("opt")
    currQuestion = index;
    question.textContent = Questions[index].q;
    opt.innerHTML = ""


    for (let i = 0; i < Questions[index].a.length; i++) {
        const choicesdiv = document.createElement("div");
        const choice = document.createElement("input");
        const choiceLabel = document.createElement("label");

        choice.type = "radio";
        choice.name = "answer";
        choice.value = i;
        choice.id = i;

        choiceLabel.textContent = Questions[index].a[i].text;
        choiceLabel.htmlFor = i;
        choicesdiv.appendChild(choice);
        choicesdiv.appendChild(choiceLabel);
        opt.appendChild(choicesdiv);
    }
}


function loadScore() {
    const totalScore = document.getElementById("score")
    totalScore.textContent = `You scored ${score} out of ${Questions.length}`
    let winner = document.getElementById("winner")
    winner.textContent = "GG you are a Winner";
}


function checkAns() {

    const selectedAns = parseInt(document.querySelector('input[name="answer"]:checked').value);

    if (Questions[currQuestion].a[selectedAns].isCorrect) {
        countOfCorrectAnswer++;
        score++;
        document.getElementById(`q${currQuestion}`).style.backgroundColor = "green";
        document.getElementById("wrong").classList.add('hidden');
        const questionButton = document.getElementById(`q${currQuestion}`);
        questionButton.disabled = true;
        if (countOfCorrectAnswer === Questions.length) {
            loadScore();
        }
    } else {
        let error = document.getElementById("wrong")
        error.classList.remove('hidden');
        error.textContent = "The answer you chosed is wrong please try again!";
        loadQues(currQuestion);
    }
}
function resetBtn() {
    location.reload()
}