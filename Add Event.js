function Listitem(title,description,location){
    this.title=title;
    this.description = description;
    this.location = location;
   
}
            function addEvent(){
                document.getElementById('add').style.display="block";
            
                // need to display the output if the inputed text var output = 
           
               //document.getElementById("thebucketlist").appendChild(title);
                //document.body.removeChild(add);
            }
                
                function record(){
                    var title = document.getElementById("title").value;
                    var description = document.getElementById("description").value;
                    var location = document.getElementById("location").value;
                   var listitem = new Listitem(title,description,location);
                   addtolist(listitem);
                   display();
                    console.log(location + " " + description + " " + title)
                }
        function addtolist(listitem){
            
            if(localStorage["mylist"]==null){
                var mylist = [listitem];
                localStorage["mylist"] = JSON.stringify(mylist);
            }
            else{
                var mylist = JSON.parse(localStorage["mylist"]);
                mylist.push(listitem);
                 localStorage["mylist"] = JSON.stringify(mylist);
            }
        }
            function display(){
                var mylist = JSON.parse(localStorage["mylist"]);
               
              for(var i =0;i < mylist.length;i++){
                  var listitem =  document.createElement("LI");
                  var itemtext = document.createTextNode(mylist[i].title + " " + mylist[i].description +" "+ mylist[i].location);
                  listitem.appendChild(itemtext);
                 
              }
              document.getElementById("thebucketlist").appendChild(listitem);
            }
        function hide(){
            document.getElementById('add').style.display="none";
        }
  