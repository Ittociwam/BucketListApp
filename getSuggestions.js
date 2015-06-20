var request = new XMLHttpRequest();
request.open('GET', 'getSuggestions.php', true);

request.onload = function() {
  if (request.status >= 200 && request.status < 400) {
    // Success!
    var suggestions = JSON.parse(request.responseText);
    display(suggestions);
  } else {
    // We reached our target server, but it returned an error

  }
};


function display(suggestions){
	suggestions.forEach(function(suggestion){
		console.log(suggestion.title);
	})
}