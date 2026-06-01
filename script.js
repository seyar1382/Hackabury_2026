// const element1;
// const element2;
// const element3;
// const element4;

let user_url = "";

const button = document.querySelector("button");
button.addEventListener("click", () => {
  user_url = document.getElementById("url_input").value;
  console.log(user_url);
  generatePass(user_url);
});

const passPreview = document.querySelector(".pass-preview");

function generatePass(url) {
  const textElement = document.createElement("p");
  textElement.textContent = "Creating pass for: " + url;
  passPreview.appendChild(textElement);
  textElement.classList.add("pass-content");
}

const passContent = document.querySelector(".pass-js");

const colorPicker = document.querySelector(".color-picker");
colorPicker.addEventListener("input", (event) => {
  passContent.style.backgroundColor = event.target.value;
});

const logo = document.createElement("img");
logo.src = "images/cccu.webp"; // Replace with the actual path to your logo image
logo.alt = "Logo";
logo.classList.add("pass-logo");
passContent.appendChild(logo);

// const passContent = document.querySelector(".pass-js");
// passContent.classList.add("pass-content");
