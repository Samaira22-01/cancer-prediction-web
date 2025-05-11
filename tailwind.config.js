/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./index.html", // Main HTML file
      "./login/**/*.html", // If your login page is in the 'login' folder
      "./symptomchecker/**/*.html", // Symptom checker page
      "./dashboard/**/*.html", // Dashboard page
      "./consultation/**/*.html", // Consultation page
      "./contactsupport/**/*.html", // Contact support page
      "./chatbot/**/*.html", // Chatbot page
      "./register/**/*.html", // Register page
    ],
    theme: {
      extend: {},
    },
    plugins: [],
  }
  