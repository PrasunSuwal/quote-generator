let quotes = {
  science: [
    "Somewhere, something incredible is waiting to be known. – Carl Sagan",
    "The good thing about science is that it’s true whether or not you believe in it. – Neil deGrasse Tyson",
    "Research is what I'm doing when I don't know what I'm doing.” – Wernher von Braun",
  ],
  philosophy: [
    "He who thinks great thoughts, often makes great errors. – Martin Heidegger",
    "To live is to suffer, to survive is to find some meaning in the suffering. – Friedrich Nietzsche",
    "Man is nothing else but what he makes of himself. – Jean-Paul Sartre",
  ],
  romantic: [
    "Love is composed of a single soul inhabiting two bodies. – Aristotle",
    "I saw that you were perfect, and so I loved you. Then I saw that you were not perfect and I loved you even more. – Angelita Lim",
    "In all the world, there is no heart for me like yours. – Maya Angelou",
  ],
};

let currentCategory = "science";
let currentIndex = 0;
let fontSize = 18;

let quoteText = document.getElementById("quoteText");
let categorySelect = document.getElementById("categorySelect");
let themeToggle = document.getElementById("theme-toggle");

function showQuote() {
  let currentQuotes = quotes[currentCategory];
  quoteText.innerText = currentQuotes[currentIndex];
}

categorySelect.addEventListener("change", function () {
  currentCategory = categorySelect.value;
  currentIndex = 0;
  showQuote();
});

document.getElementById("nextBtn").addEventListener("click", function () {
  let currentQuotes = quotes[currentCategory];
  currentIndex++;
  if (currentIndex >= currentQuotes.length) {
    currentIndex = 0;
  }
  showQuote();
});

document.getElementById("prevBtn").addEventListener("click", function () {
  let currentQuotes = quotes[currentCategory];
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = currentQuotes.length - 1;
  }
  showQuote();
});

document.getElementById("randomBtn").addEventListener("click", function () {
  let currentQuotes = quotes[currentCategory];
  let randomIndex = Math.floor(Math.random() * currentQuotes.length);
  currentIndex = randomIndex;
  showQuote();
});

document
  .getElementById("increaseFontBtn")
  .addEventListener("click", function () {
    fontSize += 2;
    quoteText.style.fontSize = fontSize + "px";
  });

document
  .getElementById("decreaseFontBtn")
  .addEventListener("click", function () {
    if (fontSize > 12) {
      fontSize -= 2;
      quoteText.style.fontSize = fontSize + "px";
    }
  });

modeToggle.addEventListener("change", function () {
  document.body.classList.toggle("dark", modeToggle.checked);
});

window.onload = function () {
  showQuote();
};
