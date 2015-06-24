var request = new XMLHttpRequest();


request.onload = function() {
	if (request.status >= 200 && request.status < 400) {
		var suggestions = JSON.parse(request.responseText);
		setSuggestions(suggestions);
	} else {
		// We reached our target server, but it returned an error

	}
};
request.open('GET', 'getSuggestions.php', true);
request.send();


function display(suggestions) {
	suggestions.forEach(function(suggestion) {

		console.log("Title: " + suggestion.title + " Description: " + suggestion.description + " Location: " + suggestion.location + " Image Link: " + suggestion.imageLink); // 

	})
}

function setSuggestions(suggestions, current) {

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