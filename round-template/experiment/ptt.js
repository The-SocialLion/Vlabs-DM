(function() {
    function QuizContent() {
      // we'll need a place to store the HTML output
      const output = [];
  
      // for each question...
      QuestionQueue.forEach((currentNo, questionNo) => {
        // we'll want to store the list of answer choices
        const answers = [];
  
        // and for each available answer...
        for (letter in currentNo.answers) {
          // ...add an HTML radio button
          answers.push(
            `<label>
              <input type="radio" name="question${questionNo}" value="${letter}">
              ${letter} :
              ${currentNo.answers[letter]}
            </label>`
          );
        }
  
        // add this question and its answers to the output
        output.push(
          `<div class="question"> ${currentNo.question} </div>
          <div class="answers"> ${answers.join("")} </div>`
        );
      });
  
      // finally combine our output list into one string of HTML and put it on the page
      McqContent.innerHTML = output.join("");
    }
  
    function resultWindow() {
      // All answers
      const answerContainers = McqContent.querySelectorAll(".answers");
  
      // user answers
      let correctCount = 0;
  
      // for each question...
      QuestionQueue.forEach((currentNo, questionNo) => {
        // find selected answer
        const answerContainer = answerContainers[questionNo];
        const selector = `input[name=question${questionNo}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;
  
        // if answer is correct
        if (userAnswer === currentNo.correctAnswer) {
          // add to the number of correct answers
          correctCount++;
  

          //answerContainers[questionNo].style.color = "lightgreen";
        } else {
          // answer is wrong or blank

          answerContainers[questionNo].style.color = "red";
        }
      });
  
      // show number of correct answers out of total
      resultContent.innerHTML = `${correctCount} out of ${QuestionQueue.length}`;
    }
  
    const McqContent = document.getElementById("MCQS");
    const resultContent = document.getElementById("result");
    const Submit = document.getElementById("submit");
  
  
  // Don't touch the above code
  
  
  
    const QuestionQueue = [
      {
        question: "In the Delta Modulation scheme the signal is sampled at a rate of 64kHz. The maximum amplitude is 2 Volts, and the bandwidth is 3.5 kHz. Find the step size required to avoid slope overload distortion.",
        answers: {
          A: "0.687V",
          B:	"0.894V",
          C:	"0.586V",
          D: "0.274V"
        },
        correctAnswer: "A"
      },
      {
        question: "In a DM scheme the signal is sampled at a rate of 64kHz. The maximum signal amplitude is 2V, and bandwidth is 3.5 kHz. Calculate the granular noise power.",
        answers: {
          A: "4.8 mW",
          B: "8.6 mW",
          C: "5.2 mW",
          D: "2.4 mW"
        },
        correctAnswer: "B"
      },
      {
        question: "A DM system is designed to operate at sampling frequency of 6 kHz and a step size of 350 mV. The maximum amplitude of input sinusoidal signal is 1kHz. Determine the output SNR.",
        answers: {
          A: "4.97 dB",
          B: "4.37 dB",
          C: "5.38 dB",
          D: "2.46 dB"
        },
        correctAnswer: "B"
      },
      {
        question: "Consider an analog signal xt=0.1*sin⁡(2*π*104*t) for a DM, the signal is sampled at a rate of 2*104Hz. Find whether the slope overload distortion occurs for the step size of 4 mV.",
        answers: {
          A: "Slope overload occurs",
          B: "Slope overload does not occur"
        },
        correctAnswer: "A"
      },
      {
        question: "Consider an analog signal xt=0.1*sin⁡(2*π*104*t) for a DM, the signal is sampled at a rate of 2*104Hz. Find whether the slope overload distortion occurs for the step size of 60 mV",
        answers: {
          A: "Slope overload occurs",
          B: "Slope overload does not occur"
        },
        correctAnswer: "A"
      }
    ];
  
  // ---------------------------- End -------------------------------
  
    // display quiz right away
    QuizContent();
  
    // on submit, show results
    Submit.addEventListener("click", resultWindow);
  })();