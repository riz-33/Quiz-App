var questions = [
    {
        question: "Who inaugurated the State Bank of Pakistan?",
        option1: "Quaid-e-Azam",
        option2: "Malik Ghulam Muhammad",
        option3: "Liaquat Ali Khan",
        option4: "Allama Muhammad Iqbal",
        answer: "Quaid-e-Azam",
    },
    {
        question: "Sardar Abdur Rub Nishtar was the Governor of?",
        option1: "Gilgit Baltistan",
        option2: "KPK",
        option3: "Punjab",
        option4: "Sindh",
        answer: "Punjab",
    },
    {
        question: "National code of Pakistan is?",
        option1: "PAK",
        option2: "PK",
        option3: "PAK 1",
        option4: "None of them",
        answer: "PK",
    },
    {
        question: "Where is Warsak Dam of Pakistan situated?",
        option1: "Khyber Pakhtunkhwa",
        option2: "Punjab",
        option3: "Sindh",
        option4: "Balochistan",
        answer: "Khyber Pakhtunkhwa",
    },
    {
        question: "Shakarparrian is situated in?",
        option1: "Islamabad",
        option2: "Rawalpindi",
        option3: "Murree",
        option4: "Peshawar",
        answer: "Islamabad",
    },
    {
        question: "Identify the largest cantonment of Pakistan?",
        option1: "Kharian Cantt",
        option2: "Quetta Cantt",
        option3: "Okara Cantt",
        option4: "Karachi Cantt",
        answer: "Kharian Cantt",
    },
    {
        question: "Which city of Pakistan held the OIC Conference in 1997?",
        option1: "Lahore",
        option2: "Islamabad",
        option3: "Karachi",
        option4: "Peshawar",
        answer: "Islamabad",
    },
    {
        question: "In which year was OIC founded?",
        option1: "1970",
        option2: "1975",
        option3: "1980",
        option4: "1969",
        answer: "1969",
    },
    {
        question: "The Kargil incident happened in?",
        option1: "1998",
        option2: "1997",
        option3: "1999",
        option4: "2000",
        answer: "1999",
    },
    {
        question: "Which country assisted Pakistan in the construction of Sandak Project?",
        option1: "Iran",
        option2: "Saudi Arabia",
        option3: "Afghanistan",
        option4: "China",
        answer: "China",
    }
];

// var answer = document.getElementById("answer");
// var next = document.getElementById("next-btn");

var index = 0;
var score = 0;

function loadQuestion() {
    var quiz = document.getElementById("qna");
    var options = document.getElementsByName("option");
    var scores = document.getElementById("scores")
    var nextButton = document.getElementById("next-btn")
    for (var i = 0; i < options.length; i++) {
        if (options[i].checked) {
            if (options[i].value === questions[index - 1].answer) {
                score++
            }
        }
    }

    if (!questions[index]) {
        scores.style.display = "block"
        quiz.style.display = "none"
        if (score > 5) {
            scores.innerHTML = `
            <h4 class="score-card"> Well Played! <br> You Scored ${score / 10 * 100}% </h4>
            <i class="fa-solid fa-trophy"></i>`
            nextButton.innerHTML = 'Play Again'
        }
        if (score <= 5) {
            scores.innerHTML = `
            <h4 class="score-card"> Better Luck Next Time! <br> You Scored ${score / 10 * 100}% </h4>
            <i class="fa-solid fa-face-frown-open"></i>`
            nextButton.innerHTML = 'Play Again'
        }
    } else {
        nextButton.innerHTML = 'Next'
    }


    // if (!questions[index]) {
    //     score.innerHTML = `
    //     You Scored ${score}/10`
    //     console.log("Result " + score / 10 * 100 + "%");
    //     return;
    // }


    quiz.innerHTML = `
    <h2 id="question">${questions[index].question}</h2>
        <div id="answer" class="answer">
        <label class="ans-btn" for="option1"><input id="option1" type="radio" name="option" value="${questions[index].option1}" onclick="highlightSelected(this)" > ${questions[index].option1}</label>
        <label class="ans-btn" for="option2"><input id="option2" type="radio" name="option" value="${questions[index].option2}" onclick="highlightSelected(this)" > ${questions[index].option2}</label>
        <label class="ans-btn" for="option3"><input id="option3" type="radio" name="option" value="${questions[index].option3}" onclick="highlightSelected(this)" > ${questions[index].option3}</label>
        <label class="ans-btn" for="option4"><input id="option4" type="radio" name="option" value="${questions[index].option4}" onclick="highlightSelected(this)" > ${questions[index].option4}</label>  
        </div>`
    index++
}

// Function to highlight the selected label
function highlightSelected(radio) {
    // Remove the 'selected' class from all labels
    var labels = document.querySelectorAll('.ans-btn');
    labels.forEach(function (label) {
        label.classList.remove('selected');
    });

    // Add the 'selected' class to the label of the checked radio input
    var selectedLabel = document.querySelector('label[for="' + radio.id + '"]');
    if (selectedLabel) {
        selectedLabel.classList.add('selected');
    }
}


loadQuestion()