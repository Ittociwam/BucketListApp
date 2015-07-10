window.onload = function() {
	localStorage["current"] = 0;
	getSuggestions();
	setSuggestions(JSON.parse(localStorage["suggestions"]), localStorage["current"])

	var suggestionsDiv = document.getElementById('suggestions')


	suggestionsDiv.swipeDetecter = new SwipeDetecter(suggestionsDiv);
	console.log(suggestionsDiv);
	//var swipeDetecter = new SwipeDetecter(suggestionsDiv);
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

function setSuggestions(suggestions, current, swipe) {

	current = parseInt(current)

	if (!(current >= suggestions.length || current < 0)) {
		current = current || 0;
		var suggestionsDiv = document.getElementById("suggestions");
		while (suggestionsDiv.firstChild) { // make sure old one is cleared out
			suggestionsDiv.removeChild(suggestionsDiv.firstChild);
		}

		for (var i = 0; i < 4; i++) {
			var sugDiv = document.createElement("DIV");
			var sugImg = document.createElement("IMG");
			var sugTitle = document.createElement("H1");


			sugDiv.suggestion = suggestions[i + current];


			var sugTitleText = document.createTextNode(suggestions[i + current].title);
			sugTitle.appendChild(sugTitleText);
			sugImg.src = sugDiv.suggestion.imageLink;
			sugTitle.className = "suggestionTitle";
			sugImg.className = "suggestionImg"
			sugDiv.appendChild(sugImg);
			sugDiv.appendChild(sugTitle);
			sugDiv.className = "suggestion";



			sugDiv.touchHandle =  function() {
				if (swipe == false || swipe == null) {
					var displaySug = document.createElement("DIV");
					var displayImage = document.createElement("IMG");
					displayImage.src = this.suggestion.imageLink;
					var feed = document.getElementById("feed");
					while (feed.hasChildNodes()) {
						feed.removeChild(feed.lastChild);
					}
					feed.appendChild(displayImage);
				}
			};

			suggestionsDiv.appendChild(sugDiv);
			swipe = false;
		}
	}

}


// function photoDisplay(suggestions) {
// 	console.log(suggestions.stringify());
// 	suggestions.forEach(function(suggestion) {
// 		var a = suggestion.title;
// 		document.getElementById("title").innerHTML = a;
// 		var b = suggestion.imageLink;
// 		document.getElementById("pic").innerHTML = b;
// 		var c = suggestion.location;
// 		document.getElementById("location").innerHTML = c;
// 		var d = suggestion.description;
// 		document.getElementById("description").innerHTML = d;
// 	});
// }


function display(suggestions) {
	suggestions.forEach(function(suggestion) {
		console.log("Title: " + suggestion.title + " Description: " + suggestion.description + " Location: " + suggestion.location + " Image Link: " + suggestion.imageLink);
	})
}

function handleSwipe(swipedir){
		getSuggestions();
		//swipedir contains either "none", "left", "right", "top", or "down"
		console.log(JSON.parse(localStorage["suggestions"]).length);
		console.log(parseInt(localStorage["current"]));
		var swipe = false;

		if (swipedir == 'left' && parseInt(localStorage["current"]) < JSON.parse(localStorage["suggestions"]).length) {
			console.log('You just swiped: ' + swipedir)
			localStorage["current"] = parseInt(localStorage["current"]) + 4;
			swipe = true;
		} else if (swipedir == 'right' && parseInt(localStorage["current"]) > 0) {
			console.log('You just swiped: ' + swipedir)
			localStorage["current"] = parseInt(localStorage["current"]) - 4;
			swipe = true
		} else {
			console.log("What happened?: " + swipedir);
			swipe = false;
		}
		setSuggestions(JSON.parse(localStorage["suggestions"]), localStorage["current"], swipe)
}

function otherTouchHandle(touchedThing){

	console.log("classname of touched thing: " + touchedThing.className)
	var class_name = touchedThing.className;

	if(class_name.includes('suggestion')){

		// if the thing touched is not the suggestion div but is inside of it, get it's parent aka the suggestion div
		touchedThing = class_name == 'suggestion' ? touchedThing : touchedThing.parentElement;

		console.log(touchedThing)
		touchedThing.touchHandle()
	}
}


function SwipeDetecter(swipeSurface) {
	console.log("in swipedetect!");

	this.handleSwipe = handleSwipe
	var startX
	var startY
	var target
	var endX
	var endY
	var startTime
	var endTime
	var distX
	var distY
	var MAX_TIME = 350
	var THRESHOLD = 100
	var RESTRAINT = 100
	MIN_DIST_X = 100
	var swipedir
	this.touchStartHandler = function(touchEvent) {
		console.log("in swipe ontouch");

		for (var i = 0; i < touchEvent.touches.length; i++) {
			console.log(touchEvent.touches[i]);
		}

		startTime = new Date().getTime()

		startPoint = touchEvent.touches[0]
		startX = startPoint.pageX
		startY = startPoint.pageY
		target = touchEvent.target
		touchEvent.preventDefault()
		swipedir = 'none'
	}

	this.touchMoveHandler = function(touchEvent) {
		console.log("moving!")

		touchEvent.preventDefault()
	}

	this.touchEndHandler = function(touchEvent) {
		console.log("end")

		endPoint = touchEvent.changedTouches[0]

		endX = endPoint.pageX
		endY = endPoint.pageY
		distY = endY - startY
		distX = endX - startX
		touchEvent.preventDefault
		endTime = new Date().getTime()

		console.log("target: ")
		console.log(target)
		console.log("elapsedTime: " + (endTime - startTime))
		console.log("distx: " + Math.abs(distX))


		// if start target and end target don't match and the time elapsed is less than our max time var
		if (Math.abs(distX) > MIN_DIST_X && endTime - startTime < MAX_TIME) {
			console.log("SWIPEEEEE")
			// we have a swipe
			if (Math.abs(distX) >= THRESHOLD && Math.abs(distY) <= RESTRAINT) {
				swipedir = (distX < 0) ? 'left' : 'right' 
			} else if (Math.abs(distY) >= THRESHOLD && Math.abs(distX) <= RESTRAINT) {
				swipedir = (distY < 0) ? 'up' : 'down'
			}
			console.log("swipe" + swipedir)

			handleSwipe(swipedir)

		}

		//otherwise it's not a swipe but lets still check and see if the target touched needs to be handled
		else
		{
			console.log("not a swipe")
			otherTouchHandle(target)
		}

	}
}