const startBtn = document.querySelector('.btn');
const popupInfo = document.querySelector('.popup-info');
const exitBtn = document.querySelector('.exit-btn');
const main = document.querySelector('.main');
const continueBtn = document.querySelector('.continue-btn');
const quizSection = document.querySelector('.quiz-section');
const quizBox = document.querySelector('.quiz-box');
const resultBox = document.querySelector('.result-box');
const tryAgainBtn = document.querySelector('.tryAgain-btn');
const goHomeBtn = document.querySelector('.goHome-btn');
const nextBtn = document.querySelector('.next-btn');



let questionCount = 0;
let questionNumb = 1;
let userScore = 0;

startBtn.onclick = () => {
    popupInfo.classList.add('active');
    main.classList.add('active');
}

exitBtn.onclick = () => {
    popupInfo.classList.remove('active');
    main.classList.remove('active');
}

continueBtn.onclick = () => {
    quizSection.classList.add('active');
    popupInfo.classList.remove('active');
    main.classList.remove('active');
    quizBox.classList.add('active');

    showQuestions(questionCount);
    questionCounter(questionNumb);
   
}

tryAgainBtn.onclick = () => {
    quizBox.classList.add('active');
    nextBtn.classList.remove('active');
    resultBox.classList.remove('active');

    questionCount = 0;
    questionNumb = 1;
    userScore = 0;

    showQuestions(questionCount);
    questionCounter(questionNumb);
    
}

goHomeBtn.onclick = () => {
    quizSection.classList.remove('active');
    nextBtn.classList.remove('active');
    resultBox.classList.remove('active');

    questionCount = 0;
    questionNumb = 1;
    userScore = 0;

    showQuestions(questionCount);
    questionCounter(questionNumb);
}





nextBtn.onclick = () => {
    if (questionCount < questions.length - 1) {
        questionCount++;
        showQuestions(questionCount);
        questionNumb++;
        questionCounter(questionNumb);
    } else {
        showResultBox();
    }
}

const optionList = document.querySelector('.option-list');

function showQuestions(index) {
    const questionText = document.querySelector('.question-text');
    questionText.textContent = `${questions[index].numb}. ${questions[index].question}`;

    let optionTag = '';
    for (let i = 0; i < questions[index].options.length; i++) {
        optionTag += `<div class="option" data-index="${i}"><span>${questions[index].options[i].text}</span></div>`;
    }

    optionList.innerHTML = optionTag;

    const option = document.querySelectorAll('.option');
    option.forEach(opt => opt.addEventListener('click', () => optionSelected(opt)));
}

function optionSelected(answer) {
    let userAnswer = answer.textContent;
    let correctAnswer = questions[questionCount].options.find(option => option.text === userAnswer);
    let allOptions = optionList.children.length;

    if (correctAnswer.score > 0) {
        answer.classList.add('correct');
        userScore += correctAnswer.score;
    } else {
        answer.classList.add('incorrect');
    }

    for (let i = 0; i < allOptions; i++) {
        optionList.children[i].classList.add('disabled');
    }
    nextBtn.classList.add('active');
}

function questionCounter(index) {
    const questionTotal = document.querySelector('.question-total');
    questionTotal.textContent = `${index} of ${questions.length} Questions`;
}


function showResultBox() {
    quizBox.classList.remove('active');
    resultBox.classList.add('active');

    const scoreText = document.querySelector('.score-text');
    scoreText.textContent = `Your Score ${userScore} out of ${questions.length * 4}`;

    const circularProgress = document.querySelector('.circular-progress');
    const progressValue = document.querySelector('.progress-value');
    let progressEndValue = Math.min((userScore / (questions.length * 4)) * 100, 100);
    let speed = 20;
    let progressStartValue = 0;

    let progress = setInterval(() => {
        progressStartValue++;
        progressValue.textContent = `${progressStartValue}%`;
        circularProgress.style.background = `conic-gradient(#ef7caf ${progressStartValue * 3.6}deg, rgba(27, 66, 238, 0.1) 0deg)`;

        if (progressStartValue >= progressEndValue) {
            clearInterval(progress);
        }
    }, speed);

    // Determine the user's stress level
    let stressLevel = "Low"; // Default to low

    if (userScore >= 14 && userScore <= 26) {
        stressLevel = "Moderate";
    } else if (userScore > 26) {
        stressLevel = "High";
    }

    // Update the text
    const stressLevelText = document.querySelector('.stress-level span');
    stressLevelText.textContent = `Your Stress Level: ${stressLevel}`;

    stressLevelText.parentElement.classList.add(stressLevel.toLowerCase());
}


    

function showSolution() {
    var stressLevel = "low"; // Default to low

    if (userScore >= 14 && userScore <= 26) {
        stressLevel = "moderate";
    } else if (userScore > 26) {
        stressLevel = "high";
    }

    var solutionContent = document.getElementById('solutionContent');

    if (stressLevel === 'low') {
        solutionContent.style.display = 'block';
        document.body.classList.add('solution-background-blue');
    } else {
        solutionContent.style.display = 'none';
        document.body.classList.remove('solution-background-blue');
    }
    var solutionsContent = document.getElementById('solutionsContent');

    if (stressLevel === 'moderate') {
        solutionsContent.style.display = 'block';
        document.body.classList.add('solutions-background-blue');
    } else {
        solutionsContent.style.display = 'none';
        document.body.classList.remove('solutions-background-blue');
    }

    var solutionhContent = document.getElementById('solutionhContent');

    if (stressLevel === 'high') {
        solutionhContent.style.display = 'block';
        document.body.classList.add('solutionh-background-blue');
    } else {
        solutionhContent.style.display = 'none';
        document.body.classList.remove('solutionh-background-blue');
    }

}
    function breathingExercise() { 
        console.log('Button clicked!');
        var breathingContent = document.getElementById('breathingContent');
    
        // Check if the initial state is not set or is set to "none"
        if (!breathingContent.style.display || breathingContent.style.display === 'none') {
            breathingContent.style.display = 'block';
        } else {
            breathingContent.style.display = 'none';
        }
    }


    function playSquareBreathingVideo() {
        var playSquareBreathingVideo = document.getElementById('playSquareBreathingVideo');
        
        // Show the video element
        playSquareBreathingVideo.style.display = 'block';
    
        // Play the video
        playSquareBreathingVideo.play();
    }
    function play478BreathingVideo() {
        var play478BreathingVideo = document.getElementById('play478BreathingVideo');
        
        // Show the video element
        play478BreathingVideo.style.display = 'block';
    
        // Play the video
        play478BreathingVideo.play();
    }
function meditation() { 
     
        console.log('Button clicked!');
        var meditationContent = document.getElementById('meditationContent');
    
        // Check if the initial state is not set or is set to "none"
        if (!meditationContent.style.display || meditationContent.style.display === 'none') {
            meditationContent.style.display = 'block';
        } else {
            meditationContent.style.display = 'none';
        }
    }

function healthyDiet() { 
    console.log('Button clicked!');
    var healthyDietContent = document.getElementById('healthyDietContent');

    // Check if the initial state is not set or is set to "none"
    if (!healthyDietContent.style.display || healthyDietContent.style.display === 'none') {
        healthyDietContent.style.display = 'block';
    } else {
        healthyDietContent.style.display = 'none';
    }
}
function relaxationMusic(){
    console.log('Button clicked!');
    var relaxationMusicContent = document.getElementById('relaxationMusicContent');

    // Check if the initial state is not set or is set to "none"
    if (!relaxationMusicContent.style.display || relaxationMusicContent.style.display === 'none') {
        relaxationMusicContent.style.display = 'block';
    } else {
        relaxationMusicContent.style.display = 'none';
    }

}

 
