//acionar a funcao com o click do botao

    
const button = document.getElementById("countButton");
button.addEventListener("click", limpar);
button.addEventListener("click", function () {
  
    let typedText = document.getElementById("textInput").value;
  typedText = typedText.toLowerCase();
  typedText = typedText.replace(/[^a-z'\s]+/g, "");

  //contar letras
  const letterCounts = {};

  for (let i = 0; i < typedText.length; i++) {
    currentLetter = typedText[i];
    if (letterCounts[currentLetter] === undefined) {
      letterCounts[currentLetter] = 1;
    } else {
      letterCounts[currentLetter]++;
    }
  }

  for (let letter in letterCounts) {
    const span = document.createElement("span");
    const textContent = `"${letter}": ${letterCounts[letter]}, `;
    span.innerText = textContent;
    const letters = document.getElementById("lettersDiv");
    letters.appendChild(span);
  }

  //contar palavras
  const wordCounts = {} 
  words = typedText.split(/\s/);

  for (let i = 0; i < words.length; i++) {
    currentWord = words[i];
    if (wordCounts[currentWord] === undefined) {
      wordCounts[currentWord] = 1;
    } else {
      wordCounts[currentWord]++;
    }
  }

  for (let word in wordCounts) {
    const span = document.createElement("span");
    const textContent = `"${word}": ${wordCounts[word]}, `;
    span.innerText = textContent;
    const letters = document.getElementById("wordsDiv");
    letters.appendChild(span);
  }
});
button.addEventListener("click", limpar);

function limpar(){
    const lettersDiv = document.getElementById("lettersDiv");
    const wordsDiv = document.getElementById("wordsDiv");
    wordsDiv.innerHTML = "";
    lettersDiv.innerHTML = "";
}
