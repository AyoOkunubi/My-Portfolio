
(function() {
emailjs.init("YOUR_EMAILJS_USER_ID"); // Replace EmailJS user ID
})();

document.getElementById("contactForm").addEventListener("submit", function(event) {
event.preventDefault(); 

// Collect form data
const name = document.getElementById("name").value;
const email = document.getElementById("email").value;
const message = document.getElementById("message").value;

// Send data via EmailJS
emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
    name: name,
    email: email,
    message: message
}).then(function(response) {
    console.log("SUCCESS!", response.status, response.text);
    document.getElementById("successMessage").style.display = "block";
    document.getElementById("errorMessage").style.display = "none";
    document.getElementById("contactForm").reset();
}, function(error) {
    console.log("FAILED...", error);
    document.getElementById("errorMessage").style.display = "block";
    document.getElementById("successMessage").style.display = "none";
});
});
