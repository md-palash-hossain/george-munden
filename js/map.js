var map;
var InforObj = [];
let infoWindow;

/* map deafult Coordinates loaction */
var centerMap = {
  lat: 40.685044,
  lng: -111.870192,
};
var markersOnMap = [
  {
    placeName: "GEORGE A. MUNDEN",
    address: "4001 S 700 E Suite 500, Salt Lake City, UT ",
    // date: "May 25, 2019",
    // hour: "4:00 pm",
    LatLng: [
      {
        lat: 40.685044,
        lng: -111.870192,
      },
    ],
  },
];

window.onload = function () {
  initMap();
};

function addMarker() {
  var image = {
    /* marker url */
    url: "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png",
    // This marker is 20 pixels wide by 32 pixels high.
    size: new google.maps.Size(20, 32),
    // The origin for this image is (0, 0).
    origin: new google.maps.Point(0, 0),
    // The anchor for this image is the base of the flagpole at (0, 32).
    anchor: new google.maps.Point(0, 32),
    labelOrigin: new google.maps.Point(0, 42),
  };

  /* Create markers loop */
  for (var i = 0; i < markersOnMap.length; i++) {
    /* A. Create html data for the markers */
    var contentString =
      '<div id="content"><h2>' +
      markersOnMap[i].placeName +
      "</h2><p>" +
      markersOnMap[i].address +
      "</p><date>" +
      markersOnMap[i].date +
      "</date><p>" +
      markersOnMap[i].hour +
      "</p></div>";

    /* B. generate markers position and label */
    const marker = new google.maps.Marker({
      position: markersOnMap[i].LatLng[0],
      map: map,
      label: {
        text: markersOnMap[i].placeName,
        color: "#050505",
        fontSize: "16px",
        fontWeight: "1000",
      },
      icon: image,
    });

    const infowindow = new google.maps.InfoWindow({
      content: contentString,
    });

    marker.addListener("click", function () {
      closeOtherInfo();
      infowindow.open(marker.get("map"), marker);
      InforObj[0] = infowindow;
    });

    google.maps.event.addListener(map, "click", function (event) {
      infowindow.close();
    });
  } /* end marker loop */
}

function closeOtherInfo() {
  if (InforObj.length > 0) {
    /* detach the info-window from the marker ... undocumented in the API docs */
    InforObj[0].set("marker", null);
    /* and close it */
    InforObj[0].close();
    /* blank the array */
    InforObj.length = 0;
  }
}

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 10,
    center: centerMap,
  });

  addMarker();
}

// current location
function geoFindMe() {
  const status = document.querySelector("#status");
  const mapLink = document.querySelector("#map-link");

  mapLink.href = "";
  mapLink.textContent = "";

  function success(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    status.textContent = "";
  }

  function error() {
    status.textContent = "Unable to retrieve location ";
  }

  if (!navigator.geolocation) {
    status.textContent = "Geolocation is not supported by your browser";
  } else {
    status.textContent = "Locating…";
    navigator.geolocation.getCurrentPosition(success, error);
  }
}

document.querySelector("#find-me").addEventListener("click", geoFindMe);

// new map window

// open new window
function goDirection() {
  window.open(
    "https://www.google.com/maps/dir/${latitude},${longitude}/23.313014,89.138899",
    "_blank",
    "toolbar=yes,scrollbars=yes,resizable=yes,top=100,left=200,width=1200,height=700%"
  );
}
