// services/authService.js
export async function login(email, password) {
  const response = await fetch(`http://localhost:3001/users?email=${email}&password=${password}`);
  const data = await response.json();

  if (data.length > 0) {
    localStorage.setItem('user', JSON.stringify(data[0]));
    return data[0];
  } else {
    throw new Error("Identifiants invalides");
  }
}

export function logout() {
  localStorage.removeItem('user');
}

export function getCurrentUser() {
  return JSON.parse(localStorage.getItem('user'));
}

