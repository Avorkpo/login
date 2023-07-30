// Define a list of valid users (for demonstration purposes only)
const validUsers = [
    { username: "user1", password: "password1" },
    { username: "user2", password: "password2" }
  ];
  
  // Function to handle form submissions
  function handleFormSubmit(event, redirectPage) {
    event.preventDefault();
    const username = document.getElementById("username")?.value;
    const password = document.getElementById("password")?.value;
  
    // Check if the submitted credentials match any valid user
    const user = validUsers.find(u => u.username === username && u.password === password);
    if (user) {
      // For simplicity, we'll just store the username and login status in local storage
      localStorage.setItem("username", user.username);
      localStorage.setItem("isLoggedIn", "true");
  
      // Redirect to the desired page
      window.location.href = redirectPage;
    } else {
      alert("Invalid credentials. Please try again.");
    }
  }
  
  // Function to check if the user is logged in and show their name on the profile page
  function checkLoggedIn() {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (isLoggedIn === "true") {
      const username = localStorage.getItem("username");
      const userNameElement = document.getElementById("user-name");
      if (userNameElement) {
        userNameElement.innerText = username;
      }
    } else {
      // If the user is not logged in, redirect them to the login page
      window.location.href = "login.html";
    }
  }
  
  // Event listener for form submission on the login page
  const loginForm = document.getElementById("login-form");
  if (loginForm) {
    loginForm.addEventListener("submit", function(event) {
      handleFormSubmit(event, "profile.html");
    });
  }
  
  // Check if the user is logged in on the profile page load
  if (window.location.pathname === "/profile.html") {
    checkLoggedIn();
  }
  