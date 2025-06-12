import { authentification } from "./auth.js";

document.querySelector('#loginForm').addEventListener('submit', async (e) => {
  e.preventDefault();

  const email = document.querySelector('#email').value;
  const password = document.querySelector('#password').value;

  const users = await authentification();
  const user = users.find(u => u.email === email && u.password === password);

  if (user) {
    localStorage.setItem('user', JSON.stringify(user));
    window.location.href = "/dashboard.html";
  } else {
    alert("Email ou mot de passe incorrect.");
  }
});
