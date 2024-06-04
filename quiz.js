var questions = [
    {
        question: "Who inaugurated the State Bank of Pakistan?",
        answers: [
            { text: "Quaid-e-Azam", correct: "true" },
            { text: "Malik Ghulam Muhammad", correct: "false" },
            { text: "Liaquat Ali Khan", correct: "false" },
            { text: "Allama Muhammad Iqbal", correct: "false" },
        ]
    },
    {
        question: "Sardar Abdur Rub Nishtar was the Governor of?",
        answers: [
            { text: "Gilgit Baltistan", correct: "false" },
            { text: "KPK", correct: "false" },
            { text: "Punjab", correct: "true" },
            { text: "Sindh", correct: "false" },
        ]
    },
    {
        question: "National code of Pakistan is?",
        answers: [
            { text: "PAK", correct: "false" },
            { text: "PK", correct: "true" },
            { text: "PAK 1", correct: "false" },
            { text: "None of them", correct: "false" },
        ]
    },
    {
        question: "Where is Warsak Dam of Pakistan situated?",
        answers: [
            { text: "Khyber Pakhtunkhwa", correct: "true" },
            { text: "Punjab", correct: "false" },
            { text: "Sindh", correct: "false" },
            { text: "Balochistan", correct: "false" },
        ]
    },
    {
        question: "Shakarparrian is situated in?",
        answers: [
            { text: "Islamabad", correct: "true" },
            { text: "Rawalpindi", correct: "false" },
            { text: "Murree", correct: "false" },
            { text: "Peshawar", correct: "false" },
        ]
    },
    {
        question: "Identify the largest cantonment of Pakistan?",
        answers: [
            { text: "Kharian Cantt", correct: "true" },
            { text: "Quetta Cantt", correct: "false" },
            { text: "Okara Cantt", correct: "false" },
            { text: "Karachi Cantt", correct: "false" },
        ]
    },
    {
        question: "Which city of Pakistan held the OIC Conference in 1997?",
        answers: [
            { text: "Lahore", correct: "false" },
            { text: "Islamabad", correct: "true" },
            { text: "Karachi", correct: "false" },
            { text: "Peshawar", correct: "false" },
        ]
    },
    {
        question: "In which year was OIC founded?",
        answers: [
            { text: "1970", correct: "false" },
            { text: "1975", correct: "false" },
            { text: "1980", correct: "false" },
            { text: "1969", correct: "true" },
        ]
    },
    {
        question: "The Kargil incident happened in?",
        answers: [
            { text: "1998", correct: "false" },
            { text: "1997", correct: "false" },
            { text: "1999", correct: "true" },
            { text: "2000", correct: "false" },
        ]
    },
    {
        question: "Which country assisted Pakistan in the construction of Sandak Project?",
        answers: [
            { text: "Iran", correct: "false" },
            { text: "Saudi Arabia", correct: "false" },
            { text: "Afghanistan", correct: "false" },
            { text: "China", correct: "true" },
        ]
    }
];

var question = document.getElementById ("question");
var answer = document.getElementById ("answer");
var next = document.getElementById ("next-btn");
