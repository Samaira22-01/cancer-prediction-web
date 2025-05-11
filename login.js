// Handle the login form submission
document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent the form from submitting normally

  // Get username and password values
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Check if the username and password fields are filled in (for simplicity, no actual validation here)
  if (username && password) {
    // Simulate a login process (you can add actual logic here if needed)
    document.getElementById("loading").style.display = "block";  // Show loading message
    document.getElementById("loginBtn").disabled = true;        // Disable login button during login

    setTimeout(function() {
      // After 2 seconds, simulate a successful login
      // Redirect to the "about.html" page
      window.location.href = "dashboard.html";
    }, 2000); // Delay for simulation of a login process
  } else {
    // Display an error message if the fields are not filled out
    document.getElementById("errorMessage").style.display = "block";
  }
});
