function calculateAverage() {
// Get the input values
var name = document.getElementById("name").value;
var section = document.getElementById("section").value;
var year = document.getElementById("year").value;


// Check if name, section, and year are empty
if (name === "" || section === "" || year === "") {
alert("Please input the student name, section, and year level before calculating the average.");
return;
}

// Get the grade values
var grade1 = parseFloat(document.getElementById("grade1").value);
var grade2 = parseFloat(document.getElementById("grade2").value);
var grade3 = parseFloat(document.getElementById("grade3").value);
var grade4 = parseFloat(document.getElementById("grade4").value);
var grade5 = parseFloat(document.getElementById("grade5").value);

// Check if any grade is empty
if (isNaN(grade1) || isNaN(grade2) || isNaN(grade3) || isNaN(grade4) || isNaN(grade5)) {
var resultElement = document.getElementById("result");
resultElement.innerHTML = "Please input all grades first!";

return;
}

// Calculate the average
var average = (grade1 + grade2 + grade3 + grade4 + grade5) / 5;

// Get the result element
var resultElement = document.getElementById("result");

// Clear previous content and classes
resultElement.innerHTML = "";
resultElement.className = "result";

// Display the result based on average
if (average > 90) {
resultElement.textContent = "With honors. Average: " + average.toFixed(2);
resultElement.classList.add("honors");
} else if (average >= 75 && average <= 90) {
resultElement.textContent = "Passed. Average: " + average.toFixed(2);
resultElement.classList.add("passed");
} else {
resultElement.textContent = "Failed. Average: " + average.toFixed(2);
resultElement.classList.add("failed");
}
}