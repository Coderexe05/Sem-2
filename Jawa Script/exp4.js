function calculateGrades() {
    let numSubjects = parseInt(prompt("How many subjects do you have?"));
    
    if (isNaN(numSubjects) || numSubjects <= 0) {
        alert("Please enter a valid number of subjects.");
        return;
    }

    let totalMarks = 0;
    let marksList = [];

    for (let i = 1; i <= numSubjects; i++) {
        let marks = parseFloat(prompt(`Enter marks for Subject ${i}:`));
        
        if (isNaN(marks)) marks = 0; 
        
        marksList.push(marks);
        totalMarks += marks;
    }

    let average = totalMarks / numSubjects;
    let result = "";
    let grade = "";

    if (average >= 40) {
        result = "PASS";
        if (average >= 90) grade = "A+";
        else if (average >= 75) grade = "A";
        else if (average >= 60) grade = "B";
        else grade = "C";
    } else {
        result = "FAIL";
        grade = "F";
    }

    const display = document.getElementById("displayArea");
    display.innerHTML = `
        <div class="result-box">
            <h3>Result Summary</h3>
            <p>Total Marks: <strong>${totalMarks}</strong></p>
            <p>Average: <strong>${average.toFixed(2)}%</strong></p>
            <p>Grade: <strong>${grade}</strong></p>
            <p>Status: <strong style="color: ${result === 'PASS' ? 'green' : 'red'}">${result}</strong></p>
        </div>
    `;
}