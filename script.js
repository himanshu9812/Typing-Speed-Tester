let startTime, endTime;

async function fetchRandomQuote() {
  try {
    const response = await fetch("https://api.quotable.io/random");
    const data = await response.json();
    return data.content;
  } catch (error) {
    console.error("Error fetching quote:", error);
    return "Practice daily to become a better coder."; // fallback quote
  }
}

async function startTest() {
  const quote = await fetchRandomQuote();
  document.getElementById("quote").innerText = quote;
  document.getElementById("input").value = "";
  document.getElementById("result").innerText = "";
  document.getElementById("input").focus();
  startTime = new Date().getTime();
}

document.getElementById("input").addEventListener("input", function () {
  const typedText = this.value;
  const originalText = document.getElementById("quote").innerText;

  if (typedText.length === originalText.length) {
    endTime = new Date().getTime();
    const totalTime = (endTime - startTime) / 1000;
    const wordCount = originalText.trim().split(/\s+/).length;

    if (typedText === originalText) {
      const speed = Math.round((wordCount / totalTime) * 60);
      document.getElementById("result").innerText = `Your speed: ${speed} WPM`;
    } else {
      document.getElementById("result").innerText = "Text is incorrect. Try again!";
    }
  } else {
    document.getElementById("result").innerText = ""; // keep result empty while typing
  }
});

startTest();
