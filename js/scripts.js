//Business Logic
function Places(name,location,time,landmark,review){
  this.name = name;
  this.location = location;
  this.time = time;
  this.landmark = landmark;
  this.review = review;
}
Places.prototype.viewLocation = (function(){
  return this.name + this.location;
});
