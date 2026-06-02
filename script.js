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
  // fetchMetadata(user_url);
});

const passPreview = document.querySelector(".pass-preview");

function generatePass(url) {
  const textElement = document.createElement("p");
  textElement.textContent = "Creating pass for: " + url;
  passPreview.prepend(textElement);
  textElement.classList.add("pass-content");

  const confirmButton = document.querySelector(".download");
  confirmButton.url = "https://romax.co.uk"; // Store the URL in a custom property of the button
  confirmButton.addEventListener("click", () => {
    open(confirmButton.url, "_blank"); // Open the URL in a new tab
    // alert("Pass created for: " + url);
  });
}

// async function fetchMetadata(url) {
//   const inputUrl = document.getElementById("url_input").value;

//   const response = await fetch(
//     `https://api.microlink.io/?url=${encodeURIComponent(url)}`,
//   );

//   const data = await response.json();

//   document.getElementById("logo").src = data.data.logo?.url || "";

//   document.getElementById("title").textContent = data.data.title || "Untitled";

//   document.getElementById("description").textContent =
//     data.data.description || "";
// }
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
async function fetchMetadata(url) {
  fetch_title(url);
  fetch_icon(url);
  fetch_description(url);
  fetch_html_file(url);
}
