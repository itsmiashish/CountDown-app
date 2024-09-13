const quizData = [
	{
	  question: "Which of the following is a client-side language?",
	  a: "Java",
	  b: "C",
	  c: "Python",
	  d: "JavaScript",
	  correct: "d",
	},
	{
	  question: "What does HTML stand for?",
	  a: "Hypertext Markup Language",
	  b: "Cascading Style Sheet",
	  c: "Jason Object Notation",
	  d: "Helicopters Terminals Motorboats Lamborginis",
	  correct: "a",
	},
	{
	  question: "What year was JavaScript launched?",
	  a: "1996",
	  b: "1995",
	  c: "1994",
	  d: "none of the above",
	  correct: "b",
	},
	{
	  question: "What does CSS stand for?",
	  a: "Hypertext Markup Language",
	  b: "Cascading Style Sheet",
	  c: "Jason Object Notation",
	  d: "Helicopters Terminals Motorboats Lamborginis",
	  correct: "b",
	},
	{
	  question: "What is the default value of a variable in JavaScript if not initialized?",
	  a: "null",
	  b: "undefined",
	  c: "0",
	  d: "false",
	  correct: "b",
	},
	{
	  question: "Which of the following methods is used to access an HTML element by its ID?",
	  a: "getElementById",
	  b: "getElementByClass",
	  c: "querySelector",
	  d: "getElementByName",
	  correct: "a",
	},
	{
	  question: "How do you write a comment in JavaScript?",
	  a: "<!-- This is a comment -->",
	  b: "/* This is a comment */",
	  c: "// This is a comment",
	  d: "/* This is a comment */ or // This is a comment",
	  correct: "d",
	},
	{
	  question: "Which event occurs when the user clicks on an HTML element?",
	  a: "onmouseover",
	  b: "onchange",
	  c: "onclick",
	  d: "onkeypress",
	  correct: "c",
	},
	{
	  question: "Which method is used to add a new item to an array in JavaScript?",
	  a: "push()",
	  b: "pop()",
	  c: "shift()",
	  d: "unshift()",
	  correct: "a",
	},
	{
	  question: "What is the result of 2 + '2' in JavaScript?",
	  a: "4",
	  b: "22",
	  c: "Error",
	  d: "undefined",
	  correct: "b",
	},
  ];
  
  let index = 0;
  let correct = 0;
  let incorrect = 0;
  const total = quizData.length;
  
  // Selecting elements
  const questionBox = document.getElementById("questionBox");
  const allInputs = document.querySelectorAll("input[type='radio']");
  const submitButton = document.getElementById("submit");
  
  // Load the current question and options
  const loadQuestion = () => {
	if (index === total) {
	  return quizEnd();
	}
  
	reset();
  
	const data = quizData[index];
	questionBox.innerHTML = `${index + 1}) ${data.question}`;
	
	// Update labels with option texts
	document.querySelector(`label[for='option1']`).innerText = data.a;
	document.querySelector(`label[for='option2']`).innerText = data.b;
	document.querySelector(`label[for='option3']`).innerText = data.c;
	document.querySelector(`label[for='option4']`).innerText = data.d;
  };
  
  // Get the selected answer
  const getAnswer = () => {
	let ans;
	allInputs.forEach(inputEl => {
	  if (inputEl.checked) {
		ans = inputEl.value;
	  }
	});
	return ans;
  };
  
  // Reset the selected radio buttons
  const reset = () => {
	allInputs.forEach(inputEl => {
	  inputEl.checked = false;
	});
  };
  
  // End the quiz and display results
  const quizEnd = () => {
	document.querySelector(".main").innerHTML = `
	  <div class="box">
		<h3 class="w-100">Hi, you've scored </h3>
		 <img src="https://www.innerdawn.in/wp-content/uploads/2021/11/Friendships-to-not-let-go-1024x683.jpg" alt="" ${correct} / ${total} >
	  </div>
	`;
  };
  
  // Event listener for submit button
  submitButton.addEventListener("click", () => {
	const data = quizData[index];
	const ans = getAnswer();
  
	if (ans === data.correct) {
	  correct++;
	} else {
	  incorrect++;
	}
  
	index++;
	loadQuestion();
  });
  
  // Initial load
  loadQuestion();
  