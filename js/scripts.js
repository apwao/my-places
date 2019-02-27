//Business Logic
function Places(name,location,time,landmark,review){
  this.name = name;
  this.location = location;
  this.time = time;
  this.landmark = landmark;
  this.review = review;
}
Places.prototype.viewLocation = function(){
  return this.name + "," + this.location;
};

//User Logic
$(document).ready(function(){
  $(".well form").submit(function(event){
    event.preventDefault();
    var myName = $("input#my-name").val();
    var myLocation = $("input#my-location").val();
    var mySeason = $("input#time-season").val();
    var myLandmark = $("input#my-landmarks").val();
    var myReview = $("input#my-review").val();

    var newPlace = new Places(myName, myLocation, mySeason, myLandmark, myReview);
    $(".well ul").append("<li><span class='display'>" + newPlace.viewLocation() + "</span></li>")

    
  });
});
