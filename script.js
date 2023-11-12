"use strict";

function createHTMLElement(
  tagName,
  classNames = [],
  textContent = "",
  placeholder = ""
) {
  const element = document.createElement(tagName);
  element.classList.add(...classNames);
  element.textContent = textContent;
  element.placeholder = placeholder;
  return element;
}

const simplePrint = (number) => {
  if (!number) return "Please enter a number";
  return "The Output is: " + number;
};

const isDivideBy3And4 = (number) => {
  if (!number) return "Please enter a number";
  return number % 3 === 0 && number % 4 === 0;
};

const maxNumber = (number1, number2) => {
  if (!number1 || !number2) return "Please enter a number";
  return `The larger number is ${number1 > number2 ? number1 : number2}`;
};

const positiveOrNegative = (number) => {
  if (!number) return "Please enter a number";
  return number > 0 ? "Positive" : "Negative";
};

const maxAndMin = (number1, number2, number3) => {
  if (!number1 || !number2 || !number3) return "Please enter a number";

  const maximum = Math.max(number1, number2, number3);
  const minimum = Math.min(number1, number2, number3);

  return `Maximum: ${maximum} \n Minimum: ${minimum}`;
};

const evenOrOdd = (number) => {
  if (!number) return "Please enter a number";
  return number % 2 === 0 ? "Even" : "Odd";
};

const isVowel = (char) => {
  if (!char) return "Please enter a character";
  return ["a", "e", "i", "o", "u"].includes(char.toLowerCase()) ? true : false;
};

const printAllNumbers = (number) => {
  if (!number) return "Please enter a number";
  let result = "";
  for (let i = 1; i <= number; i++) {
    result += `${i}, `;
  }
  return result;
};

const multipleTableUpTo12 = (number) => {
  if (!number) return "Please enter a number";
  let result = "";
  for (let i = 1; i <= 12; i++) {
    result += `${i * number}, `;
  }
  return result;
};

const evenNumbers = (number) => {
  if (!number) return "Please enter a number";
  let result = "";
  for (let i = 1; i <= number; i++) {
    if (i % 2 === 0) {
      result += `${i}, `;
    }
  }
  return result;
};

const power = (number1, number2) => {
  if (!number1 || !number2) return "Please enter a number";
  return Math.pow(number1, number2);
};

const summary = (arr) => {
  if (!arr) return "Please enter a number";
  const numbers = arr.split(",").map(Number);
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  let average = sum / numbers.length;
  let percentage = (sum / (numbers.length * 100)) * 100;
  return `Total: ${sum} \n
  Average: ${average} \n
  percentage: ${percentage}%`;
};

const daysInMonth = (number) => {
  if (!number) return "Please enter a number";
  if (
    number == 1 ||
    number == 3 ||
    number == 5 ||
    number == 7 ||
    number == 8 ||
    number == 10 ||
    number == 12
  ) {
    return `This month has 31 days`;
  } else if (number == 2) {
    return `This month has 28 days`;
  } else {
    return `This month has 30 days`;
  }
};

const calcGrad = (arr) => {
  if (!arr) return "Please enter a number";
  const numbers = arr.split(",").map(Number);
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  let percentage = (sum / (numbers.length * 100)) * 100;
  if (percentage >= 90) {
    return `Grad A`;
  } else if (percentage >= 80) {
    return `Grad B`;
  } else if (percentage >= 70) {
    return `Grad C`;
  } else if (percentage >= 60) {
    return `Grad D`;
  } else if (percentage >= 40) {
    return `Grad E`;
  } else {
    return `Grad F`;
  }
};

const numDaysOfMonth = (num) => {
  if (!num) return "Please enter a number";
  switch (+num) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      return `Days in Month: 31`;
    case 2:
      return `Days in Month: 28`;
    case 4:
    case 6:
    case 9:
    case 11:
      return `Days in Month: 30`;
    default:
      console.log(
        "Invalid month number. Please enter a number between 1 and 12."
      );
      return 0;
  }
};

const checkVowel = (char) => {
  if (!char) return "Please enter a character";
  switch (char.toLowerCase()[0]) {
    case "a":
    case "o":
    case "u":
    case "l":
    case "e":
      return "Vowel";
      break;
    default:
      return "Consonant";
      break;
  }
};

const maximumNumber = (number1, number2) => {
  if (!number1 || !number2) return "Please enter a number";
  switch (true) {
    case number1 > number2:
      return `Max number is ${number1}`;
    case number1 < number2:
      return `Max number is ${number2}`;
    default:
      return `Both numbers are equal`;
  }
};

const evenOrOddNumber = (number) => {
  if (!number) return "Please enter a number";
  switch (true) {
    case number % 2 === 0:
      return "Even";
      break;
    case number % 2 !== 0:
      return "Odd";
      break;
    default:
      return "Invalid";
      break;
  }
};

const isPositiveOrNegative = (number) => {
  if (!number) return "Please enter a number";
  switch (true) {
    case number > 0:
      return "Positive";
    case number < 0:
      return "Negative";
    case number == 0:
      return "Zero";
    default:
      return "Invalid";
  }
};

const simpleCalc = (number1, number2, operator) => {
  if (!number1 || !number2 || !operator)
    return "Please enter a number or an operation sign";
  switch (operator) {
    case "+":
      return `The Sum: ${+number1 + +number2}`;
    case "-":
      return `The Subtract: ${+number1 - +number2}`;
    case "*":
      return `The Multiplication: ${+number1 * +number2}`;
    case "/":
      return `The division: ${+number1 / +number2}`;
    default:
      return "Invalid Operator";
  }
};

const functions = [
  {
    name: "Simple Print",
    execute: simplePrint,
    img: "./img/simple-print.png",
  },
  {
    name: "Is divided by 3 and 4?",
    execute: isDivideBy3And4,
    img: "./img/3-and-4.jpg",
  },
  {
    name: "Max Number",
    execute: maxNumber,
    img: "./img/max.webp",
  },
  {
    name: "Positive or Negative",
    execute: positiveOrNegative,
    img: "./img/pn.jpg",
  },
  {
    name: "Max and Min",
    execute: maxAndMin,
    img: "./img/mm.webp",
  },
  {
    name: "Even or Odd",
    execute: evenOrOdd,
    img: "./img/eo.jpg",
  },
  {
    name: "Is Vowel",
    execute: isVowel,
    img: "./img/vowel.png",
  },
  {
    name: "Print All Numbers",
    execute: printAllNumbers,
    img: "./img/numbers.png",
  },
  {
    name: "Multiple Table up to 12",
    execute: multipleTableUpTo12,
    img: "./img/12.png",
  },
  {
    name: "Even Numbers",
    execute: evenNumbers,
    img: "./img/even.png",
  },
  {
    name: "Power",
    execute: power,
    img: "./img/power.png",
  },
  {
    name: "Summary",
    execute: summary,
    img: "./img/summary.jpg",
  },
  {
    name: "Days In Month",
    execute: daysInMonth,
    img: "./img/days.jpg",
  },
  {
    name: "Calculate Grad",
    execute: calcGrad,
    img: "./img/grad.jpg",
  },
  {
    name: "Num Days Of Month",
    execute: numDaysOfMonth,
    img: "./img/month.png",
  },
  {
    name: "Check Vowel",
    execute: checkVowel,
    img: "./img/vowels.png",
  },
  {
    name: "Maximum Number",
    execute: maximumNumber,
    img: "./img/max.jpg",
  },
  {
    name: "Even or Odd",
    execute: evenOrOddNumber,
    img: "./img/evenOrodd.png",
  },
  {
    name: "Is Positive or Negative",
    execute: isPositiveOrNegative,
    img: "./img/posOrnig.jpg",
  },
  {
    name: "Simple Calc",
    execute: simpleCalc,
    img: "./img/calc.jpg",
  },
];

function setupFunction(functionObj, functionElement) {
  const nameEl = functionElement.querySelector(".fun__name");
  const inputElements = functionElement.querySelectorAll("input");
  const outputElement = functionElement.querySelector(".fun__output");

  const executeFunction = functionObj.execute;

  const btn = functionElement.querySelector(".fun__btn");
  btn.addEventListener("click", () => {
    const inputValues = Array.from(inputElements).map((input) => input.value);
    const outputValue = executeFunction(...inputValues);
    outputElement.textContent = outputValue;
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const functionsContainer = document.querySelector(".functions");

  functions.forEach((functionObj) => {
    const functionArticle = createHTMLElement("article", ["function"]);
    const functionImg = createHTMLElement("img", ["fun__img"]);
    functionImg.src = functionObj.img;
    const functionData = createHTMLElement("div", ["fun__data"]);
    const functionName = createHTMLElement(
      "h3",
      ["fun__name"],
      functionObj.name
    );

    const inputCount = functionObj.execute.length;
    const functionInputs = [];
    for (let i = 0; i < inputCount; i++) {
      const inputElement = createHTMLElement(
        "input",
        ["fun__input"],
        "",
        "Enter a number"
      );
      if (functionObj.name === "Summary" || functionObj.name.includes("Grad")) {
        inputElement.type = "text";
        inputElement.placeholder = "Enter comma-separated numbers";
      } else if (functionObj.name.includes("Vowel")) {
        inputElement.type = "text";
        inputElement.placeholder = "Enter a char";
      } else if (functionObj.name === "Simple Calc" && i === 2) {
        inputElement.type = "text";
        inputElement.placeholder = "Enter the operation sign";
      } else {
        inputElement.type = "number";
      }
      functionInputs.push(inputElement);
    }

    const functionOutput = createHTMLElement("span", ["fun__output"]);

    const functionButton = createHTMLElement(
      "button",
      ["fun__btn"],
      "Calculate"
    );

    functionArticle.appendChild(functionImg);
    functionArticle.appendChild(functionData);
    functionData.appendChild(functionName);
    functionInputs.forEach((input) => functionData.appendChild(input));
    functionArticle.appendChild(functionButton);
    functionArticle.appendChild(functionOutput);

    functionsContainer.appendChild(functionArticle);

    setupFunction(functionObj, functionArticle);
  });
});
