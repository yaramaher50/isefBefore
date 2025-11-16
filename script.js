const i1 = document.querySelector(".ri-align-justify");
const i2 = document.querySelector(".fa-xmark");
const navbar = document.querySelector(".navbar");
const menu = document.querySelector(".menu");

menu.addEventListener("click", function () {
  i1.classList.toggle("active");
  i2.classList.toggle("active");
  navbar.classList.toggle("active");
});
const questions = [
  "هل يجد طفلك صعوبة في الجلوس لفترة طويلة؟",
  "هل يتحدث أو يتحرك بشكل مفرط مقارنة بالأطفال الآخرين؟",
  "هل يواجه صعوبة في التركيز على مهمة واحدة لفترة طويلة؟",
  "هل ينسى التعليمات بسهولة أو يتشتت أثناء المهام؟",
  "هل يتصرف باندفاع دون التفكير في العواقب؟",
];

let currentQuestion = 0;
let score = 0;

const questionElement = document.getElementById("question");
const nextBtn = document.getElementById("nextBtn");
const resultBox = document.getElementById("resultBox");
const resultTitle = document.getElementById("resultTitle");
const resultText = document.getElementById("resultText");

function selectAnswer(value) {
  score += value;
  const buttons = document.querySelectorAll(".answer");
  buttons.forEach((btn) => (btn.disabled = true)); // يمنع الضغط مرتين
}

function nextQuestion() {
  const buttons = document.querySelectorAll(".answer");
  buttons.forEach((btn) => (btn.disabled = false)); // إعادة التفعيل

  currentQuestion++;

  if (currentQuestion < questions.length) {
    questionElement.textContent = questions[currentQuestion];
  } else {
    showResult();
  }
}

function showResult() {
  document.querySelector(".test-box").style.display = "none";
  resultBox.style.display = "block";

  if (score >= 8) {
    resultTitle.textContent = "⚠️ مؤشرات مرتفعة على فرط الحركة وتشتت الانتباه";
    resultText.textContent = "ننصحك بالتحدث مع أخصائي لتقييم الحالة بدقة.";
  } else if (score >= 4) {
    resultTitle.textContent = "ℹ️ هناك بعض السلوكيات الدالة على التشتت";
    resultText.textContent = "قد يحتاج الطفل إلى تدريب على التركيز والتنظيم.";
  } else {
    resultTitle.textContent = "✅ لا توجد مؤشرات واضحة على فرط الحركة";
    resultText.textContent = "يبدو أن الطفل يتمتع بتركيز وانضباط جيد 🌟";
  }
}

function restartTest() {
  currentQuestion = 0;
  score = 0;
  questionElement.textContent = questions[currentQuestion];
  document.querySelector(".test-box").style.display = "block";
  resultBox.style.display = "none";
}
// --
