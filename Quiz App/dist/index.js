"use strict";
const quizQuestions = [
    // HTML Questions
    {
        question: "What does HTML stand for?",
        options: [
            "Hypertext Markup Language",
            "Hyperlink and Text Markup Language",
            "Hypertext and Metadata Language",
            "Hypertext Markup List",
        ],
        correctAnswer: "Hypertext Markup Language",
    },
    {
        question: "Which tag is used to define an unordered list?",
        options: ["<ol>", "<ul>", "<li>", "<list>"],
        correctAnswer: "<ul>",
    },
    {
        question: "What attribute is used to define inline styles in HTML?",
        options: ["class", "id", "style", "type"],
        correctAnswer: "style",
    },
    {
        question: "How do you create a hyperlink in HTML?",
        options: [
            "<a href='url'>Link text</a>",
            "<link href='url'>Link text</link>",
            "<hyperlink href='url'>Link text</hyperlink>",
            "<a src='url'>Link text</a>",
        ],
        correctAnswer: "<a href='url'>Link text</a>",
    },
    {
        question: "Which HTML element is used for the largest heading?",
        options: ["<h1>", "<h6>", "<heading>", "<head>"],
        correctAnswer: "<h1>",
    },
    // CSS Questions
    {
        question: "What does CSS stand for?",
        options: [
            "Cascading Style Sheets",
            "Computer Style Sheets",
            "Colorful Style Sheets",
            "Creative Style Sheets",
        ],
        correctAnswer: "Cascading Style Sheets",
    },
    {
        question: "How do you select an element with the id 'header' in CSS?",
        options: [
            "#header",
            ".header",
            "header",
            "header#header",
        ],
        correctAnswer: "#header",
    },
    {
        question: "Which property is used to change the background color in CSS?",
        options: ["color", "bgcolor", "background-color", "background"],
        correctAnswer: "background-color",
    },
    {
        question: "How do you add a comment in CSS?",
        options: [
            "// This is a comment",
            "/* This is a comment */",
            "# This is a comment",
            "<!-- This is a comment -->",
        ],
        correctAnswer: "/* This is a comment */",
    },
    {
        question: "What is the default value of the 'position' property in CSS?",
        options: ["relative", "absolute", "static", "fixed"],
        correctAnswer: "static",
    },
    // JavaScript Questions
    {
        question: "Which method is used to parse a string as JSON in JavaScript?",
        options: ["JSON.parse()", "JSON.stringify()", "JSON.convert()", "parseJSON()"],
        correctAnswer: "JSON.parse()",
    },
    {
        question: "What will the following code output: console.log(typeof NaN)?",
        options: ["number", "undefined", "object", "NaN"],
        correctAnswer: "number",
    },
    {
        question: "How do you declare a function in JavaScript?",
        options: [
            "function myFunction() {}",
            "func myFunction() {}",
            "declare function myFunction() {}",
            "function: myFunction() {}",
        ],
        correctAnswer: "function myFunction() {}",
    },
    {
        question: "Which of the following is not a valid JavaScript data type?",
        options: ["Boolean", "Number", "Character", "String"],
        correctAnswer: "Character",
    },
    {
        question: "What does 'DOM' stand for in JavaScript?",
        options: [
            "Document Object Model",
            "Data Object Model",
            "Document Orientation Model",
            "Data Organization Model",
        ],
        correctAnswer: "Document Object Model",
    },
    // TypeScript Questions
    {
        question: "How do you define a TypeScript interface?",
        options: [
            "interface InterfaceName {}",
            "class InterfaceName {}",
            "type InterfaceName = {}",
            "enum InterfaceName {}",
        ],
        correctAnswer: "interface InterfaceName {}",
    },
    {
        question: "Which of the following is a valid TypeScript type?",
        options: ["number", "boolean", "string", "All of the above"],
        correctAnswer: "All of the above",
    },
    {
        question: "How do you specify a read-only property in TypeScript?",
        options: [
            "readonly propertyName: type",
            "propertyName: readonly type",
            "propertyName: type readonly",
            "readonly: propertyName type",
        ],
        correctAnswer: "readonly propertyName: type",
    },
    {
        question: "What is the purpose of the 'type' keyword in TypeScript?",
        options: [
            "To create a new type alias",
            "To define a class",
            "To declare a variable",
            "To specify a function",
        ],
        correctAnswer: "To create a new type alias",
    },
    {
        question: "How do you declare a function with optional parameters in TypeScript?",
        options: [
            "function myFunction(param1?: type) {}",
            "function myFunction(param1: type?) {}",
            "function myFunction(param1: ?type) {}",
            "function myFunction(param1: type) {} // optional",
        ],
        correctAnswer: "function myFunction(param1?: type) {}",
    },
    // Mixed Questions
    {
        question: "Which HTML attribute specifies the URL of a linked document?",
        options: ["href", "src", "link", "target"],
        correctAnswer: "href",
    },
    {
        question: "What does the 'box-sizing' property do in CSS?",
        options: [
            "Defines the area the box model should cover",
            "Sets the width of the box model",
            "Includes padding and border in the element's total width and height",
            "Changes the alignment of the box",
        ],
        correctAnswer: "Includes padding and border in the element's total width and height",
    },
    {
        question: "How do you select all <p> elements in JavaScript?",
        options: [
            "document.querySelectorAll('p')",
            "document.getElementsByTagName('p')",
            "document.getElementById('p')",
            "document.querySelector('p')",
        ],
        correctAnswer: "document.querySelectorAll('p')",
    },
    {
        question: "Which TypeScript keyword is used to define a union type?",
        options: ["union", "or", "type", "|"],
        correctAnswer: "|",
    },
    {
        question: "How do you declare a constant in TypeScript?",
        options: ["const constantName: type", "let constantName: type", "var constantName: type", "static constantName: type"],
        correctAnswer: "const constantName: type",
    },
    {
        question: "What is the purpose of the 'this' keyword in JavaScript?",
        options: [
            "Refers to the current object",
            "Refers to the global object",
            "Refers to the previous function",
            "Refers to the function itself",
        ],
        correctAnswer: "Refers to the current object",
    },
    {
        question: "How can you include an external CSS file in HTML?",
        options: [
            "<link rel='stylesheet' href='styles.css'>",
            "<style src='styles.css'>",
            "<css src='styles.css'>",
            "<import src='styles.css'>",
        ],
        correctAnswer: "<link rel='stylesheet' href='styles.css'>",
    },
    {
        question: "Which JavaScript method is used to add an element to the end of an array?",
        options: ["push()", "pop()", "shift()", "unshift()"],
        correctAnswer: "push()",
    },
    {
        question: "What is the output of '0 == false' in JavaScript?",
        options: ["true", "false", "undefined", "NaN"],
        correctAnswer: "true",
    },
    {
        question: "How do you specify the type of a variable in TypeScript?",
        options: [
            "let variableName: type;",
            "let variableName = type;",
            "let variableName:type;",
            "let type variableName;",
        ],
        correctAnswer: "let variableName: type;",
    },
    {
        question: "Which HTML tag is used to define a table row?",
        options: ["<tr>", "<td>", "<th>", "<table>"],
        correctAnswer: "<tr>",
    },
    {
        question: "How do you set a font size in CSS?",
        options: [
            "font-size: 16px;",
            "text-size: 16px;",
            "font: 16px;",
            "text-font: 16px;",
        ],
        correctAnswer: "font-size: 16px;",
    },
    {
        question: "What will be the result of '3 + 2 + '3'' in JavaScript?",
        options: ["33", "5", "6", "NaN"],
        correctAnswer: "33",
    },
    {
        question: "How do you make a TypeScript property optional?",
        options: [
            "propertyName?: type",
            "propertyName: type?",
            "propertyName! : type",
            "propertyName: type!",
        ],
        correctAnswer: "propertyName?: type",
    },
    {
        question: "What does the 'forEach' method do in JavaScript?",
        options: [
            "Executes a function once for each array element",
            "Creates a new array with the results of a function",
            "Sorts the elements of an array",
            "Filters the elements of an array",
        ],
        correctAnswer: "Executes a function once for each array element",
    },
    {
        question: "Which property is used to change the text color in CSS?",
        options: ["color", "text-color", "font-color", "background-color"],
        correctAnswer: "color",
    },
    {
        question: "How do you declare an array in TypeScript?",
        options: [
            "let arrayName: type[];",
            "let arrayName = new Array<type>();",
            "let arrayName: Array<type>;",
            "All of the above",
        ],
        correctAnswer: "All of the above",
    },
];
const question_ele = document.querySelector("#question");
const radioInputContainer = document.querySelector("#radio-inputs-container");
const nextBtn = document.querySelector("#next_btn");
const quiz_container = document.querySelector("#quiz_container");
const result_container = document.querySelector("#result_container");
let currentInd = 0;
let rightAnswers = 0;
let wrongAnswers = 0;
renderQuizToHTML();
function renderQuizToHTML() {
    radioInputContainer.innerHTML = "";
    if (currentInd === quizQuestions.length) {
        quiz_container.style.display = "none";
        result_container.style.display = "block";
        result_container.innerHTML += `<h1 class = "text-2xl">${rightAnswers > wrongAnswers ? "You Win" : "You Loss"}</h1>`;
        result_container.innerHTML += `<h1 class = "text-2xl">Right Answer ${rightAnswers}</h1>`;
        result_container.innerHTML += `<h1 class = "text-2xl">Wrong Answer ${wrongAnswers}</h1>`;
    }
    else {
        const que = quizQuestions[currentInd];
        question_ele.innerText = `${currentInd + 1}) ${que.question}`;
        const allOptions = que.options.forEach((data, index) => (radioInputContainer.innerHTML += `<label class="my-2">
          <input type="radio" name=${`question-${currentInd}`} value="${data.toString()}" />
          <span class="pl-2">${data}</span>
        </label>`));
    }
    if (currentInd === quizQuestions.length - 1) {
        nextBtn.innerText = "Submit";
    }
}
nextBtn.addEventListener("click", () => {
    const selected = document.querySelector(`input[name = "question-${currentInd}"]:checked`);
    console.log("selected=>", selected);
    if (selected) {
        if (selected.value == quizQuestions[currentInd].correctAnswer) {
            rightAnswers++;
        }
        else {
            wrongAnswers++;
        }
        currentInd++;
        renderQuizToHTML();
        function renderQuizToHTML() {
            radioInputContainer.innerHTML = "";
            if (currentInd === quizQuestions.length) {
                quiz_container.style.display = "none";
                result_container.style.display = "block";
                result_container.innerHTML = `<h1 class="text-2xl font-bold mb-4 text-center">${rightAnswers > wrongAnswers ? "🎉 You Win!" : "😞 You Lose!"}</h1>`;
                result_container.innerHTML += `<p class="text-lg text-green-600">🎯 Right Answers: ${rightAnswers}</p>`;
                result_container.innerHTML += `<p class="text-lg text-red-600">❌ Wrong Answers: ${wrongAnswers}</p>`;
            }
            else {
                const que = quizQuestions[currentInd];
                question_ele.innerText = `${currentInd + 1}) ${que.question}`;
                que.options.forEach((data, index) => {
                    radioInputContainer.innerHTML += `
                <div class="mb-2"> <!-- Container for each option -->
                    <div class="flex items-center"> <!-- Flexbox container for radio button and label -->
                        <input type="radio" id="option-${currentInd}-${index}" name="question-${currentInd}" value="${data}" class="mr-2">
                        <label for="option-${currentInd}-${index}" class="text-gray-700">
                            ${data}
                        </label>
                    </div>
                </div>`;
                });
            }
            if (currentInd === quizQuestions.length - 1) {
                nextBtn.innerText = "Submit";
            }
        }
    }
});
