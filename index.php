<!DOCTYPE html>
<html>
    <head>
        <title>Bucket List App</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">

<script src='getSuggestions.js'></script>
<script src='swipeCode.js'></script>
<script src='overlay.js'></script>


<link href = "style.css" rel = "stylesheet" type = "text/css">
<link href = "overlay.css" rel ="stylesheet" type ="text/css">

</head>
    
 <body>                  
        <!--This Div will contain the Logo and will one of these colors
       #5C604D	#FFBAD2	#F20056	#E5E7E1	#C8CFB4	#A3AE7E--> 
        <div id = "header">
            <img src = "images/Signing_the_contract_64.png" alt = "bucket list">
        </div>
        
        <div id = "feed">
        <!--This div will hold the swipe button that leads the the activity feed -->
           <div class = "activityOne"><p><img src = "images/John_Muir_c1902.jpg" align = "left" height = "60px" width "60px">John Muir checked Off "Discovered "The Yosemite Trail" and "Learned how to use a Smart Phone" from his Bucket List!</p></div>

<div class = "activityTwo"><img src = "images/Leroy-Jenkins.jpg" align = "left" height = "60px" width "60px"><p>Leroy Jenkins added to his bucket list "Go into Battle Prepared"</p></div>

<div class = "activityThree"><img src = "images/freakazoid.jpg" align = "left" height = "60px" width "60px"><p>Freakazoid added an event to the suggestions "Go to Hawaii and meet Hula Girls!"</p></div>

<div class = "activityFour"><img src = "images/broken_image.jpg" align = "left" height = "60px" width "60px"><p>Robert checked off "Stop being Single" from his Bucket List (Just Kidding, but I needed a fourth slot)</p></div>
        </div>
		<div id="loginScreen">
 
		<div id = "nameTitle" align="center">
		<a href="#" class="cancel">&times;</a> 
		<h3>What is your event?</h3>
		<input type = "text">
		</div>

		<div id = "descriptionOfEvent" align="center">
		<h6>What do you do?</h6>

		<input type = "text" id = "description" align="center"></input>

		<button id = "image" type = "button" onclick = "imageUpload()" ><img src = "camera.png"></button>

		<button id = "add" type = "button" onclick = "uploadEvent()">Add</button>

		</div>

		</div> 
		<div id="cover" onClick = "cancel()"> </div>
        
<div id = "suggestions" ontouchstart="swipeDetecter.touchStartHandler(event)" 
                        ontouchend="swipeDetecter.touchEndHandler(event)" 
                        ontouchmove="swipeDetecter.touchMoveHandler(event)">
            <!--This div will hold the swipe button that leads the the suggestions feed-->

</div>

<div id = "footer">
            <div id = "myBucket"><a href="w3schools.com"><img src = "images/Bucket_32.png" alt = "Bucket Icon"></a></div>
             <div id ="createEvent" onClick="showDiv()"><img src = "images/Add_anchor_point_32.png" alt = "Add to List Icon"></div>
 
</div>
</body>
</html>