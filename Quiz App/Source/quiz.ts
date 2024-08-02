export interface Question {
    text: string;
    correctAnswer: boolean;
}

export const questions: Question[] = [
    { text: "The <div> element is an inline-level element by default.", correctAnswer: false },
    { text: "In CSS, the display: flex; property is used to create a flex container for flexible box layout.", correctAnswer: true },
    { text: "JavaScript is a compiled language.", correctAnswer: false },
    { text: "The <head> element in HTML contains metadata and links to external resources.", correctAnswer: true },
    { text: "In CSS, the # symbol is used to select classes.", correctAnswer: false },
    { text: "JavaScript functions can return multiple values directly.", correctAnswer: false },
    { text: "The onclick attribute in HTML can be used to run JavaScript code when an element is clicked.", correctAnswer: true },
    { text: "The CSS position: absolute; positions an element relative to its nearest positioned ancestor.", correctAnswer: true },
    { text: "The innerHTML property in JavaScript can be used to change the content of an HTML element.", correctAnswer: true },
    { text: "The HTML5 <canvas> element is used to draw graphics via scripting (usually JavaScript).", correctAnswer: true },
    { text: "In CSS, the padding property adds space inside the border of an element, while the margin property adds space outside the border.", correctAnswer: true },
    { text: "JavaScript arrays can store elements of different data types.", correctAnswer: true },
    { text: "HTML attributes are case-sensitive.", correctAnswer: false },
    { text: "The for loop in JavaScript is used to iterate over a block of code a specified number of times.", correctAnswer: true },
    { text: "In CSS, color: red; will change the text color to red.", correctAnswer: true }
];
