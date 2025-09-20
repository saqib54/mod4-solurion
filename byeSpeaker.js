// byeSpeaker.js
(function (window) {
  var byeSpeaker = {};
  var speakWord = "Goodbye";

  byeSpeaker.speak = function (name) {
    console.log(speakWord + " " + name);

    // create a card element
    var card = document.createElement("div");
    card.className = "card goodbye";
    card.textContent = speakWord + " " + name;
    document.getElementById("output").appendChild(card);
  };

  window.byeSpeaker = byeSpeaker;
})(window);
