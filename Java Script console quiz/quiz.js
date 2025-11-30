// School-Themed JavaScript Console Quiz Game

const quiz = [
  { 
    question: "In Maths: What is 7 + 8?", 
    answer: "15" 
  },
  { 
    question: "In Science: Which gas do plants take in for photosynthesis?", 
    answer: "carbon dioxide" 
  },
  { 
    question: "In English: What is the opposite of 'hot'?", 
    answer: "cold" 
  },
  { 
    question: "In Computers: What does 'CPU' stand for? (short answer: cpu)", 
    answer: "cpu" 
  },
  { 
    question: "In School: What do we call the break time between classes?", 
    answer: "recess" 
  }
];

function runQuiz() {
  let score = 0;

  alert("Welcome to the School Quiz! Answer the questions carefully.");

  for (let i = 0; i < quiz.length; i++) {
    let userInput = prompt(`Q${i + 1}: ${quiz[i].question}`);

    if (userInput === null) {
      userInput = "";
    }

    userInput = userInput.toLowerCase().trim();

    if (userInput === quiz[i].answer) {
      score++;
      alert("Correct! 🎉");
    } else {
      alert(`Wrong ❌\nCorrect answer: ${quiz[i].answer}`);
    }
  }

  alert(`Quiz Completed!\nYour Score: ${score} / ${quiz.length}`);
  console.log(`Final Score: ${score} / ${quiz.length}`);
}

runQuiz();
