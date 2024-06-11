const questions = [
    {
        question: "What is the capital of France?",
        choices: ["London", "Paris", "Berlin", "Madrid"],
        answer: "Paris"
    },
    {
        question: "Which planet is known as the Red Planet?",
        choices: ["Mars", "Venus", "Jupiter", "Saturn"],
        answer: "Mars"
    },
    {
        question: "Who wrote the play 'Hamlet'?",
        choices: ["William Shakespeare", "Jane Austen", "Charles Dickens", "F. Scott Fitzgerald"],
        answer: "William Shakespeare"
    },
    {
        question: "What is the chemical symbol for water?",
        choices: ["O", "H2O", "CO2", "NaCl"],
        answer: "H2O"
    },
    {
        question: "Who painted the Mona Lisa?",
        choices: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Michelangelo"],
        answer: "Leonardo da Vinci"
    },
    {
        question: "What is the largest mammal in the world?",
        choices: ["Elephant", "Blue whale", "Giraffe", "Gorilla"],
        answer: "Blue whale"
    },
    {
        question: "What is the tallest mountain in the world?",
        choices: ["Mount Everest", "K2", "Mount Kilimanjaro", "Mount McKinley"],
        answer: "Mount Everest"
    },
    {
        question: "What is the chemical symbol for gold?",
        choices: ["Au", "Ag", "Fe", "Cu"],
        answer: "Au"
    },
    {
        question: "Who wrote 'To Kill a Mockingbird'?",
        choices: ["Harper Lee", "Ernest Hemingway", "Mark Twain", "J.K. Rowling"],
        answer: "Harper Lee"
    },
    {
        question: "What is the chemical formula for table salt?",
        choices: ["HCl", "NaCl", "H2O", "CO2"],
        answer: "NaCl"
    },
    {
        question: "Who was the first person to step on the moon?",
        choices: ["Neil Armstrong", "Buzz Aldrin", "Yuri Gagarin", "John Glenn"],
        answer: "Neil Armstrong"
    },
    {
        question: "What is the chemical symbol for oxygen?",
        choices: ["O2", "CO", "H2O", "O"],
        answer: "O"
    },
    {
        question: "Who is known as the 'Father of Computers'?",
        choices: ["Bill Gates", "Steve Jobs", "Charles Babbage", "Alan Turing"],
        answer: "Charles Babbage"
    },
    {
        question: "What is the largest planet in our solar system?",
        choices: ["Earth", "Jupiter", "Mars", "Saturn"],
        answer: "Jupiter"
    },
    {
        question: "Who painted 'The Starry Night'?",
        choices: ["Leonardo da Vinci", "Pablo Picasso", "Vincent van Gogh", "Claude Monet"],
        answer: "Vincent van Gogh"
    }
];

const questionElement = document.getElementById("question");
const choicesElement = document.getElementById("choices");
const submitBtn = document.getElementById("submitBtn");
const resultElement = document.getElementById("result");

let currentQuestion = 0;
let score = 0;

function displayQuestion() {
    questionElement.textContent = questions[currentQuestion].question;
    choicesElement.innerHTML = "";
    questions[currentQuestion].choices.forEach(choice => {
        const btn = document.createElement("button");
        btn.textContent = choice;
        btn.classList.add("choice");
        btn.addEventListener("click", () => {
            checkAnswer(choice);
        });
        choicesElement.appendChild(btn);
    });
}

function checkAnswer(choice) {
    if (choice === questions[currentQuestion].answer) {
        score++;
    }
    currentQuestion++;
    if (currentQuestion < questions.length) {
        displayQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    questionElement.textContent = "";
    choicesElement.innerHTML = "";
    submitBtn.style.display = "none";
    resultElement.textContent = `Your score: ${score}/${questions.length}`;
}

displayQuestion();
