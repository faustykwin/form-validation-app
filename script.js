const $name = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const form = document.getElementById("myForm");
const errorMsg = document.getElementById("errorMsg");


form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = $name.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    if (name === "" || emailValue === "" || passwordValue === "") {
        errorMsg.textContent = "All fields are required!";
        return;
    }
    if (!emailValue.includes("@") || !emailValue.includes(".")) {
        errorMsg.textContent = "Enter a valid email!";
        return;
    }
    if (passwordValue.length < 6) {
        errorMsg.textContent = "Password must be at least 6 characters!";
        return;
    }
    errorMsg.style.color = "green";
    errorMsg.textContent = "Form submitted successfully 🎉";
});

