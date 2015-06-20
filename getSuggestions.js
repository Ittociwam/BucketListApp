var request = new XMLHttpRequest();


request.onload = function() {
  if (request.status >= 200 && request.status < 400) {
    var suggestions = JSON.parse(request.responseText);
    display(suggestions);
  } else {
    // We reached our target server, but it returned an error

  }
};
request.open('GET', 'getSuggestions.php', true);
request.send();


function display(suggestions){
	suggestions.forEach(function(suggestion){

		console.log("Title: " + suggestion.title + " Description: " 
		+ suggestion.description + " Location: " 
		+ suggestion.location + " Image Link: " 
		+ suggestion.imageLink); // 

	})
}