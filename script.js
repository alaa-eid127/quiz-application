//Data
const quizData = [
    {
        question: "what is the capital of Egypt?",
        a: 'cairo',
        b: 'alexandria',
        c: 'london',
        d: "paris",
        correct: "a"
    },
    {
        question: "what is the capital of england?",
        a: 'cairo',
        b: 'alexandria',
        c: 'london',
        d: "paris",
        correct: "c"
    }, {
        question: "what is the capital of france?",
        a: 'cairo',
        b: 'alexandria',
        c: 'london',
        d: "paris",
        correct: "d"
    }, {
        question: "what is the capital of u.s?",
        a: 'cairo',
        b: 'washington',
        c: 'london',
        d: "paris",
        correct: "b"
    }
];

//selecting elements in HTML DOM
const container = document.querySelector(".container")
const questionTitle = document.querySelector('.question_title');
const aText = document.querySelector('.a_text');
const bText = document.querySelector('.b_text');
const cText = document.querySelector('.c_text');
const dText = document.querySelector('.d_text');
const submitBtn = document.getElementById("submit_button");
const answer = document.getElementsByName('answer');

// global variables
let questionIndex = 0;
let choice = undefined;
let score = null;

// to intial loading
function quizLoad() {
    questionTitle.innerHTML = quizData[questionIndex].question;
    aText.innerHTML = quizData[questionIndex].a;
    bText.innerHTML = quizData[questionIndex].b;
    cText.innerHTML = quizData[questionIndex].c;
    dText.innerHTML = quizData[questionIndex].d;
}
quizLoad();

//add event listener to the submit button

submitBtn.addEventListener('click', () => {
    getSelected();
    const len = quizData.length;
    // to prevent the user from going directly to the score
    if (score !== null) {
        if (questionIndex < len - 1 && choice !== undefined) {
            deSelected()
            questionIndex++;
            quizLoad();
        } else {
            container.innerHTML = `<h3 class="result">your score is ${score} / ${len}</h3>`
        }
    }
})


/*function to determine which element the user 
clicked on and increase the score*/
function getSelected() {
    answer.forEach((ele) => {
        if (ele.checked) {
            choice = ele.id;
            if (choice == quizData[questionIndex].correct) {
                score++
            }
        }

    })
}
/*function to deselect the clicked button
 for going to next question without selection */
function deSelected() {
    answer.forEach((ele) => {
        if (ele.checked) {
            ele.checked = false;
        }
    })
}

