async function searchWord() {
  const word = document.getElementById("wordInput").value;
  const resultDiv = document.getElementById("result");

  if (!word) {
    resultDiv.innerText = "Please enter a word.";
    return;
  }

  const response = await fetch(`/api/define?word=${word}`);
  const data = await response.json();

  resultDiv.innerHTML = `<strong>${data.word}</strong>: ${data.meaning}`;
}
