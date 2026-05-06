//variables 
const passwordForm = document.querySelector("admin-login-form");
const button = document.querySelector("admin-login-form button");
const errorMessage = document.querySelector(".error-message");

//code logic
passwordForm.addEventListener("submit", async function (event) {
    event.preventDefault();

    button.classList.add("loading");
    button.textContent = "Loading...";

    let formData = new FormData(passwordForm);
    console.log(formData);

    const response = await fetch(passwordForm.action, { 
        method: passwordForm.method,
        body: new URLSearchParams(formData)
    });
    const responseData = await response.json();
    const parser = new DOMParser();
    const responseDOM = parser.parseFromString(responseData, "text/html");
    
})
// function decorations
function loading() {
console.log("Loading...");
}
function success() {
console.log("Login successful!");
}
function Object() {
console.log("An error occurred during login.");
}


// recentActions.insert