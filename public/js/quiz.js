const quizSection = document.querySelector('.quiz-section');
const quizBox = document.querySelector('.quiz-box');
const nextBtn = document.querySelector('.next-btn');
const optionList = document.querySelector('.option-list');
const resultBox = document.querySelector('.result-box');
const tryAgainBtn = document.querySelector('.tryAgain-btn');
const goHomeBtn = document.querySelector('.goHome-btn');
const bookTitle = document.querySelector('.book-title')
const author = document.querySelector('.author')




const urlParams = new URLSearchParams(window.location.search);
const selectedGenre = urlParams.get('genreValue');

const genre = selectedGenre


const bookDetails =  [{
      "title": "The Enchanted Forest",
      "author": "Emily Smith"
    },
    {
        "title": "The Art of War",
        "author": "Sun Tzu"
    }
]


let nonfictionQuestions = [
    {
        "numb": 1,
        "question": "Who is the author of 'The Art of War'?",
        "answer": "B. Sun Tzu",
        "options": [
            "A. Confucius",
            "B. Sun Tzu",
            "C. Laozi",
            "D. Machiavelli"
        ]
    },
    {
        "numb": 2,
        "question": "What is the main subject of 'The Art of War'?",
        "answer": "C. Military Strategy",
        "options": [
            "A. Painting",
            "B. Philosophy",
            "C. Military Strategy",
            "D. Agriculture"
        ]
    },
    {
        "numb": 3,
        "question": "In which country was 'The Art of War' primarily written?",
        "answer": "A. China",
        "options": [
            "A. China",
            "B. Greece",
            "C. Italy",
            "D. Japan"
        ]
    },
    {
        "numb": 4,
        "question": "Approximately when was 'The Art of War' written?",
        "answer": "B. 5th century BC",
        "options": [
            "A. 1st century AD",
            "B. 5th century BC",
            "C. 15th century",
            "D. 18th century"
        ]
    },
    {
        "numb": 5,
        "question": "'The Art of War' is typically attributed to which historical figure?",
        "answer": "A. Sun Tzu",
        "options": [
            "A. Sun Tzu",
            "B. Confucius",
            "C. Genghis Khan",
            "D. Alexander the Great"
        ]
    },
    {
        "numb": 6,
        "question": "Which of the following is a theme in 'The Art of War'?",
        "answer": "D. Deception",
        "options": [
            "A. Love",
            "B. Friendship",
            "C. Family",
            "D. Deception"
        ]
    },
    {
        "numb": 7,
        "question": "'The Art of War' emphasizes the importance of which of the following?",
        "answer": "C. Intelligence and Espionage",
        "options": [
            "A. Brute Force",
            "B. Superior Numbers",
            "C. Intelligence and Espionage",
            "D. Fortification"
        ]
    },
    {
        "numb": 8,
        "question": "In 'The Art of War', what does Sun Tzu say about engaging in battle?",
        "answer": "B. Only engage in battle if victory is assured",
        "options": [
            "A. Always avoid battle",
            "B. Only engage in battle if victory is assured",
            "C. Always seek battle",
            "D. Battle is inconsequential"
        ]
    },
    {
        "numb": 9,
        "question": "How many chapters are there in 'The Art of War'?",
        "answer": "C. 13",
        "options": [
            "A. 5",
            "B. 10",
            "C. 13",
            "D. 20"
        ]
    },
    {
        "numb": 10,
        "question": "Which of the following principles is NOT advocated by 'The Art of War'?",
        "answer": "A. Relying on luck and chance",
        "options": [
            "A. Relying on luck and chance",
            "B. Adapting to circumstances",
            "C. Using spies",
            "D. Knowing oneself and the enemy"
        ]
    }
]

  
let fictionQuestions = [
    {
      "numb": 1,
      "question": "What is the name of the main character in 'The Enchanted Forest'?",
      "answer": "C. Alice",
      "options": ["A. Emma", "B. Sarah", "C. Alice", "D. Laura"]
    },
    {
      "numb": 2,
      "question": "What is the mystical object that leads Alice into the enchanted forest?",
      "answer": "B. A glowing amulet",
      "options": ["A. A magical book", "B. A glowing amulet", "C. A secret map", "D. A talking bird"]
    },
    {
      "numb": 3,
      "question": "Who is Alice's loyal companion in her journey through the enchanted forest?",
      "answer": "D. A mischievous gnome named Gus",
      "options": ["A. A wise old owl", "B. A friendly dragon", "C. A mysterious sorceress", "D. A mischievous gnome named Gus"]
    },
    {
      "numb": 4,
      "question": "What is the ultimate goal of Alice's quest in 'The Enchanted Forest'?",
      "answer": "A. To save her village from a curse",
      "options": ["A. To save her village from a curse", "B. To find hidden treasure", "C. To become the ruler of the forest", "D. To capture a legendary beast"]
    },
    {
      "numb": 5,
      "question": "Which mythical creature serves as the main antagonist in the novel?",
      "answer": "C. The malevolent Shadow Serpent",
      "options": ["A. The friendly Tree Guardians", "B. The playful River Sprites", "C. The malevolent Shadow Serpent", "D. The wise Forest Elders"]
    },
    {
      "numb": 6,
      "question": "In which season does most of the story in 'The Enchanted Forest' take place?",
      "answer": "B. Winter",
      "options": ["A. Spring", "B. Winter", "C. Summer", "D. Autumn"]
    },
    {
      "numb": 7,
      "question": "What power does Alice discover she possesses during her journey?",
      "answer": "D. The ability to communicate with animals",
      "options": ["A. Invisibility", "B. Telekinesis", "C. Time travel", "D. The ability to communicate with animals"]
    },
    {
      "numb": 8,
      "question": "What is the name of the ancient spell that can defeat the Shadow Serpent?",
      "answer": "A. The Song of Light",
      "options": ["A. The Song of Light", "B. The Whispering Wind", "C. The Thunderclap Incantation", "D. The Silent Night Ritual"]
    },
    {
      "numb": 9,
      "question": "Which character in the story is secretly a double agent working for the Shadow Serpent?",
      "answer": "B. The enigmatic sorceress, Selena",
      "options": ["A. Alice's best friend, Emily", "B. The enigmatic sorceress, Selena", "C. Gus the gnome", "D. The wise old owl"]
    },
    {
      "numb": 10,
      "question": "What is the final line of the novel?",
      "answer": "C. And they lived happily ever after, in the heart of the Enchanted Forest.",
      "options": ["A. The adventure continues...", "B. To be continued...", "C. And they lived happily ever after, in the heart of the Enchanted Forest.", "D. The end."]
    }
  ]
  
function loadJson() {
    let jsonData;
    if (selectedGenre === 'fiction') {
        jsonData = fictionQuestions;
    } else if (selectedGenre === 'Non-Fiction') {
        jsonData = nonfictionQuestions;
    }

    // Return the loaded JSON data
    return jsonData;
}

const questions =  loadJson();
let questionCount = 0;
let questionNumb = 1;
let userScore = 0;

// loads on page
window.onload = () => {
    if(selectedGenre == 'fiction'){
        bookTitle.textContent = bookDetails[0].title
        author.textContent = `Author: ${bookDetails[0].author}`
    } else {
        bookTitle.textContent = bookDetails[1].title
        author.textContent = `Author: ${bookDetails[1].author}`
    }
    
    showQuestions(0);
    questionCounter(1);
    headerScore();
}

// next question button
nextBtn.addEventListener('click', () => {
    if (questionCount < questions.length -1) {
        questionCount++;
        showQuestions(questionCount);

        questionNumb++;
        questionCounter(questionNumb);

        nextBtn.classList.remove('active');
    } else {
        showResultBox();
    }
    
})

tryAgainBtn.addEventListener('click', () => {
    quizBox.classList.remove('active')
    nextBtn.classList.remove('active')
    resultBox.classList.remove('active')

    questionCount = 0;
    questionNumb = 1;
    userScore = 0;
    showQuestions(questionCount);
    questionCounter(questionNumb);

    headerScore();
})

goHomeBtn.addEventListener('click', () => {
    window.location.href = 'index.html';
})

// Display questions
const showQuestions = (index) => {
    const questionText = document.querySelector('.question-text');
    questionText.textContent = `${questions[index].numb}. ${questions[index].question}`;

    let optionTag = `<div class="option"><span>${questions[index].options[0]}</span></div>
        <div class="option"><span>${questions[index].options[1]}</span></div>
        <div class="option"><span>${questions[index].options[2]}</span></div>
        <div class="option"><span>${questions[index].options[3]}</span></div>`;

    optionList.innerHTML = optionTag;

    const option = document.querySelectorAll('.option');
    for (let i = 0; i < option.length; i++) {
        option[i].setAttribute('onclick', 'optionSelected(this)');
    }
}


const optionSelected = (answer) => {
    let userAnswer = answer.textContent;
    let correctAnswer = questions[questionCount].answer;
    let allOptions = optionList.children.length;
    
    // checking for correct answer
    if (userAnswer == correctAnswer) {
        answer.classList.add('correct');
        userScore += 1;
        headerScore();
    } else {
        answer.classList.add('incorrect');

        // if answer incorrect, auto selected correct answer
        for (let i =0; i < allOptions; i++){
            if (optionList.children[i].textContent == correctAnswer){
                optionList.children[i].setAttribute('class', 'option correct');
            }
        }
    }

    // if user has selected, disabled all option
    for (let i = 0; i < allOptions; i++){
        optionList.children[i].classList.add('disabled')
    }

    nextBtn.classList.add('active');
}

// counts the number of questions
const questionCounter = (index) => {
    const questionTotal = document.querySelector('.question-total');
    questionTotal.textContent = `${index} of ${questions.length} Questions`
}

// update user scores
const headerScore = () => {
    const headerScoreText = document.querySelector('.header-score');
    headerScoreText.textContent = `Score: ${userScore} / ${questions.length}`;
}

const showResultBox = () => {
    quizBox.classList.add('active');
    resultBox.classList.add('active');

    const scoreText = document.querySelector('.score-text');
    scoreText.textContent = `You Score ${userScore} out of ${questions.length}`;

    const circularProgress = document.querySelector('.circular-progress');
    const ProgressValue = document.querySelector('.progress-value');

    let progressStartValue = -1;
    let progressEndValue = (userScore / questions.length) * 100;
    let speed = 20;

    let progress = setInterval(() => {
        progressStartValue++;
        ProgressValue.textContent = `${progressStartValue}%`;

        circularProgress.style.background = `conic-gradient(#606c38 ${progressStartValue * 3.5}deg, rgba(255, 255, 255, .1) 0deg)`;
        if (progressStartValue == progressEndValue){
            clearInterval(progress);
        }
    }, speed);
}

