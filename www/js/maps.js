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


function buildMenuList(type) {
  var i, iMax, listHtml = '';
  for (i = 0, iMax = locations.length; i < iMax; i++) {
    if (locations[i].type && locations[i].type === type) {
      listHtml += '<li data-floor="'+locations[i].floor+'" data-type="'+type+'" data-location="'+locations[i].name+'" class="pintap ui-btn ui-btn-icon-right ui-icon-carat-r"> <a href="#home">'+locations[i].name+' ('+locations[i].floorname+')</a></li>';
    }
  }
  return listHtml;
}

function initialize() {
  
  $('#roomMenuList').append(buildMenuList(TYPES.ROOM));
  $('#collectionMenuList').append(buildMenuList(TYPES.COLLECTION));

  $('.pintap').on('click', function() {
    clearMap();
    var $this = $(this);
    showlocation($this.data('floor'), $this.data('location'), $this.data('type'));

  });

  $('.inapp').on('click', function(e) {
    var url, ref;
    e.preventDefault();
    url = $(this).attr('href');
    ref = window.open(url, '_blank', 'location=yes');
  });


  $('#select-native-2').on('change', function() {
    clearMap();
    showlocation(this.value); // or $(this).val()
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
      map.panToBounds(new google.maps.LatLngBounds(mlkLibraryGPSCoord, mlkLibraryGPSCoord));
    }

  });
  
  google.maps.event.addListener(map, 'zoom_changed', function() {
     if (map.getZoom() < 19) map.setZoom(19);
   });

  function AlertPos (map, location) { 
  }

  historicalOverlay = new google.maps.GroundOverlay(
    imageDir + '1-new.PNG',
    imageBounds);

  addOverlay();
  showlocation(1);
}

function addOverlay() {
  historicalOverlay.setMap(map);
}

function removeOverlay() {
  historicalOverlay.setMap(null);
}

google.maps.event.addDomListener(window, 'load', initialize);


function showlocation(floorNumber, locationName, locationType){
  var i, iMax;
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
    contentString += "<p><a href='" + location.linkTarget + "' class='inapp'>" + location.linkText + "</a></p>";
  }
  contentString += '</div>';
  return contentString;
};

$(window).resize(function() {
  map.setCenter(prevCenter);
  var wHeight = $(window).height();
  var mapHeight = wHeight - $('#header').height() - $('#footer').height()-36;
  $('#map-canvas').css('height', mapHeight);
  google.maps.event.trigger(map, "resize");

});

function showPopup()
{
  clearMap();
  $('#myPopup').popup();
  $('#myPopup').infoWindow("open");
}
