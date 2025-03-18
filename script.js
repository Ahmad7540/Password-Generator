const passwordInput = document.getElementById("password");
const length = 12;
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = uppercase.toLowerCase();
const numbers = "0123456789";
const specialChars = `"!@#$%^&*()_+~|}{[]:;`;
const upper = document.getElementById("uppercase");
const lower = document.getElementById("lowercase");
const num = document.getElementById("numbers");
const special = document.getElementById("special");

function generatePass() {
  let allChars = "";
  let password = "";
  if (upper.checked) {
    password += uppercase[Math.floor(Math.random() * uppercase.length)];
    allChars += uppercase;
  }
  if (lower.checked) {
    password += lowercase[Math.floor(Math.random() * lowercase.length)];
    allChars += lowercase;
  }
  if (num.checked) {
    password += numbers[Math.floor(Math.random() * numbers.length)];
    allChars += numbers;
  }
  if (special.checked) {
    password += specialChars[Math.floor(Math.random() * specialChars.length)];
    allChars += specialChars;
  }

  if (allChars.length > 0) {
    while (length > password.length) {
      password += allChars[Math.floor(Math.random() * allChars.length)];
    }
  }

  passwordInput.value = password;
}

function passCopy() {
  password.select();
  document.execCommand("copy");
}
document.getElementById("copyPass").addEventListener("click", passCopy);
document
  .getElementById("passGenerator")
  .addEventListener("click", generatePass);
