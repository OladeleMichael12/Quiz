const questions = [
    {
      question: "As part of his miracle, Jesus fed the multitude with___.?",
      answer: [
        {
          text: "Bread",
          correct: false,
        },
        {
          text: "A fatted calf",
          correct: false,
        },
        {
          text: "Loaves of bread and fishes",
          correct: true,
        },
        {
          text: "Pizza",
          correct: false,
        },
      ],
    },
  
    {
      question: "Whose voice was heard when Jesus came up out of the water?",
      answer: [
        {
          text: "Jonah",
          correct: true,
        },
        {
          text: "Moses",
          correct: false,
        },
        {
          text: "God",
          correct: false,
        },
        {
          text: "Mary",
          correct: false,
        },
      ],
    },
  
    {
      question: "When establishing convenant with Abram, God changes Abram's name to___",
      answer: [
        {
          text: "Isaac",
          correct: false,
        },
        {
          text: "Jacob",
          correct: false,
        },
        {
          text: "Joseph",
          correct: false,
        },
        {
          text: "None of the above",
          correct: true,
        },
      ],
    },
  
    {
      question: "According to Isaiah 26:4, what is the Lord?",
      answer: [
        {
          text: "Rock",
          correct: true,
        },
        {
          text: "Rock star",
          correct: false,
        },
        {
          text: "Rocket scientist",
          correct: false,
        },
        {
          text: "Rocking hore maker",
          correct: false,
        },
      ],
    },
  ];
  
  // SETTING THE VARIABLES
  
  const questionElement = document.getElementById("question");
  const answerButtons = document.getElementById("answer-button");
  const nextButton = document.getElementById("next-btn");
  
  let currentQuestionIndex = 0; // current index
  let score = 0; //LETING THE OVERALL SCORE BE 0 AT THE START OF THE QUIZ
  
  function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
  }
  // FUNCTION TO REVEAL THE QUESTIONS AND THE INDEX IN THE ARRAY
  function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + "." + currentQuestion.question;
  
    currentQuestion.answer.forEach((answer) => {
      const button = document.createElement("button");
      button.innerHTML = answer.text;
      button.classList.add("btn");
      answerButtons.appendChild(button);
      if (answer.correct) {
        button.dataset.correct = answer.correct;
      }
      button.addEventListener("click", selectAnswer);
    });
  }
  
  function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
      answerButtons.removeChild(answerButtons.firstChild);
    }
  }
  
  function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
      selectedBtn.classList.add("correct");
      score++;
    } else {
      selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach((button) => {
      if (button.dataset.correct === "true") {
        button.classList.add("correct");
      }
      button.disabled = true;
    });
  
    nextButton.style.display = "block";
  }
  
  function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}! Great job!`;
    nextButton.innerHTML = "Try again!";
    nextButton.style.display = "block";
  }
  
  function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      showQuestion();
    } else {
      showScore();
    }
  }
  
  // THE NEXT BUTTON FUNCTION TO SHOW THE NEXT QUESTION
  nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
      handleNextButton();
    } else {
      startQuiz();
    }
  });
  
  startQuiz();