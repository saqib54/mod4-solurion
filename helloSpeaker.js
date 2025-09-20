// helloSpeaker.js
(function (window) {
  var helloSpeaker = {};
  var speakWord = "Hello";

  helloSpeaker.speak = function (name) {
    console.log(speakWord + " " + name);

    // create a card element
    var card = document.createElement("div");
    card.className = "card hello";
    card.textContent = speakWord + " " + name;
    document.getElementById("output").appendChild(card);
  };

  window.helloSpeaker = helloSpeaker;
})(window);
