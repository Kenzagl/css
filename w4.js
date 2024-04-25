(function(window) {
	var speakWord = "Good Bye";
	var bSpeak = function (name) {
  		console.log(speakWord + " " + name);
	}
	window.bSpeak = bSpeak;
})(window);

(function(window) {
	var speakWord = "Hello";
	var hSpeak = function (name) {
		console.log(speakWord + " " + name);
	}

	window.hSpeak = hSpeak;

})(window);

(function () {

var names = ["Jamila", "Kamal", "Laila", "Paul", "Jasone", "Frank", "Kenza", "Pauline", "Lara", "Jime"];

for (var i = 0; i < names.length; i++) {
  var firstLetter = names[i].charAt(0).toLowerCase();

  if (firstLetter === 'j') {
    byeSpeaker(names[i]);
  }
  else {
    helloSpeaker(names[i]);
  }
}
})();