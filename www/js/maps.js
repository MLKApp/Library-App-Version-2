var imageDir = 'images/mapoverlays/';
var lastFloor = '' + (-1);
var historicalOverlay;
var map;
var mapLoaded = false;
var prevCenter = null;
var infoWindow = new google.maps.InfoWindow({});
var markers = [];
var imageBounds = new google.maps.LatLngBounds(new google.maps.LatLng(37.334847, -121.886208), new google.maps.LatLng(37.336027, -121.883861));
var mlkLibraryGPSCoord = new google.maps.LatLng(37.335438, -121.885036);

/*var ref = window.open(encodeURI('http://library.sjsu.edu'), '_blank', 'location=no');
        // relative document
        ref = window.open('http://library.sjsu.edu');*/
        

function clearMap(){
  removeOverlay();
  for(var i = 0; i < markers.length; i++) {
    markers[i].setMap(null);
    try{
      markers[i]['infoWindow'].close();
    }catch(e){}
  }
  markers.length=0;
}

function initialize() {
  
  $('.pintap').on('click', function() {
    clearMap();
    var $this = $(this);
    showlocation($this.data('floor'), $this.data('location'), $this.data('type'));

  });

  $('#select-native-2').on('change', function() {
    clearMap();
    showlocation( this.value ); // or $(this).val()
  });
  
  /*top : 37.336030, -121.885133 ... max first, 
  left : 37.335486, -121.886340 ... 
  bottom : 37.334880, -121.885057
  right : 37.33526, -121.883766

  https://www.google.com/maps/place/150+E+San+Fernando+St/@37.3354297,-121.8849654,20z/data=!3m1!5s0x808fccbbfc7cec57:0x74d9a902a9bfc6d0!4m2!3m1!1s0x808fccbbfc717863:0xbcd7b643f13145d5

  new top right: 37.336027, -121.883861


  new coords:
  center: 37.33552630743207, -121.88498558035661
  tg: -121.88627304068376, -121.88369812002946
  ta: 37.33610211206025, 37.334950498389865, 


  prevCenter = mlkLibraryGPSCoord;
  */

  var mapOptions = {
    zoom: 20,
    center: mlkLibraryGPSCoord
  };

  map = new google.maps.Map(document.getElementById('map-canvas'),
    mapOptions);
  var wHeight = $(document).height();
  var mapHeight = wHeight - $('#header').height() - $('#footer').height()-36;
  $("#map-canvas").css("height", mapHeight);
  
  google.maps.event.trigger(map, "resize");

  google.maps.event.addListener(map,'dragend',function(event) {
    prevCenter = map.center;
    if(!imageBounds.contains(map.center)) {
      map.panToBounds(imageBounds);
    }

  });
  google.maps.event.addListener(map,'center_changed',function(event) {
    if(!imageBounds.contains(map.center))
      map.panToBounds(imageBounds);
  });
  

  function AlertPos (map, location) { 
  }

  historicalOverlay = new google.maps.GroundOverlay(
    imageDir + '1-new.PNG',
    imageBounds);

  addOverlay();
  showFloor(1);
}

function addOverlay() {
  historicalOverlay.setMap(map);
}

function removeOverlay() {
  historicalOverlay.setMap(null);
}

google.maps.event.addDomListener(window, 'load', initialize);


function showlocation(floorNumber, locationName, locationType){
  $('#select-native-2').val(floorNumber).selectmenu('refresh');
  historicalOverlay = new google.maps.GroundOverlay(
    imageDir + (floorNumber)+ '-new.PNG',
    imageBounds);
  historicalOverlay.setMap(map);
  try{	      
    for (i = 0, iMax = locations.length; i < iMax; i++) {
      if ((!locationName || locations[i].name === locationName) && (!locationType || locations[i].type == locationType) && locations[i].floor == floorNumber) {
        var marker = new google.maps.Marker({animation: google.maps.Animation.DROP,
          position : new google.maps.LatLng(locations[i].x, locations[i].y),
          title : "marker",
          map: map,
          draggable: false
        });
        marker['infoWindow'] = new google.maps.InfoWindow({
          content: createContent(locations[i]),
          maxWidth: 200
        });
        google.maps.event.addListener(marker, 'click', function() {
          try {
            for(var b = 0; b < markers.length; b++) {
              var currentMarker = markers[b];
              currentMarker["infoWindow"].close();
            }} catch(e){}
            this['infoWindow'].open(map,this);
          });
        markers.push(marker);
      }
    }
  }catch(e){}
}
function timer(floorNum) {
  if(lastFloor !== floorNum ) { 
   clearMap();
    if(floorNum === '-1')
      showFloor('0');
    else
      showFloor(floorNum);
  }
}

function showFloor(floorNumber){

  try {
    if(floorNumber == '-1' || floorNumber == 0){
      historicalOverlay = new google.maps.GroundOverlay(
        imageDir + '-1-new.PNG',
        imageBounds);
      lastFloor = '-1';
      historicalOverlay.setMap(map);
    }
    else if(floorNumber === "0"){
     historicalOverlay = new google.maps.GroundOverlay(
      imageDir + '0-new.PNG',
      imageBounds);
     historicalOverlay.setMap(map);
     floorNumber = 1;
     lastFloor = '0';
    }
    else {
      historicalOverlay = new google.maps.GroundOverlay(
      imageDir + (floorNumber)+ '-new.PNG',
      imageBounds);
      historicalOverlay.setMap(map);
      lastFloor = ''+floorNumber;
      floorNumber++;
    }

    try{
      floorNumber = floorNumber - 1;	 
      var i, iMax;
      for (i = 0, iMax = locations.length; i < iMax; i++) {
        if (locations[i].floor === floorNumber) {

          var marker = new google.maps.Marker({
            animation: google.maps.Animation.DROP,
            position : new google.maps.LatLng(locations[i].x, locations[i].y),
            title : "marker",
            map: map,
            draggable: false
          });

          marker['infoWindow'] = new google.maps.InfoWindow({
            content: createContent(locations[i]),
            maxWidth: 200
          });
          google.maps.event.addListener(marker, 'click', function() {
            try {
              for(var b = 0; b < markers.length; b++) {
                var currentMarker = markers[i];
                currentMarker["infoWindow"].close();
              }
            } catch(e){}
            this['infoWindow'].open(map,this);
          });
          markers.push(marker);
        }
      }
    }catch(e){console.log(e);}
  }catch(e){console.log(e);}

}

function createContent(location){
  var contentString;
  contentString = '<div id="content">';
  if (location.name) {
    contentString += location.name;
  }
  if (location.image) {
    contentString += "<img src='" + location.image + "' height='100' width='100' align='left'>";
  }
  if (location.desc) {
    contentString += "<p>" + location.desc + "</p>";
  }
  if (location.linkText && location.linkTarget) {
    contentString += "<p><a href='" + location.linkTarget + "'>" + location.linkText + "</a></p>";
  }
  contentString += '</div>';
  return contentString;
};

function showLocation(type){
  var pinInfo = bookNumberIndex[type];
  historicalOverlay = new google.maps.GroundOverlay(
    imageDir + (pinInfo.floor)+ '-new.PNG',
    imageBounds);
  $.mobile.changePage( "#home", { transition: "slideup"} );
  clearMap();
  historicalOverlay.setMap(map);
  $('#select-native-2').val(floor).selectmenu('refresh');
  var infowindow = new google.maps.InfoWindow({
    content: pinInfo.contentString,
    maxWidth: 200
  });
  var newMarker = new google.maps.Marker({animation: google.maps.Animation.DROP,
    position : new google.maps.LatLng(pinInfo.lat, pinInfo.long),
    title : "marker",
    map: map,
    draggable: false
  });
  google.maps.event.addListener(newMarker, 'click', function() {
    infowindow.open(map, newMarker);
  });
  markers.push(newMarker);
}

$(window).resize(function() {
  map.setCenter(prevCenter);
  var wHeight = $(window).height();
  var mapHeight = wHeight - $('#header').height() - $('#footer').height()-36;
  console.log(mapHeight);
  $('#map-canvas').css('height', mapHeight);
  google.maps.event.trigger(map, "resize");

});

function showPopup()
{
  clearMap();
  $('#myPopup').popup();
  $('#myPopup').infoWindow("open");
}
