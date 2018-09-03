  var map;
  function initMap() {
    map = new google.maps.Map(document.getElementById('map-canvas'), {
      center: {lat: 40.820017, lng: -73.977012},
      zoom: 13
    });
    
      map.setOptions({styles: styles});
  
  
  var origin = new google.maps.LatLng(40.819935,-73.977059);
  var marker = new google.maps.Marker({
    position: origin,
    map: map,
    title: 'Edgewater Family Care'
  });

  marker.addListener('click', function() { window.open("https://www.google.com/maps/place/Edgewater+Family+Care/@40.8200375,-73.9771488,17.23z/data=!4m2!3m1!1s0x89c2f64c1c0ffb4d:0x2033da58fb023bff");
  });
  }

  var styles = [
    {
      "featureType": "poi",
      "stylers": [
        { "visibility": "off" }
      ]
    },{
      "featureType": "transit",
      "stylers": [
        { "visibility": "off" }
      ]
    },{
    }
  ];