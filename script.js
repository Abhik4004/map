var mapContainer = document.getElementById("map");

function startTracking() {
  if ("geolocation" in navigator) {
    navigator.geolocation.watchPosition(showPosition);
  } else {
    alert("Geolocation is not supported by your browser.");
  }
}

function showPosition(position) {
  var latitude = position.coords.latitude;
  var longitude = position.coords.longitude;
  var altitude = position.coords.altitude;
  var heading = position.coords.heading;

  mapContainer.innerHTML = `<iframe width="100%" height="100%" src="https://maps.google.com/maps?q=${latitude},${longitude}&amp;output=embed"></iframe>`;

  console.log("Latitude: " + latitude);
  console.log("Longitude: " + longitude);
  console.log("Altitude: " + altitude);
  console.log("Heading: " + heading);
}
