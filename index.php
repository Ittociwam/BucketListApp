<!DOCTYPE html>
<html>
    <head>
        <title>Bucket List App</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">

<script src='getSuggestions.js'></script>
<script src='swipeCode.js'></script>


<link href = "style.css" rel = "stylesheet" type = "text/css">

</head>
    
 <body>                  
        <!--This Div will contain the Logo and will one of these colors
       #5C604D	#FFBAD2	#F20056	#E5E7E1	#C8CFB4	#A3AE7E--> 
        <div id = "header">
            <img src = "images/Signing_the_contract_64.png" alt = "bucket list">
        </div>
        
        <div id = "feed">
        <!--This div will hold the swipe button that leads the the activity feed -->
            <strong>Activity</strong>
        </div>
        
<div id = "suggestions" ontouchstart="swipeDetecter.touchStartHandler(event)" 
                        ontouchend="swipeDetecter.touchEndHandler(event)" 
                        ontouchmove="swipeDetecter.touchMoveHandler(event)">
            <!--This div will hold the swipe button that leads the the suggestions feed-->

</div>

<div id = "footer">
            <div id = "myBucket"><a href="w3schools.com"><img src = "images/Bucket_32.png" alt = "Bucket Icon"></a></div>
             <div id ="createEvent"><a href="w3schools.com"><img src = "images/Add_anchor_point_32.png" alt = "Add to List Icon"></a></div>
</div>
</body>
</html>