let map;

function iniciarMap() {
  var coord = {lat: 38.4977163,lng: -0.2566557};
  var map = new google.maps.Map(document.getElementById('api'),{
    zoom: 15,
    center: coord
  });
  var marker = new google.maps.Marker({
    position: coord,
    map: map
  })
}
iniciarMap();