const API_KEY = import.meta.env.VITE_NASA_API_KEY;
const app = document.querySelector("#app");
const clock = document.querySelector("#clock");
import "./style.css";

function updateClock() {
  clock.textContent = new Date().toLocaleTimeString();
}

updateClock();
setInterval(updateClock, 1000);

app.innerHTML = "<p>Loading...</p>";

fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`)
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    let media;

    if (data.media_type === "image") {
      media = `<img src="${data.url}" alt="${data.title}">`;
    } else {
      media = `<video src="${data.url}" controls></video>`;
    }

    app.innerHTML = `
      <h1>${data.title}</h1>
      ${media}
      <p>${data.explanation}</p>
    `;
  })
  .catch(err => {
    console.error(err);
    app.textContent = `Error: ${err.message}`;
  });
