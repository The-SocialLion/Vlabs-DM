
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
      question: "In the Delta Modulation scheme the signal is sampled at a rate of 64kHz. The maximum amplitude is 2 Volts, and the bandwidth is 3.5 kHz. Find the step size required to avoid slope overload distortion.",
      answers: {
        a: "0.687V",
        b: "0.894V",
        c: "0.586V",
        d: "0.274V"
      },
      correctAnswer: "a"
    },
    {
      question: "In a DM scheme the signal is sampled at a rate of 64kHz. The maximum signal amplitude is 2V, and bandwidth is 3.5 kHz. Calculate the granular noise power.",
      answers: {
        a: "4.8 mW",
        b: "8.6 mW",
        c: "5.2 mW",
        d: "2.4 mW"
      },
      correctAnswer: "b"
    },
    {
      question: "A DM system is designed to operate at sampling frequency of 6 kHz and a step size of 350 mV. The maximum amplitude of input sinusoidal signal is 1kHz. Determine the output SNR.",
      answers: {
        a: "4.97 dB",
        b: "4.37 dB",
        c: "5.38 dB",
        d: "2.46 dB"
      },
      correctAnswer: "b"
    },
    {
      question: "Consider an analog signal xt=0.1*sin⁡(2*π*104*t) for a DM, the signal is sampled at a rate of 2*104Hz. Find whether the slope overload distortion occurs for the step size of 4 mV.",
      answers: {
        a: "Slope overload occurs",
        b: "Slope overload does not occur"
      },
      correctAnswer: "a"
    },
    {
      question: "Consider an analog signal xt=0.1*sin⁡(2*π*104*t) for a DM, the signal is sampled at a rate of 2*104Hz. Find whether the slope overload distortion occurs for the step size of 60 mV",
      answers: {
        a: "Slope overload occurs",
        b: "Slope overload does not occur"
      },
      correctAnswer: "a"
    } //Dont add comma here
  ];

// ---------------------------- End -------------------------------

  // display quiz right away
  buildQuiz();

  // on submit, show results
  submitButton.addEventListener("click", showResults);
})();
