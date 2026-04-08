const questions = [
    {
        question: "Identifique a Fibra Colágeno",
        image: "imagens/3.png",
        answers: [
            { id: 1, text: "A", correct:true},
            { id: 2, text: "B", correct:false},
            { id: 3, text: "C", correct:false},
            { id: 4, text: "D", correct:false},
            { id: 5, text: "E", correct:false},
        ]
    },

    {
        question: "Identifique o Tecido conjuntivo denso não modelado",
        image: "imagens/1.png",
        answers: [
            { id: 1, text: "A", correct:false},
            { id: 2, text: "B", correct:false},
            { id: 3, text: "C", correct:true},
        ]
    },

    {
        question: "4. Da onde é essa imagem?",
        image: "imagens/7.png",
        answers: [
            { id: 1, text: "Tecido conjuntivo denso não modelado", correct:false},
            { id: 2, text: "Plasmócito", correct:false},
            { id: 3, text: "Fibra Elástica", correct:false},
            { id: 4, text: "Tendão", correct:true},
        ]
    },

    {
        question: "Endósteo",
        image: "imagens/14.png ",
        answers: [
            { id: 1, text: "A", correct:false},
            { id: 2, text: "B", correct:true},
            { id: 3, text: "C", correct:false},
            { id: 4, text: "D", correct:false},
            { id: 5, text: "E", correct:false},
        ]
    },

    {
        question: "Fibra Elástica  ",
        image: "imagens/3.png",
        answers: [
            { id: 1, text: "A", correct:false},
            { id: 2, text: "B", correct:false},
            { id: 3, text: "C", correct:true},
            { id: 4, text: "D", correct:false},
            { id: 5, text: "E", correct:false},
        ]
    },
    {
        question: "Fibroblasto ",
        image: "imagens/3.png",
        answers: [
            { id: 1, text: "A", correct:false},
            { id: 2, text: "B", correct:true},
            { id: 3, text: "C", correct:false},
            { id: 4, text: "D", correct:false},
            { id: 5, text: "E", correct:false},
        ]
    },
    {
        question: "Os riscos azuis são?",
        image: "imagens/10.png",
        answers: [
            { id: 1, text: "Medula Óssea", correct:false},
            { id: 2, text: "Lamela Óssea", correct:true},
            { id: 3, text: "Canalículo Ósseo", correct:false},
            { id: 4, text: "Matriz Óssea", correct:false},
        ]
    },
    {
        question: "Osteócito ",
        image: "imagens/12.png  ",
        answers: [
            { id: 1, text: "A", correct:false},
            { id: 2, text: "B", correct:true},
            { id: 3, text: "C", correct:false},
            { id: 4, text: "D", correct:false},
        ]
    },
    {
        question: "Mastócito ",
        image: "imagens/3.png",
        answers: [
            { id: 1, text: "A", correct:false},
            { id: 2, text: "B", correct:false},
            { id: 3, text: "C", correct:false},
            { id: 4, text: "D", correct:true},
            { id: 5, text: "E", correct:false},
        ]
    },
    {
        question: "Tecido Conjuntivo Frouxo ",
        image: "imagens/1.png",
        answers: [
            { id: 1, text: "A", correct:false},
            { id: 2, text: "B", correct:true},
            { id: 3, text: "C", correct:false}, 
        ]
    },
    {
        question: "Matriz Óssea",
        image: "imagens/12.png",
        answers: [
            { id: 1, text: "A", correct:false},
            { id: 2, text: "B", correct:false},
            { id: 3, text: "C", correct:false},
            { id: 4, text: "D", correct:true},
        ]
    },
    {
        question: " Osteoclasto",
        image: "imagens/12.png",
        answers: [
            { id: 1, text: "A", correct:true},
            { id: 2, text: "B", correct:false},
            { id: 3, text: "C", correct:false},
            { id: 4, text: "D", correct:false},
        ]
    },
    {
        question: " Da onde é essa imagem?",
        image: "imagens/13.png",
        answers: [
            { id: 1, text: "Tendão", correct:false},
            { id: 2, text: "Fibra Elástica", correct:false},
            { id: 3, text: "Músculo", correct:true},
            { id: 4, text: "Fibroplasto", correct:false},
        ]
    },
    {
        question: "Epitélio estratificado pavimentoso queratinizaddo",
        image: "imagens/6.png",
        answers: [
            { id: 1, text: "A", correct:false},
            { id: 2, text: "B", correct:true},
            { id: 3, text: "C", correct:false},

        ]
    },
    {
        question: " Macrófago ",
        image: "imagens/2.png ",
        answers: [
            { id: 1, text: "A", correct:true},
            { id: 2, text: "B", correct:false},
            { id: 3, text: "C", correct:false},
            { id: 4, text: "D", correct:false},
        ]
    },
    {
        question: "Epitélio Simples Colunar",
        image: "imagens/4.png",
        answers: [
            { id: 1, text: "A", correct:false},
            { id: 2, text: "B", correct:true},
            { id: 3, text: "C", correct:false},
        ]
    },
    {
        question: "Sistema de Havers",
        image: "imagens/9.png",
        answers: [
            { id: 1, text: "A", correct:false},
            { id: 2, text: "B", correct:true},
        ]
    },
    {
        question: "Vaso sanguíneo ",
        image: "imagens/3.png ",
        answers: [
            { id: 1, text: "A", correct:false},
            { id: 2, text: "B", correct:false},
            { id: 3, text: "C", correct:false},
            { id: 4, text: "D", correct:false},
            { id: 5, text: "E", correct:true},
        ]
    },
    {
        question: " Osteoplasto",
        image: "imagens/8.png ",
        answers: [
            { id: 1, text: "A", correct:true},
            { id: 2, text: "B", correct:false},
        ]
    },
    {
        question: " Célula Caliciforme ",
        image: "imagens/4.png ",
        answers: [
            { id: 1, text: "A", correct:true},
            { id: 2, text: "B", correct:false},
            { id: 3, text: "C", correct:false},
        ]
    },
    {
        question: "Canal de Havers ",
        image: "imagens/9.png",
        answers: [
            { id: 1, text: "A", correct:true},
            { id: 2, text: "B", correct:false},
        ]
    },
    {
        question: "Medula Óssea",
        image: "imagens/14.png",
        answers: [
            { id: 1, text: "A", correct:false},
            { id: 2, text: "B", correct:false},
            { id: 3, text: "C", correct:false},
            { id: 4, text: "D", correct:false},
            { id: 5, text: "E", correct:true},
        ]
    },
    {
        question: "Canalículo Ósseo",
        image: "imagens/8.png ",
        answers: [
            { id: 1, text: "A", correct:false},
            { id: 2, text: "B", correct:true},
        ]
    },
    {
        question: "Plasmócito ",
        image: "imagens/5.png ",
        answers: [
            { id: 1, text: "A", correct:true},
            { id: 2, text: "B", correct:false},
            { id: 3, text: "C", correct:false},
        ]
    },
    {
        question: "Osteoblasto",
        image: "imagens/12.png",
        answers: [
            { id: 1, text: "A", correct:false},
            { id: 2, text: "B", correct:false},
            { id: 3, text: "C", correct:true},
            { id: 4, text: "D", correct:false},
        ]
    },

];

const modal = document.getElementById("image-modal");
const modalImg = document.getElementById("modal-img");
const closeModal = document.getElementById("close-modal");

const questionImage = document.getElementById("question-image");
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionsIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionsIndex = 0;
    score = 0;
    nextButton.innerHTML = "Próxima";
    showQuestion();
}

function resetState() { 
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function showQuestion() {
    resetState();

    let currentQuestion = questions[currentQuestionsIndex];
    let questionNo = currentQuestionsIndex + 1;

    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    //IMAGEM
    if (currentQuestion.image) {
        questionImage.src = currentQuestion.image;
        questionImage.style.display = "block";
    } else {
        questionImage.style.display = "none";
    }

    questionImage.onclick = function() {
    modal.style.display = "block";
    modalImg.src = this.src;
    }
    closeModal.onclick = function() {
    modal.style.display = "none";
    }

    // fechar clicando fora da imagem
    modal.onclick = function(e) {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    }


    currentQuestion.answers.forEach((answer) => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.dataset.id = answer.id;
        button.classList.add("btn");
        button.addEventListener("click", selectAnswer);
        answerButtons.appendChild(button);
    });
}

function selectAnswer(e) {
    answer = questions[currentQuestionsIndex].answers;
    const correctAnswer = answer.filter((answer) => answer.correct == true)[0];

    const selectBtn = e.target;
    const isCorrect = selectBtn.dataset.id == correctAnswer.id;
    if (isCorrect) {
        selectBtn.classList.add("correct");
        score++;
    } else {
        selectBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach((button) => {
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore() {
    resetState();
    questionElement.innerHTML = `Você acertou ${score} de ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton() {
    currentQuestionsIndex++;
    if (currentQuestionsIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if (currentQuestionsIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
})

startQuiz();
