var requestURL = "https://api.wheretheiss.at/v1/satellites/25544";

var request = new XMLHttpRequest();

request.open('GET', requestURL);

request.responseType = 'json';
request.send();

request.onload = function() {
  console.log(request.response);
  $("#demo").text("The " + request.response.name + " is currently at the following position: Lat: " + request.response.latitude + ", Lng: " + request.response.longitude + ".");
}


