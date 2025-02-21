document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.getElementById("menu-icon");
    const navLinks = document.querySelector(".nav-links");
    const welcomeMessage = document.getElementById("welcome-message");
    const timeElement = document.getElementById("time");
    const userName = localStorage.getItem("loggedInUserName");

    // Display the current time and update every second
    function updateTime() {
        if (timeElement) {
            timeElement.textContent = new Date().toLocaleTimeString();
        }
    }
    updateTime();
    setInterval(updateTime, 1000);

    // Show personalized welcome message
    document.addEventListener("DOMContentLoaded", function () {
        const welcomeMessage = document.getElementById("welcome-message");
        let userName = localStorage.getItem("loggedInUserName");
    
        if (userName && userName.trim() !== "") {
            welcomeMessage.textContent = `Hello, ${userName}!`;
        } 
        else {
            welcomeMessage.textContent =  `Hello, ${userName}!`;
        }
    });
console.log("loggedInUserName", userName);
    

    // Toggle menu visibility when clicking the menu icon
    menuIcon.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });

    // Close menu when clicking outside of it
    document.addEventListener("click", (event) => {
        if (!menuIcon.contains(event.target) && !navLinks.contains(event.target)) {
            navLinks.classList.remove("active");
        }
    });

    // Navigate to pages based on the clicked item with class "sign-items"
    document.querySelectorAll(".sign-items").forEach((item) => {
        item.addEventListener("click", (event) => {
            const pageName = event.target.textContent.trim();
            location.href = `./${pageName}.html`;
        });
    });
});
window.onload = function() {
    const userInfo = JSON.parse(localStorage.getItem("loggedInUser"));

    if (userInfo) {
        const currentHour = new Date().getHours();
        let greeting = "Hello";
        if (currentHour < 12) {
            greeting = "Good Morning";
        } else if (currentHour < 18) {
            greeting = "Good Afternoon";
        } else {
            greeting = "Good Evening";
        }

        document.getElementById("welcomeMessage").innerText = `${greeting}, ${userInfo.userName}!`;
    }
};

// Function to initiate a call or WhatsApp chat
function initiateCall() {
    const userChoice = confirm("Do you want a video call?\nOK for Video Call, Cancel for Audio Call.");
    const phoneNumber = "09158030398"; // Local format for direct calls
    const whatsappNumber = "2349158030398"; // Full international format for WhatsApp (without +)

    if (userChoice) {
        window.location.href = `https://wa.me/${whatsappNumber}`; // Open WhatsApp chat
    } else {
        window.location.href = `tel:${phoneNumber}`; // Make an audio call
    }
}
