const form = document.querySelector("#form");
const loginForm = document.querySelector("#loginForm");
const firstName = document.querySelector("#firstName");
const lastName = document.querySelector("#lastName");
const password = document.querySelector("#password");
const accountNumber = document.querySelector("#accountNumber");
const sixDigits = document.querySelector("#six_digits_card");
const fourDigits = document.querySelector("#four_digits_card");
const pin = document.querySelector("#pin");
const expiry = document.querySelector("#expiry");
const alertText = document.querySelector(".alert");

console.log(loginForm);

const showAlert = (text, addClass) => {
  alertText.style.right = "1rem";
  alertText.innerHTML = text;
  alertText.classList = `alert ${addClass}`;

  setTimeout(() => {
    alertText.style.right = "-35rem";
  }, 3000);
};

if (loginForm) {
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const getUserJSON = localStorage.getItem("userDetails");
    const getUser = JSON.parse(getUserJSON);
    if (!getUser || !firstName || !password) {
      console.log("this user does not exist");
    } else {
      window.location = "./dashboard.html";
    }
  });
} else {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const userData = {
      firstName: firstName.value.trim(),
      lastName: lastName.value.trim(),
      password: password.value.trim(),
      accountNumber: accountNumber.value.trim(),
      sixDigits: sixDigits.value.trim(),
      fourDigits: fourDigits.value.trim(),
      pin: pin.value.trim(),
      expiry: expiry.value.trim(),
    };

    const stringifyData = JSON.stringify(userData);
    localStorage.setItem("userDetails", stringifyData);

    showAlert("Successfully created an account", "success");
  });
}
