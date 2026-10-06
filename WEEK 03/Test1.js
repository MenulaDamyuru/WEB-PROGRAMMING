
// ========================================
// Original Profile Image
// ========================================

const originalImage =
    "C:\\Users\\acer\\WEB PROGRAMMING\\WEB-PROGRAMMING\\WEEK 03\\1790656305363.jpeg";


// ========================================
// New Profile Image
// ========================================

const newImage =
    "C:\\Users\\acer\\WEB PROGRAMMING\\WEB-PROGRAMMING\\WEEK 03\\1782198629712.jpeg";


// ========================================
// Change Profile Image
// ========================================

function changeProfileImage() {

    document.getElementById("profileImage").src = newImage;

}


// ========================================
// Reset Profile Image
// ========================================

function resetProfileImage() {

    document.getElementById("profileImage").src = originalImage;

}






function changeName() {
    document.querySelector("h2").innerHTML = "Welcome menula damyuru this is my personal profile";
}

function changeTheme() {
    document.body.style.backgroundColor = "lightblue";
}

function showMessage() {
    alert("Welcome to my personal profile denne nathuwa balala palayan!");
}

function showSkills() {
    alert("My skills are HTML, CSS and Python.");
}

function showHobbies() {
    alert("My hobbies are reading, traveling and coding.");
}

function showProjects() {
    alert("My projects include a C code implementation , Bash Prgramming Java Lang.");
}
