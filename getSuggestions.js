window.onload = function() {
	localStorage["current"] = 0;
	getSuggestions();
	setSuggestions(JSON.parse(localStorage["suggestions"]), localStorage["current"])
	document.getElementById("suggestions").addEventListener("click", function() {
		localStorage["current"] = parseInt(localStorage["current"]) + 4;
		getSuggestions();
		setSuggestions(JSON.parse(localStorage["suggestions"]), localStorage["current"])

	});
}

function getSuggestions() {
	if (localStorage["suggestions"] == null) {
		var request = new XMLHttpRequest();
		request.onreadystatechange = function() {
			if (request.status == 200 && request.readyState == 4) {
				var suggestionsString = request.responseText;
				localStorage["suggestions"] = suggestionsString;
			}
		};
		request.open('GET', 'getSuggestions.php', false);
		request.send();
	}
}

function setSuggestions(suggestions, current) {

	current = parseInt(current)

	if (!(current >= suggestions.length || current < 0)) {
		current = current || 0;
		var element = document.getElementById("suggestions");
		while (element.firstChild) { // make sure old one is cleared out
			element.removeChild(element.firstChild);
		}

		for (var i = 0; i < 4; i++) {
			var sugDiv = document.createElement("DIV");
			var sugImg = document.createElement("IMG");
			var sugTitle = document.createElement("H1");
			//var sugDesc = document.createElement("P");
			console.log(suggestions[i + current]);
			var sugTitleText = document.createTextNode(suggestions[i + current].title);
			sugTitle.appendChild(sugTitleText);
			//var srcDescText = document.createTextNode(suggestion.description);
			sugImg.src = suggestions[i + current].imageLink;
			sugTitle.className = "suggestionTitle";
			sugDiv.appendChild(sugImg);
			sugDiv.appendChild(sugTitle);
			sugDiv.className = "suggestion";

			element.appendChild(sugDiv);
		}
	}

}


function photoDisplay(suggestions) {
	console.log(suggestions.stringify());
	suggestions.forEach(function(suggestion) {
		var a = suggestion.title;
		document.getElementById("title").innerHTML = a;
		var b = suggestion.imageLink;
		document.getElementById("pic").innerHTML = b;
		var c = suggestion.location;
		document.getElementById("location").innerHTML = c;
		var d = suggestion.description;
		document.getElementById("description").innerHTML = d;
	});
}


function display(suggestions) {
	suggestions.forEach(function(suggestion) {
		console.log("Title: " + suggestion.title + " Description: " + suggestion.description + " Location: " + suggestion.location + " Image Link: " + suggestion.imageLink);
	})
}