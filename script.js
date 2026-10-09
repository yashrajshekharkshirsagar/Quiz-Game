// CodeQuiz - demo login plus multi-language quiz
// NOTE: localStorage authentication is for learning/demo only, not production.
const quizData = {
  "C": [
    { q: "Which symbol ends most C statements?", options: [";", ":", ".", ","], answer: 0, 
      category: "Basics" },
    { q: "Which function is the usual entry point in C?", options: ["start()", "main()", 
      "run()", "begin()"], answer: 1, category: "Basics" },
    { q: "Which header is commonly used for printf()?", options: ["<string.h>", "<math.h>", 
      "<stdio.h>", "<stdlib>"], answer: 2, category: "Headers" },
    { q: "Which format specifier is used for an int?", options: ["%f", "%c", "%s", "%d"], 
      answer: 3, category: "Data types" },
    { q: "Which type stores a single character?", options: ["char", "int", "float", "double"], 
      answer: 0, category: "Data types" },
    { q: "Array indexing in C starts at which index?", options: ["1", "-1", "0", "Depends on 
      size"], answer: 2, category: "Arrays" },
    { q: "Which loop checks its condition before each iteration?", options: ["do-while only", 
      "while", "Neither", "Both while and for"], answer: 3, category: "Loops" },
    { q: "Which operator gives the remainder?", options: ["/", "*", "%", "//"], answer: 2, 
      category: "Operators" },
    { q: "Which keyword returns a value from a function?", options: ["break", "return", 
      "continue", "exit"], answer: 1, category: "Functions" },
    { q: "Which character begins a single-line comment in C?", options: ["//", "#", "<!--", 
      "**"], answer: 0, category: "Comments" }
  ],
  "C++": [
    { q: "Which stream is commonly used for output in C++?", options: ["cin", "cout", "print", 
      "write"], answer: 1, category: "Basics" },
    { q: "Which header provides cout and cin?", options: ["<stdio.h>", "<string>", "<iostream>",
       "<input>"], answer: 2, category: "Headers" },
    { q: "Which operator is used with cout?", options: [">>", "<<", "&&", "%%"], answer: 1, 
      category: "Operators" },
    { q: "Which feature lets a class hide its data?", options: ["Encapsulation", "Iteration", 
      "Compilation", "Casting"], answer: 0, category: "OOP" },
    { q: "Which keyword creates a class?", options: ["structonly", "object", "class", "define"],
       answer: 2, category: "OOP" },
    { q: "Which symbol ends most C++ statements?", options: [".", ";", ":", ","], answer: 1, 
      category: "Basics" },
    { q: "Which operator accesses a member through an object?", options: ["-> only", ".", "::", 
      "#"], answer: 1, category: "OOP" },
    { q: "Which loop runs at least once?", options: ["for", "while", "do-while", "range"], 
      answer: 2, category: "Loops" },
    { q: "Which keyword is used for inheritance in a class declaration?", options: ["extends", 
      "inherits", ":", "using"], answer: 2, category: "OOP" },
    { q: "What is the usual entry point of a C++ program?", options: ["main()", "start()", 
      "execute()", "init()"], answer: 0, category: "Basics" }
  ],
  "Python": [
    { q: "Which keyword defines a function?", options: ["func", "def", "function", "make"], 
      answer: 1, category: "Basics" },
    { q: "Which symbol starts a comment?", options: ["//", "#", "/*", "--"], answer: 1, 
      category: "Syntax" },
    { q: "Which function displays output?", options: ["echo()", "write()", "print()", "show()"],
       answer: 2, category: "Basics" },
    { q: "Which type stores key-value pairs?", options: ["list", "tuple", "set", "dict"], 
      answer: 3, category: "Data types" },
    { q: "Which brackets create a list?", options: ["[]", "{}", "()", "<>"], answer: 0, 
      category: "Data types" },
    { q: "What does len('code') return?", options: ["3", "4", "5", "Error"], answer: 1, 
      category: "Built-ins" },
    { q: "Which keyword starts a conditional branch?", options: ["when", "if", "check", "case"],
       answer: 1, category: "Conditions" },
    { q: "Which loop iterates over items in a sequence?", options: ["repeat", "foreach", "for", 
      "loop"], answer: 2, category: "Loops" },
    { q: "What is the result of 3 ** 2?", options: ["6", "9", "8", "5"], answer: 1, category: 
      "Operators" },
    { q: "Which value represents no value?", options: ["null", "None", "nil", "undefined"], 
      answer: 1, category: "Values" }
  ],
  "Java": [
    { q: "Which keyword declares a class in Java?", options: ["class", "define", "struct", 
      "object"], answer: 0, category: "Basics" },
    { q: "Which method is the common entry point?", options: ["start()", "run()", "main()", 
      "init()"], answer: 2, category: "Basics" },
    { q: "Which keyword creates an object?", options: ["this", "new", "make", "class"], answer: 
      1, category: "OOP" },
    { q: "Which type stores true or false?", options: ["int", "String", "char", "boolean"], 
      answer: 3, category: "Data types" },
    { q: "Which package is imported automatically from java.lang?", options: ["java.util", 
      "java.io", "java.lang", "java.net"], answer: 2, category: "Packages" },
    { q: "Which keyword is used to inherit a class?", options: ["extends", "implements", 
      "inherits", "superclass"], answer: 0, category: "OOP" },
    { q: "Which access modifier allows access from anywhere?", options: ["private", "public", 
      "protected", "default only"], answer: 1, category: "Access" },
    { q: "Which collection stores unique elements?", options: ["List", "ArrayList", "Set", 
      "Queue"], answer: 2, category: "Collections" },
     { q: "Java source code is compiled into:", options: ["Machine code only", "Bytecode", 
      "HTML", "SQL"], answer: 1, category: "Runtime" },
    { q: "Which keyword prevents a class from being subclassed?", options: ["static", "const", 
      "private", "final"], answer: 3, category: "OOP" }
  ],
  "HTML": [
    { q: "What does HTML stand for?", options: ["HyperText Markup Language", "HighText Machine 
      Language", "Hyper Tool Multi Language", "Home Text Markup Language"], answer: 0, category:
       "Basics" },
    { q: "Which tag creates a paragraph?", options: ["<h1>", "<p>", "<divp>", "<para>"], answer:
       1, category: "Elements" },
    { q: "Which tag creates a hyperlink?", options: ["<link>", "<href>", "<a>", "<url>"], 
      answer: 2, category: "Links" },
    { q: "Which attribute provides image alternative text?", options: ["title", "src", "href", 
      "alt"], answer: 3, category: "Images" },
    { q: "Which tag creates the largest standard heading?", options: ["<h1>", "<h6>", "<head>", 
      "<heading>"], answer: 0, category: "Text" },
    { q: "Which tag inserts a line break?", options: ["<break>", "<lb>", "<br>", "<newline>"], 
      answer: 2, category: "Elements" },
    { q: "Which attribute points to a linked page?", options: ["src", "href", "link", 
      "targetfile"], answer: 1, category: "Links" },
    { q: "Which tag is used for an unordered list?", options: ["<ol>", "<li>", "<list>", 
      "<ul>"], answer: 3, category: "Lists" },
    { q: "Which tag contains visible page content?", options: ["<body>", "<head>", "<meta>", 
      "<title>"], answer: 0, category: "Structure" },
    { q: "Which declaration identifies the HTML5 document type?", options: ["<html5>", "<doctype
       html>", "<!DOCTYPE html>", "<document>"], answer: 2, category: "Structure" }
  ],
  "CSS": [
    { q: "What does CSS stand for?", options: ["Computer Style Sheets", "Cascading Style 
      Sheets", "Creative Style Syntax", "Colorful Sheet System"], answer: 1, category: "Basics" 
      },
    { q: "Which property changes text colour?", options: ["font-color", "text-color", "color", 
      "foreground"], answer: 2, category: "Properties" },
    { q: "Which selector targets an ID named header?", options: [".header", "#header", 
      "*header", "header#"], answer: 1, category: "Selectors" },
    { q: "Which selector targets a class named card?", options: ["#card", "card", ".card", 
      "@card"], answer: 2, category: "Selectors" },
    { q: "Which property controls text size?", options: ["font-size", "text-style", "size", 
      "font-weight"], answer: 0, category: "Properties" },
    { q: "Which value makes an element a flex container?", options: ["position: flex", "display:
       flex", "flex: display", "layout: flex"], answer: 1, category: "Layout" },
    { q: "Which property adds space inside an element's border?", options: ["margin", "gap", 
      "padding", "outline"], answer: 2, category: "Box model" },
    { q: "Which property adds space outside an element's border?", options: ["padding", 
      "border-gap", "space", "margin"], answer: 3, category: "Box model" },
    { q: "Which symbol begins a CSS ID selector?", options: ["#", ".", "$", "&"], answer: 0, 
      category: "Selectors" },
    { q: "Which property rounds corners?", options: ["corner-style", "border-radius", 
      "round-edge", "radius"], answer: 1, category: "Properties" }
  ],
  "JavaScript": [
    { q: "Which keyword declares a block-scoped variable that can change?", options: ["const", 
      "let", "fixed", "static"], answer: 1, category: "Basics" },
    { q: "Which function writes a message to the browser console?", options: ["console.log()", 
      "print()", "echo()", "log.console()"], answer: 0, category: "Debugging" },
    { q: "Which operator checks strict equality?", options: ["=", "==", "===", "!="], answer: 2,
       category: "Operators" },
    { q: "Which method selects an element by its ID?", options: ["getElementById()", 
      "queryId()", "selectId()", "findId()"], answer: 0, category: "DOM" },
    { q: "Which value means a variable has not been assigned?", options: ["empty", "null", 
      "undefined", "NaN"], answer: 2, category: "Values" },
    { q: "Which array method adds an item to the end?", options: ["pop()", "push()", "shift()", 
      "join()"], answer: 1, category: "Arrays" },
    { q: "Which keyword declares a function?", options: ["function", "def", "fun", "method"], 
      answer: 0, category: "Functions" },
    { q: "Which event commonly fires when a button is clicked?", options: ["changeText", 
      "press", "onclick", "onhover"], answer: 2, category: "Events" },
    { q: "Which symbol is used for a single-line comment?", options: ["#", "//", "<!--", "**"], 
      answer: 1, category: "Syntax" },
    { q: "Which JSON method converts an object to a JSON string?", options: ["JSON.parse()", 
      "JSON.read()", "JSON.stringify()", "JSON.object()"], answer: 2, category: "JSON" }
  ]
};
// Demo authentication. Do not use this approach for real accounts or real passwords.
const USERS_KEY = "codeQuizUsers";
const SESSION_KEY = "codeQuizLoggedInEmail";
function getUsers() {
  try { return JSON.parse(localStorage.getItem(USERS_KEY)) || {}; }
  catch { return {}; }
}
function hideAllScreens() {
  ["login-screen", "signup-screen", "home-screen", "quiz-screen", "result-screen"]
    .forEach(id => document.getElementById(id).classList.add("hidden"));
}
function showLogin() {
  hideAllScreens();
  document.getElementById("login-screen").classList.remove("hidden");
  document.getElementById("login-error").textContent = "";
}
function showSignup() {
  hideAllScreens();
  document.getElementById("signup-screen").classList.remove("hidden");
    document.getElementById("signup-error").textContent = "";
}
function showHome() {
  const email = localStorage.getItem(SESSION_KEY);
  const user = getUsers()[email];
  if (!email || !user) {
    localStorage.removeItem(SESSION_KEY);
    showLogin();
    return;
  }
  hideAllScreens();
  document.getElementById("home-screen").classList.remove("hidden");
  document.getElementById("username-display").textContent = "Hi, " + user.name;
}
function logout() {
  localStorage.removeItem(SESSION_KEY);
  currentLanguage = "";
  currentQuestions = [];
  showLogin();
}
document.getElementById("signup-form").addEventListener("submit", event => {
  event.preventDefault();
  const name = document.getElementById("signup-name").value.trim();
  const email = document.getElementById("signup-email").value.trim().toLowerCase();
  const password = document.getElementById("signup-password").value;
  const confirm = document.getElementById("signup-confirm").value;
  const error = document.getElementById("signup-error");
  if (password.length < 6) { error.textContent = "Use at least 6 characters for the password."; 
    return; }
  if (password !== confirm) { error.textContent = "Passwords do not match."; return; }
  const users = getUsers();
  if (users[email]) { error.textContent = "An account with this email already exists."; return; 
    }
  users[email] = { name, password };
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
  localStorage.setItem(SESSION_KEY, email);
  document.getElementById("signup-form").reset();
  showHome();
});
document.getElementById("login-form").addEventListener("submit", event => {
  event.preventDefault();
  const email = document.getElementById("login-email").value.trim().toLowerCase();
  const password = document.getElementById("login-password").value;
  const user = getUsers()[email];
  const error = document.getElementById("login-error");
  if (!user || user.password !== password) {
    error.textContent = "Email or password is incorrect.";
    return;
  }
  localStorage.setItem(SESSION_KEY, email);
  document.getElementById("login-form").reset();
  showHome();
});
let currentLanguage = "";
let currentQuestions = [];
let currentQuestion = 0;
let score = 0;
let answered = false;
function startQuiz(language) {
  if (!localStorage.getItem(SESSION_KEY)) { showLogin(); return; }
  currentLanguage = language;
  currentQuestions = quizData[language];
  currentQuestion = 0;
  score = 0;
  hideAllScreens();
  document.getElementById("quiz-screen").classList.remove("hidden");
  document.getElementById("language-title").textContent = language;
  document.getElementById("score-display").textContent = "Score: 0";
  showQuestion();
}
function showQuestion() {
  answered = false;
  const item = currentQuestions[currentQuestion];
  document.getElementById("question-number").textContent =
    `Question ${currentQuestion + 1} of ${currentQuestions.length}`;
  document.getElementById("category").textContent = item.category;
  document.getElementById("question").textContent = item.q;
  document.getElementById("progress-bar").style.width =
    `${(currentQuestion / currentQuestions.length) * 100}%`;
  document.getElementById("feedback").textContent = "";
  const options = document.getElementById("options");
  options.innerHTML = "";
  item.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "option-button";
    button.textContent = `${String.fromCharCode(65 + index)}. ${option}`;
       button.addEventListener("click", () => selectAnswer(index));
    options.appendChild(button);
  });
  const next = document.getElementById("next-button");
  next.disabled = true;
  next.textContent = currentQuestion === currentQuestions.length - 1 ? "See Results" : "Next 
    Question";
}
function selectAnswer(selectedIndex) {
  if (answered) return;
  answered = true;
  const item = currentQuestions[currentQuestion];
  const buttons = document.querySelectorAll("#options .option-button");
  buttons.forEach((button, index) => {
    button.disabled = true;
    if (index === item.answer) button.classList.add("correct");
    if (index === selectedIndex && selectedIndex !== item.answer) button.classList.add("wrong");
  });
  const feedback = document.getElementById("feedback");
  if (selectedIndex === item.answer) {
    score++;
    feedback.textContent = "Correct! Well done.";
  } else {
    feedback.textContent = "Not quite. The correct answer is " + item.options[item.answer] + 
      ".";
  }
  document.getElementById("score-display").textContent = "Score: " + score;
  document.getElementById("next-button").disabled = false;
}
function nextQuestion() {
  if (!answered) return;
  if (currentQuestion < currentQuestions.length - 1) {
    currentQuestion++;
    showQuestion();
  } else {
    showResult();
  }
}
function showResult() {
  hideAllScreens();
  document.getElementById("result-screen").classList.remove("hidden");
  const total = currentQuestions.length;
  const wrong = total - score;
  document.getElementById("final-score").textContent = `${score} / ${total}`;
  document.getElementById("correct-count").textContent = score;
  document.getElementById("wrong-count").textContent = wrong;
  document.getElementById("progress-bar").style.width = "100%";
  const percent = Math.round((score / total) * 100);
  document.getElementById("result-message").textContent =
    `${currentLanguage}: ${percent}% score. ${percent >= 80 ? "Excellent work!" : percent >= 50 
      ? "Good effort—keep practising!" : "Keep learning and try again!"}`;
}
function playAgain() { startQuiz(currentLanguage); }
function goHome() { showHome(); }
// Restore the demo session when this page is opened again in the same browser.
(function init() {
  const email = localStorage.getItem(SESSION_KEY);
  const users = getUsers();
  if (email && users[email]) showHome();
  else showLogin();
})();
