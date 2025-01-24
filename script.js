// Check if the username and password are stored in localStorage
window.onload = function () {
  const savedUsername = localStorage.getItem("username");
  const savedPassword = localStorage.getItem("password");

  // If there are saved login details, display the "Login as existing user" button
  if (savedUsername && savedPassword) {
    document.getElementById("existing").style.display = "inline-block";
    document.getElementById("existing").addEventListener("click", function () {
      alert(`Logged in as ${savedUsername}`);
    });
  }
};

// Handle form submission
document.getElementById("login-form").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent the form from reloading the page
  
  // Get the form values
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const rememberMe = document.getElementById("checkbox").checked;

  // If "Remember me" is checked, store username and password in localStorage
  if (rememberMe) {
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
  } else {
    // If "Remember me" is unchecked, remove username and password from localStorage
    localStorage.removeItem("username");
    localStorage.removeItem("password");
  }

  // Show an alert after submission
  alert(`Logged in as ${username}`);
});
