document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Stop the form from refreshing
​
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const responseMessageElement = document.getElementById("responseMessage");
​
    // Clear previous messages and classes
    responseMessageElement.textContent = "";
    responseMessageElement.classList.remove("success-message", "error-message");
​
    if (name && email && message) {
        // --- Success State ---
        responseMessageElement.textContent = `Fantastic, ${name}! Your message has been sent. We'll get back to you shortly.`;
        responseMessageElement.classList.add("success-message"); // Add a class for success styling
​
        // Optional: Simulate an actual submission (e.g., fetch API call)
        // For now, we'll just log to console and clear the form
        console.log("Form submitted successfully:", { name, email, message });
​
        // Clear form after a short delay for user to read message
        setTimeout(() => {
            this.reset(); // 'this' refers to the form element
            responseMessageElement.textContent = ""; // Clear message after reset
            responseMessageElement.classList.remove("success-message");
        }, 3000); // Clear after 3 seconds
        
    } else {
        // --- Error State ---
        responseMessageElement.textContent = "Oops! It looks like you missed a spot. Please fill in all the details.";
        responseMessageElement.classList.add("error-message"); // Add a class for error styling
    }
});
