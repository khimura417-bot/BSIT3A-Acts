// ==========================================
// 1. VARIABLES (Minimum 3)
// ==========================================
let totalStudentsCount = 3;
let passingThreshold = 75;
let assignmentWeight = "100%";

// ==========================================
// 2. ARRAYS (Minimum 3)
// ==========================================
let studentNames = ["Alice", "Bob", "Charlie"];
let studentGrades = [85, 70, 55];
let finalStatuses = [];

// ==========================================
// 3. LOOPS (Minimum 3)
// ==========================================

// Loop 1: For loop to process and check student grades
for (let i = 0; i < studentNames.length; i++) {
    let currentGrade = studentGrades[i];
    
    // ==========================================
    // 4. CONDITIONALS (Minimum 3)
    // ==========================================
    if (currentGrade >= passingThreshold) {
        finalStatuses.push("Passed");
    } else if (currentGrade >= 60) {
        finalStatuses.push("Needs Remedial");
    } else {
        finalStatuses.push("Failed");
    }
}

// Loop 2: While loop to print a summary of each student
let counter = 0;
while (counter < totalStudentsCount) {
    console.log(studentNames[counter] + " got a grade of " + studentGrades[counter] + " - Status: " + finalStatuses[counter]);
    counter++;
}

// Loop 3: Do-While loop to print a simple completion notification
let notificationCount = 0;
do {
    console.log("Recap processing completed successfully!");
    notificationCount++;
} while (notificationCount < 1);
