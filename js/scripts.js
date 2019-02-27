//Business Logic
function Places(name,location,time,landmark,review){
  this.name = name;
  this.location = location;
  this.time = time;
  this.landmark = landmark;
  this.review = review;
}
Places.prototype.viewLocation = (function(){
  return this.name + "," + this.location;
});

//User Logic
$(document).ready(function(){
  $(".well#places").submit(function(
    var myName = $("#my-name").val();
    var myLocation = $("#my-location").vall();
    var mySeason = $("#time-season").val();
    var myLandmark = $("#my-landmarks").val();
    var myReview = $("#my-review").val();
  ))
})
