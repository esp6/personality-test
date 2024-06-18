let scoreCounts = {
  CEXMB: 0,
  CBRCAL: 0,
  WRCRS: 0
};

document.querySelector("#start-btn").addEventListener("click", () => {
  document.querySelector(".landing-page").style.display = "none";
  document.querySelector(".quiz-page").style.display = "block";
  displayQuestion();
});

let currQuestion = 0;

function displayQuestion() {
  if (currQuestion === 1 || currQuestion === 16) {
    transition();
  } else {
    document.querySelector(".transition-page").style.display = "none";
    document.querySelector(".quiz-page").style.display = "block";

    const question = questions[currQuestion];
    const questionContainer = document.querySelector("#question");
    const img = document.querySelector("#question-img");
    const choiceA = document.querySelector("#choiceA");
    const choiceB = document.querySelector("#choiceB");
    const progressBar = document.querySelector("#progress-bar-1");

    questionContainer.innerHTML = question.question;
    img.src = question.image;
    img.alt = question["image-alt"];

    choiceA.innerHTML = question.answers[Object.keys(question.answers)[0]].text;
    choiceB.innerHTML = question.answers[Object.keys(question.answers)[1]].text;
    choiceA.addEventListener("click", handleChoice);
    choiceB.addEventListener("click", handleChoice);

    progressBar.value = question.number;
  }
}

function transition() {
  document.querySelector(".transition-page").style.display = "block";
  document.querySelector(".landing-page").style.display = "none";
  document.querySelector(".quiz-page").style.display = "none";

  document.querySelector(".transition").textContent = questions[currQuestion].question;
  document.querySelector("#progress-bar-2").value = questions[currQuestion].number;

  document.querySelector("#continue-btn").addEventListener("click", () => {
    currQuestion++;
    displayQuestion();
  }, { once: true });
}

function handleChoice(e) {
  const choice = e.target.id[6];
  const question = questions[currQuestion];
  const scores = question.answers[choice].scores;
  scores.forEach(score => {
    scoreCounts[score]++;
  });

  if (currQuestion < questions.length - 1) {
    currQuestion++;
    displayQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  document.querySelector(".quiz-page").style.display = "none";
  document.querySelector(".results-page").style.display = "block";

  const category = document.querySelector("#category");
  const trait = document.querySelector("#trait");
  const description = document.querySelector("#description");
  let dominantTrait = Object.keys(scoreCounts).find(function(key) {
    return scoreCounts[key] === Math.max(...(Object.values(scoreCounts)));
  });

  const result = results[dominantTrait];
  category.textContent = result.category;
  trait.textContent = result.trait;
  description.innerHTML = result.description;
}
