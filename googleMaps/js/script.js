var geocoder;
var map;


function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 8,
    center: {lat: -34.397, lng: 150.644}
  });

  geocoder = new google.maps.Geocoder();

  document.getElementById('submit').addEventListener('click', function() {
    geocodeAddress(geocoder, map);
  });
}

function geocodeAddress(geocoder, resultsMap) {
  var address = document.getElementById('address').value;
  geocoder.geocode({'address': address}, function(results, status) {
    if (status === google.maps.GeocoderStatus.OK) {
      resultsMap.setCenter(results[0].geometry.location);
      // var marker = new google.maps.Marker({
      //   map: resultsMap,
      //   position: results[0].geometry.location
      // });
    } else {
      alert('Geocode was not successful for the following reason: ' + status);
    }
  });
}











// var map;
// var service;
// var infowindow;
      
// function initMap() {
//   var pyrmont = new google.maps.LatLng(-33.8665433,151.1956316);

//   map = new google.maps.Map(document.getElementById('map'), {
//     center: pyrmont,
//     zoom: 15
//   });

//   var request = {
//     location: pyrmont,
//     radius: '500',
//     query: 'restaurant'
//   };

//   service = new google.maps.places.PlacesService(map);
//   service.textSearch(request, callback);
// }

// function callback(results, status) {
//   if (status == google.maps.places.PlacesServiceStatus.OK) {
//     for (var i = 0; i < results.length; i++) {
//       var place = results[i];
//       createMarker(place);
//     }
//   }
// }

// function createMarker(place) {

//   var position = {'lat': place.geometry.location.lat(), 'lng': place.geometry.location.lng()};
//   var marker = new google.maps.Marker({
//     position: position,
//     map: map,
//     title: place.name,
//     draggable:false,
//     animation: google.maps.Animation.DROP
//   });


//   infowindow = null;
//   infowindow = new google.maps.InfoWindow({
//     content: place.name
//   });

//   marker.addListener('click', function() {
//     infowindow.setContent(place.name);
//     infowindow.open(map, marker);
//   });
// }





