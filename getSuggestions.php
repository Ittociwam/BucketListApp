<?php
include 'suggestion.php';

//$suggestions = new array();

//$suggestions[] = new Suggestion();

$suggestions[] = new Suggestion("Grand Canyon National Park", "Grand Canyon National Park is the United States' 15th oldest national park"
	, "images/GrandCanyon.jpg", "36.0553° N, 112.1218° W", "Arizona");
$suggestions[] = new Suggestion("Great Barrier Reef", "The Great Barrier Reef, off the coast of Queensland in northeastern Australia, is the largest living thing on Earth, and even visible from outer space. The 2,300km-long ecosystem comprises thousands of reefs and hundreds of islands made of over 600 types of hard and soft coral. It's home to countless species of colourful fish, molluscs and starfish, plus turtles, dolphins and sharks."
	, "images/GreatBarrierReef.jpg", "20.2675° S, 148.7169° E", "Australia" );
$suggestions[] = new Suggestion("Big Ben", "Big Ben is the nickname for the Great Bell of the clock at the north end of the Palace of Westminster in London, and often extended to refer to the clock and the clock tower."
	, "images/BigBen.jpg", "Coordinates: 51.5008° N, 0.1247° W", "Westminster, London SW1A 0AA, United Kingdom");
$suggestions[] = new Suggestion("Leaning Tower of Piza", "The Leaning Tower of Pisa or simply the Tower of Pisa is the campanile, or freestanding bell tower, of the cathedral of the Italian city of Pisa, known worldwide for its unintended tilt to one side."
	, "images/Piza.jpg", "43.7231° N, 10.3964° E", "Piazza del Duomo, 56126 Pisa PI, Italy");
$suggestions[] = new Suggestion("The World Islands", "The World or World Islands is an artificial archipelago of various small islands constructed in the rough shape of a world map, located in the waters of the Persian Gulf, 4.0 kilometres off the coast of Dubai, United Arab Emirates"
	, "images/Islands.jpg", "25°13′00″N 55°10′00″E", "Dubai");
$suggestions[] = new Suggestion("Space", "the area beyond the limit of the Earth's atmosphere"
	, "images/Space.jpg", "N/A", "N/A");
$suggestions[] = new Suggestion("Space", "the area beyond the limit of the Earth's atmosphere"
	, "images/Space.jpg", "N/A", "N/A");
$suggestions[] = new Suggestion("Space", "the area beyond the limit of the Earth's atmosphere"
	, "images/Space.jpg", "N/A", "N/A");
$suggestions[] = new Suggestion("Grand Canyon National Park", "Grand Canyon National Park is the United States' 15th oldest national park"
	, "images/GrandCanyon.jpg", "36.0553° N, 112.1218° W", "Arizona");
$suggestions[] = new Suggestion("Grand Canyon National Park", "Grand Canyon National Park is the United States' 15th oldest national park"
	, "images/GrandCanyon.jpg", "36.0553° N, 112.1218° W", "Arizona");
$suggestions[] = new Suggestion("Grand Canyon National Park", "Grand Canyon National Park is the United States' 15th oldest national park"
	, "images/GrandCanyon.jpg", "36.0553° N, 112.1218° W", "Arizona");
$suggestions[] = new Suggestion("Grand Canyon National Park", "Grand Canyon National Park is the United States' 15th oldest national park"
	, "images/GrandCanyon.jpg", "36.0553° N, 112.1218° W", "Arizona");
$suggestions[] = new Suggestion("Great Barrier Reef", "The Great Barrier Reef, off the coast of Queensland in northeastern Australia, is the largest living thing on Earth, and even visible from outer space. The 2,300km-long ecosystem comprises thousands of reefs and hundreds of islands made of over 600 types of hard and soft coral. It's home to countless species of colourful fish, molluscs and starfish, plus turtles, dolphins and sharks."
	, "images/GreatBarrierReef.jpg", "20.2675° S, 148.7169° E", "Australia" );
$suggestions[] = new Suggestion("Great Barrier Reef", "The Great Barrier Reef, off the coast of Queensland in northeastern Australia, is the largest living thing on Earth, and even visible from outer space. The 2,300km-long ecosystem comprises thousands of reefs and hundreds of islands made of over 600 types of hard and soft coral. It's home to countless species of colourful fish, molluscs and starfish, plus turtles, dolphins and sharks."
	, "images/GreatBarrierReef.jpg", "20.2675° S, 148.7169° E", "Australia" );
$suggestions[] = new Suggestion("Great Barrier Reef", "The Great Barrier Reef, off the coast of Queensland in northeastern Australia, is the largest living thing on Earth, and even visible from outer space. The 2,300km-long ecosystem comprises thousands of reefs and hundreds of islands made of over 600 types of hard and soft coral. It's home to countless species of colourful fish, molluscs and starfish, plus turtles, dolphins and sharks."
	, "images/GreatBarrierReef.jpg", "20.2675° S, 148.7169° E", "Australia" );
$suggestions[] = new Suggestion("Great Barrier Reef", "The Great Barrier Reef, off the coast of Queensland in northeastern Australia, is the largest living thing on Earth, and even visible from outer space. The 2,300km-long ecosystem comprises thousands of reefs and hundreds of islands made of over 600 types of hard and soft coral. It's home to countless species of colourful fish, molluscs and starfish, plus turtles, dolphins and sharks."
	, "images/GreatBarrierReef.jpg", "20.2675° S, 148.7169° E", "Australia" );
$suggestions[] = new Suggestion("The World Islands", "The World or World Islands is an artificial archipelago of various small islands constructed in the rough shape of a world map, located in the waters of the Persian Gulf, 4.0 kilometres off the coast of Dubai, United Arab Emirates"
	, "images/Islands.jpg", "25°13′00″N 55°10′00″E", "Dubai");
$suggestions[] = new Suggestion("The World Islands", "The World or World Islands is an artificial archipelago of various small islands constructed in the rough shape of a world map, located in the waters of the Persian Gulf, 4.0 kilometres off the coast of Dubai, United Arab Emirates"
	, "images/Islands.jpg", "25°13′00″N 55°10′00″E", "Dubai");
$suggestions[] = new Suggestion("The World Islands", "The World or World Islands is an artificial archipelago of various small islands constructed in the rough shape of a world map, located in the waters of the Persian Gulf, 4.0 kilometres off the coast of Dubai, United Arab Emirates"
	, "images/Islands.jpg", "25°13′00″N 55°10′00″E", "Dubai");
$suggestions[] = new Suggestion("The World Islands", "The World or World Islands is an artificial archipelago of various small islands constructed in the rough shape of a world map, located in the waters of the Persian Gulf, 4.0 kilometres off the coast of Dubai, United Arab Emirates"
	, "images/Islands.jpg", "25°13′00″N 55°10′00″E", "Dubai");


// foreach($suggestions as $suggestion){
// echo $suggestion->display();
// }

echo json_encode($suggestions);


?>