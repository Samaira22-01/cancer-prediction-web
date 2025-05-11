// Array of users with their usernames and passwords
const users = [
    { username: 'admin', password: 'admin123' },
    { username: 'user1', password: 'user1pass' },
    { username: 'user2', password: 'user2pass' },
    // Add more users as needed
  ];
  
  document.getElementById("registerForm").addEventListener("submit", function(event) {
    event.preventDefault();  // Prevent the default form submission
  
    // Get the new user credentials
    const newUsername = document.getElementById("newUsername").value;
    const newPassword = document.getElementById("newPassword").value;
  
    // Check if the username already exists
    const existingUser = users.find(user => user.username === newUsername);
  
    if (existingUser) {
      // Show error if the username already exists
      document.getElementById("errorMessage").style.display = "block";
    } else {
      // Add new user to the list (for simplicity, we just push it to the array)
      users.push({ username: newUsername, password: newPassword });
  
      // Show success message
      document.getElementById("registrationMessage").style.display = "block";
  
      // Optionally, you can redirect to login after a few seconds
      setTimeout(() => {
        window.location.href = "login.html";
      }, 3000);
    }
  });
  