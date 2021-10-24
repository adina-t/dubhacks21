//API key: AIzaSyBuwHlBYqGfCLvdwwYAIj2tcfKZVXWOJb0
// Create the script tag, set the appropriate attributes
var script = document.createElement('script');
script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyBuwHlBYqGfCLvdwwYAIj2tcfKZVXWOJb0&callback=initMap';
script.async = true;

// Attach your callback function to the `window` object
window.initMap = function() {
  // JS API is loaded and available
  var mapOptions = {
    center: new google.maps.LatLng(47.655932, -122.307825),
    zoom: 15,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  
  var map = new google.maps.Map(document.getElementById('map'), mapOptions);

  // Adding Markers
  addMicrowaveMarkers();


}

// Append the 'script' element to 'head'
document.head.appendChild(script);

addMicrowaveMarkers() {
  const image =
  "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png";
  const beachMarker = new google.maps.Marker({
    position: { lat: 47.655932, lng: -122.307825 },
    map,
    icon: image,
  });

  //doc: https://developers.google.com/maps/documentation/javascript/markers

}