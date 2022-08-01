
// Don't touch the below code

(function() {
  function buildQuiz() {
    // we'll need a place to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // we'll want to store the list of answer choices
      const answers = [];

      // and for each available answer...
      for (letter in currentQuestion.answers) {
        // ...add an HTML radio button
        answers.push(
          `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
        );
      }

      // add this question and its answers to the output
      output.push(
        `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join("")} </div>`
      );
    });

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join("");
  }

  function showResults() {
    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll(".answers");

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if (userAnswer === currentQuestion.correctAnswer) {
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        //answerContainers[questionNumber].style.color = "lightgreen";
      } else {
        // if answer is wrong or blank
        // color the answers red
        answerContainers[questionNumber].style.color = "red";
      }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");


// Don't touch the above code




// Write your MCQs here --- Start --- --------------------

  const myQuestions = [
    {
      question: "In Delta modulation,",
      answers: {
        a: "One bit per sample is transmitted",
        b: "All the coded bits used for sampling are transmitted",
        c: "The step size is fixed",
        d: "Both a) and c) are correct"
      },
      correctAnswer: "d"
    },
    {
      question: "Which type of modulation technique requires minimum bandwidth in digital transmission?",
      answers: {
        a: "Delta modulation",
        b: "Pulse Code Modulation",
        c: "Differential Pulse Code Modulation",
        d: "Pulse Amplitude Modulation"
      },
      correctAnswer: "a"
    },
    {
      question: "Bit rate of Delta Modulation is_______________",
      answers: {
        a: "N times the sampling frequency",
        b: "N times the modulating frequency",
        c: "N times the nyquist criteria",
        d: "None of the above"
      },
      correctAnswer: "a"
    },
    {
      question: "What type of conversion is involved in Delta modulation?",
      answers: {
        a: "Analog to digital",
        b: "Digital to analog",
        c: "Both A and B",
        d: "None of the mentioned"
      },
      correctAnswer: "c"
    },
    {
      question: "Pick the process used to achieve high signal to noise ratio (SNR) in delta modulation.",
      answers: {
        a: "Under sampling",
        b: "Over sampling",
        c: "Aliasing",
        d: "None of the mentioned"
      },
      correctAnswer: "b"
    } //Dont add comma here
  ];

// ---------------------------- End -------------------------------

  // display quiz right away
  buildQuiz();

  // on submit, show results
  submitButton.addEventListener("click", showResults);
})();
