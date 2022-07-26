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
  
  
  
  
  // Write your MCQs here --- Start --- --------------------
  
    const QuestionQueue = [
      {
        question: "In Delta modulation,",
        answers: {
          A: "One bit per sample is transmitted",
          B: "All the coded bits used for sampling are transmitted",
          C: "The step size is fixed",
          D:"Both a) and c) are correct"
        },
        correctAnswer: "D"
      },
  
      {
        question: "Which type of modulation technique requires minimum bandwidth in digital transmission?",
        answers: {
          A: "Delta modulation",
          B: "Pulse Code Modulation",
          C: "Differential Pulse Code Modulation",
          D: "Pulse Amplitude Modulation"
        },
        correctAnswer: "A"
      },
  
      {
        question: "Bit rate of Delta Modulation is_______________",
        answers: {
            A : "N times the sampling frequency",
            B : "N times the modulating frequency",
            C : "N times the nyquist criteria",
            D:"None of the above"
        },
        correctAnswer: "A"
      },
      {
        question: "What type of conversion is involved in Delta modulation?",
        answers: {
            A: "Analog to digital",
            B :"Digital to analog",
            C:"Both A and B",
            D:"None of the mentioned"
        },
        correctAnswer: "C"
      },
      {
        question: "Pick the process used to achieve high signal to noise ratio (SNR) in delta modulation.",
        answers: {
            A : "Under sampling",
            B: "Over sampling",
            C: "Aliasing",
            D: "None of the mentioned"
        },
        correctAnswer: "B"
      }
    ];
  
  // ---------------------------- End -------------------------------
  
    // display quiz right away
    QuizContent();
  
    // on submit, show results
    Submit.addEventListener("click", resultWindow);
  })();