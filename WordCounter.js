

input = document.getElementById("in");
input.value = "C:\\>";

input.addEventListener("keyup", function(event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    var yourText = {
      words: input.value,
      wordCount: null,
      simpleWords: null,
      passiveVerbs: null
    }
    input.value = "C:\\>";
    console.log(yourText.words);
    words = yourText.words.substring(4, yourText.words.length-1);
    console.log(words);
    document.getElementById("w").innerHTML = words;
    document.getElementById("w").innerHTML = words;
    arr = words.split(" ");
    num = arr.length;
    document.getElementById("wc").innerHTML = num;
  }
});
