//API key: AIzaSyBuwHlBYqGfCLvdwwYAIj2tcfKZVXWOJb0
// Create the script tag, set the appropriate attributes
var script = document.createElement('script');
script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyBuwHlBYqGfCLvdwwYAIj2tcfKZVXWOJb0&callback=initMap';
script.async = true;


window.addEventListener("load", init);

function init(){

  let cafes = {
    "c1": {lat: 47.659522, lng: -122.305335, marker: null},
    "c2": {lat: 47.658660, lng: -122.306450, marker: null},
    "c3": {lat: 47.655606, lng: -122.305138, marker: null},
    "c4": {lat: 47.653485, lng: -122.305857, marker: null},
    "c5": {lat: 47.623505, lng: -122.346581, marker: null},
    "c6": {lat: 47.655075, lng: -122.300670, marker: null},
    "c7": {lat: 47.659471, lng: -122.310807, marker: null},
    "c8": {altlat: 47.657624, lng: -122.310223, marker: null},
    "c9": {lat: 47.656646, lng: -122.310352, marker: null},
    "c10": {lat: 47.655985, lng:-122.308139, marker: null},
    "c11": {lat: 47.654915, lng:-122.311728, marker: null},
    "c12": {lat: 47.652562, lng:-122.309875, marker: null},
    "c13": {lat: 47.655164, lng:-122.308013, marker: null},
    "c14": {lat: 47.651186, lng:-122.309062, marker: null}
  };

  let restaurants = {
    "r1": {lat: 47.655562, lng: -122.305073, marker: null},
    "r2": {lat: 47.659834, lng: -122.304659, marker: null},
    "r3": {lat: 47.659350, lng: -122.308555, marker: null},
    "r4": {lat: 47.660476, lng: -122.311613, marker: null},
    "r5": {lat: 47.656552, lng: -122.315360, marker: null},
    "r6": {lat: 47.656036, lng: -122.314946, marker: null}
  };

  let microwaves = {
    "m1": {lat: 47.660505, lng: -122.311634, marker: null},
    "m2": {lat: 47.659296, lng: -122.308623, marker: null},
    "m3": {lat: 47.656675, lng: -122.310385, marker: null},
    "m4": {lat: 47.655265, lng: -122.308056, marker: null},
    "m5": {lat: 47.655562, lng: -122.305138, marker: null},
    "m6": {lat: 47.653846, lng: -122.306077, marker: null},
    "m7": {lat: 47.658660, lng: -122.306471, marker: null},
    "m8": {lat: 47.653504, lng: -122.311772, marker: null}
  };

  let bikeStorages = {
    "b1": {lat: 47.65865462102465, lng: -122.30863145362446, marker: null},
    "b2": {lat: 47.6596004297463, lng: -122.31047138725602, marker: null},
    "b3": {lat: 47.65862041437269, lng: -122.31255605086196, marker: null},
    "b4": {lat: 47.65694356618999, lng: -122.31639132398179, marker: null},
    "b5": {lat: 47.65592165982552, lng: -122.31623512189222, marker: null},
    "b6": {lat: 47.651485785704004, lng: -122.30818748765226, marker: null},
    "b7": {lat: 47.65912584048532, lng: -122.30396827623234, marker: null},
    "b8": {lat: 47.65662643509925, lng: -122.3097125577863, marker: null},
    "b9": {lat: 47.64877471846109, lng: -122.30623016281824, marker: null},
    "b10": {lat: 47.66140758215455, lng: -122.31237119122447, marker: null}
  };

  let busStops = {
    "bu1": {lat: 47.65330520684684, lng: -122.31440571562307, marker: null},
    "bu2": {lat: 47.65213853746557, lng: -122.30861758896559, marker: null},
    "bu3": {lat: 47.65569001087286, lng: -122.31205221369227, marker: null},
    "bu4": {lat: 47.659856809175956, lng: -122.31432230899648, marker: null},
    "bu5": {lat: 47.66122334574748, lng: -122.31364525070707, marker: null},
    "bu6": {lat: 47.65722769227644, lng: -122.30469455048545, marker: null},
    "bu7": {lat: 47.650481373320744, lng: -122.30431482330758, marker: null},
    "bu8": {lat: 47.65575102267354, lng: -122.31846674681749, marker: null},
    "bu9": {lat: 47.661199816450726, lng: -122.29612669673793, marker: null}
  };


  let studySpaces = {
    "s1": {lat: 47.6546109714988, lng: -122.30445177437208, marker: null},
    "s2": {lat: 47.65641553915502, lng: -122.31035287251878, marker: null},
    "s3": {lat: 47.655697911496176, lng: -122.30792853204447, marker: null},
    "s4": {lat: 47.653541569072146, lng: -122.30468074062412, marker: null},
    "s5": {lat: 47.65487040284316, lng: -122.30792904368262, marker: null},
    "s6": {lat: 47.65905059504227, lng: -122.30836616695915, marker: null},
    "s7": {lat: 47.65469910251131, lng: -122.3115893976487, marker: null}
  };

  // checkboxId -> item object
  const itemForCheckbox = new Map([
    ["food-3", microwaves],
    ["food-1", cafes],
    ["food-2", restaurants],
    ["transportation1", bikeStorages],
    ["transportation2", busStops],
    ["name-space1", studySpaces]
  ]);

  let map, infoWindow;
  // Attach your callback function to the `window` object
  window.initMap = function() {
    // JS API is loaded and available
    var mapOptions = {
      center: new google.maps.LatLng(47.655932, -122.307825),
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
    };

    var map = new google.maps.Map(document.getElementById('map'), mapOptions);

    // Adding Markers
    addMarkers(microwaves, map, "http://maps.google.com/mapfiles/ms/icons/electronics.png");
    addMarkers(bikeStorages, map, "http://maps.google.com/mapfiles/ms/icons/cycling.png");
    addMarkers(cafes, map, "http://maps.google.com/mapfiles/kml/pal2/icon62.png");
    addMarkers(restaurants, map, "http://maps.google.com/mapfiles/kml/pal2/icon32.png");
    addMarkers(studySpaces, map, "http://maps.google.com/mapfiles/kml/pal4/icon8.png");
    addMarkers(busStops, map,  "http://maps.google.com/mapfiles/ms/icons/bus.png");


    infoWindow = new google.maps.InfoWindow();
    const locationButton = document.getElementById("locationButton");

    locationButton.textContent = "Show Current Location";
    locationButton.classList.add("custom-map-control-button");
    map.controls[google.maps.ControlPosition.TOP_RIGHT].push(locationButton);
    locationButton.addEventListener("click", () => {
      // Try HTML5 geolocation.
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            };

            infoWindow.setPosition(pos);
            infoWindow.setContent("You are here!");
            infoWindow.open(map);
            // map.setCenter(pos);
          },
          () => {
            handleLocationError(true, infoWindow, map.getCenter());
          }
        );
      } else {
        // Browser doesn't support Geolocation
        handleLocationError(false, infoWindow, map.getCenter());
      }
    });
  }


  // Append the 'script' element to 'head'
  document.head.appendChild(script);

  checkboxListener();

  // Add all makers of itemType object to the map
  function addMarkers(itemType, Map, images) {
    // Create an info window to share between markers.
    const infoWindow = new google.maps.InfoWindow();
    const image = images;
    // https://maps.gstatic.com/mapfiles/place_api/icons/v2/bus_share_taxi_pinlet.svg
    // const image =
    // "https://www.pngfind.com/pngs/m/65-653904_icono-cafe-png-cafe-icon-transparent-png.png";
  /*
    let itemArray = Object.keys(itemType);
    let num = itemArray.length;
    for(let i = 0; i < num; i++){

      let key = itemArray[i];

      let item = itemType[key];

      const marker = new google.maps.Marker({
        position: { lat: item[lat], lng: item[lng] },
        Map,
        icon: image,
        //shape: shape,
        title: item[title]
      });
      */


      Object.entries(itemType).forEach(([key, value]) => {
          const marker = new google.maps.Marker({
            position: { lat: value["lat"], lng: value["lng"] },
            Map,
            icon: image,
            //shape: shape,
            title: key
          });

          marker.setVisible(false);

          marker.addListener("click", () => {
            infoWindow.close();
            infoWindow.setContent(marker.getTitle());
            infoWindow.open(marker.getMap(), marker);
          });

          // Store the marker reference in itemType object
          value["marker"] = marker;
      });

    }

  function checkboxListener() {
    document.querySelectorAll('input[type="checkbox"]').forEach(
      (checkbox) => {
        checkbox.addEventListener("change", function() {
          // alert(this.checked);
          if(this.checked){
            Object.values(itemForCheckbox.get(this.id)).forEach((value)=>value["marker"].setVisible(true));
          } else {
            Object.values(itemForCheckbox.get(this.id)).forEach((value)=>value["marker"].setVisible(false));
          }
        });
      });
  }

  function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(
      browserHasGeolocation
        ? "Error: The Geolocation service failed."
        : "Error: Your browser doesn't support geolocation."
    );
    infoWindow.open(map);
  }
}