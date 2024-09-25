function show_login() {
    document.querySelector(".js-signup-form").classList.add("hide");
    document.querySelector(".js-login-form").classList.remove("hide");
    document.querySelector(".js-welcome-page").classList.add("hide");
  
    document.querySelector(".login-button").classList.add("button-selected");
    document.querySelector(".signup-button").classList.remove("button-selected");
  
   
    document.querySelector(".login-button").style.display = "block";
    document.querySelector(".signup-button").style.display = "block";
  }
  
  function show_signup() {
    document.querySelector(".js-login-form").classList.add("hide");
    document.querySelector(".js-signup-form").classList.remove("hide");
    document.querySelector(".js-welcome-page").classList.add("hide");
  
    document.querySelector(".signup-button").classList.add("button-selected");
    document.querySelector(".login-button").classList.remove("button-selected");
  
    
    document.querySelector(".login-button").style.display = "block";
    document.querySelector(".signup-button").style.display = "block";
  }
  
  function show_welcome(username) {
    document.querySelector(".js-login-form").classList.add("hide");
    document.querySelector(".js-signup-form").classList.add("hide");
    document.querySelector(".js-welcome-page").classList.remove("hide");
  
    document.getElementById("welcomeUsername").innerText = username;
  
   
    document.querySelector(".login-button").style.display = "none";
    document.querySelector(".signup-button").style.display = "none";
  }
  
 
  function signup() {
    let username = document.getElementById("signupUsername").value;
    let email = document.getElementById("signupEmail").value;
    let password = document.getElementById("signupPassword").value;
  
    if (username && email && password) {
      let users = JSON.parse(localStorage.getItem("users")) || {};
  
      if (!users[email]) {
        users[email] = { username, password };
        localStorage.setItem("users", JSON.stringify(users));
        alert("Account created successfully!");
        show_login();
      } else {
        alert("Email is already registered!");
      }
    } else {
      alert("Please fill out all fields.");
    }
  }
  
  
  function login() {
    let email = document.getElementById("loginEmail").value;
    let password = document.getElementById("loginPassword").value;
  
    let users = JSON.parse(localStorage.getItem("users")) || {};
  
    if (users[email] && users[email].password === password) {
      
      show_welcome(users[email].username);
    } else {
      alert("Invalid email or password.");
    }
  }
  
  
  function logout() {
    show_login();
  }