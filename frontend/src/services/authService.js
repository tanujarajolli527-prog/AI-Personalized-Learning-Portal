
const API_URL = "http://localhost:5000/api/auth";

async function authRequest(endpoint, userData) {
  const response = await fetch(`${API_URL}/${endpoint}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Something went wrong");
  }

  return data;
}

export function registerUser(userData) {
  return authRequest("register", userData);
}

export function loginUser(userData) {
  return authRequest("login", userData);
}
