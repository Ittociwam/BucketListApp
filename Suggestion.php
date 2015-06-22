<?php
class Suggestion{
	public $title;
	public $description;
	public $imageLink;
	public $coordinates;
	public $location;

	function __construct($title, $description, $imageLink, $coordinates, $location){
		$this->title = $title;
		$this->description = $description;
		$this->imageLink = $imageLink;
		$this->coordinates = $coordinates;
		$this->location = $location;
	}

	function display(){
		echo "<h1>$this->title</h1><img src='$this->imageLink' alt ='an activity picture'/> <br/> $this->description <br/>";
	}
}


?>