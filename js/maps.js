/********************************

Revelo's JavaScript Document for Snazzy Map Style
Version: 1.0
Styles Taken from: https://snazzymaps.com/

*********************************/

/*Custom Marker Image*/
var image = 'images/map-pin.png';

/********************************
Gray Scale Style
*********************************/

/*Setting Map Options*/
var mapGrayOptions = {
    center: new google.maps.LatLng(40.7903, -73.9597),
    zoom: 13,
	zoomControl:true,
	zoomControlOptions: {
	  style:google.maps.ZoomControlStyle.SMALL
	},
	panControl:false,
    mapTypeControl:false,
    scaleControl:false,
    streetViewControl:false,
    overviewMapControl:false,
    rotateControl:false,    
    scrollwheel: false,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    styles: [{"featureType":"landscape","stylers":[{"saturation":-100},{"lightness":65},{"visibility":"on"}]},{"featureType":"poi","stylers":[{"saturation":-100},{"lightness":51},{"visibility":"simplified"}]},{"featureType":"road.highway","stylers":[{"saturation":-100},{"visibility":"simplified"}]},{"featureType":"road.arterial","stylers":[{"saturation":-100},{"lightness":30},{"visibility":"on"}]},{"featureType":"road.local","stylers":[{"saturation":-100},{"lightness":40},{"visibility":"on"}]},{"featureType":"transit","stylers":[{"saturation":-100},{"visibility":"simplified"}]},{"featureType":"administrative.province","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"labels","stylers":[{"visibility":"on"},{"lightness":-25},{"saturation":-100}]},{"featureType":"water","elementType":"geometry","stylers":[{"hue":"#ffff00"},{"lightness":-25},{"saturation":-97}]}]
};

/*Plotting Map*/
var mapGray = new google.maps.Map(document.getElementById('map-gray'), mapGrayOptions);

/*Setting Marker*/
var mapGrayMarker = new google.maps.Marker({
	position: mapGray.getCenter(),
	map: mapGray,
	icon: image
});

/********************************
Pale Style
*********************************/

/*Setting Map Options*/
var mapPaleOptions = {
    center: new google.maps.LatLng(40.7903, -73.9597),
    zoom: 13,
	zoomControl:true,
	zoomControlOptions: {
	  style:google.maps.ZoomControlStyle.SMALL
	},
	panControl:false,
    mapTypeControl:false,
    scaleControl:false,
    streetViewControl:false,
    overviewMapControl:false,
    rotateControl:false, 
    scrollwheel: false,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
   styles: [{"featureType":"water","stylers":[{"visibility":"on"},{"color":"#acbcc9"}]},{"featureType":"landscape","stylers":[{"color":"#f2e5d4"}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"color":"#c5c6c6"}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#e4d7c6"}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#fbfaf7"}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#c5dac6"}]},{"featureType":"administrative","stylers":[{"visibility":"on"},{"lightness":33}]},{"featureType":"road"},{"featureType":"poi.park","elementType":"labels","stylers":[{"visibility":"on"},{"lightness":20}]},{},{"featureType":"road","stylers":[{"lightness":20}]}]
};

/*Plotting Map*/
var mapPale = new google.maps.Map(document.getElementById('map-pale'), mapPaleOptions);

/*Setting Marker*/
var mapPaleMarker = new google.maps.Marker({
	position: mapPale.getCenter(),
	map: mapPale,
	icon: image
});

/********************************
Route Style
*********************************/

/*Setting Map Options*/
var mapRouteOptions = {
    center: new google.maps.LatLng(40.7903, -73.9597),
    zoom: 13,
	zoomControl:true,
	zoomControlOptions: {
	  style:google.maps.ZoomControlStyle.SMALL
	},
	panControl:false,
    mapTypeControl:false,
    scaleControl:false,
    streetViewControl:false,
    overviewMapControl:false,
    rotateControl:false, 
    scrollwheel: false,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
   styles: [{"featureType":"administrative","elementType":"all","stylers":[{"visibility":"on"},{"saturation":-100},{"lightness":20}]},{"featureType":"road","elementType":"all","stylers":[{"visibility":"on"},{"saturation":-100},{"lightness":40}]},{"featureType":"water","elementType":"all","stylers":[{"visibility":"on"},{"saturation":-10},{"lightness":30}]},{"featureType":"landscape.man_made","elementType":"all","stylers":[{"visibility":"simplified"},{"saturation":-60},{"lightness":10}]},{"featureType":"landscape.natural","elementType":"all","stylers":[{"visibility":"simplified"},{"saturation":-60},{"lightness":60}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"},{"saturation":-100},{"lightness":60}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"},{"saturation":-100},{"lightness":60}]}]
};

/*Plotting Map*/
var mapRoute = new google.maps.Map(document.getElementById('map-route'), mapRouteOptions);

/*Setting Marker*/
var mapRouteMarker = new google.maps.Marker({
	position: mapRoute.getCenter(),
	map: mapRoute,
	icon: image
});

/********************************
Monochrome Style
*********************************/

/*Setting Map Options*/
var mapMonoOptions = {
    center: new google.maps.LatLng(40.7903, -73.9597),
    zoom: 13,
	zoomControl:true,
	zoomControlOptions: {
	  style:google.maps.ZoomControlStyle.SMALL
	},
	panControl:false,
    mapTypeControl:false,
    scaleControl:false,
    streetViewControl:false,
    overviewMapControl:false,
    rotateControl:false, 
    scrollwheel: false,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
   styles: [{"featureType":"water","elementType":"all","stylers":[{"hue":"#e9ebed"},{"saturation":-78},{"lightness":67},{"visibility":"simplified"}]},{"featureType":"landscape","elementType":"all","stylers":[{"hue":"#ffffff"},{"saturation":-100},{"lightness":100},{"visibility":"simplified"}]},{"featureType":"road","elementType":"geometry","stylers":[{"hue":"#bbc0c4"},{"saturation":-93},{"lightness":31},{"visibility":"simplified"}]},{"featureType":"poi","elementType":"all","stylers":[{"hue":"#ffffff"},{"saturation":-100},{"lightness":100},{"visibility":"off"}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"hue":"#e9ebed"},{"saturation":-90},{"lightness":-8},{"visibility":"simplified"}]},{"featureType":"transit","elementType":"all","stylers":[{"hue":"#e9ebed"},{"saturation":10},{"lightness":69},{"visibility":"on"}]},{"featureType":"administrative.locality","elementType":"all","stylers":[{"hue":"#2c2e33"},{"saturation":7},{"lightness":19},{"visibility":"on"}]},{"featureType":"road","elementType":"labels","stylers":[{"hue":"#bbc0c4"},{"saturation":-93},{"lightness":31},{"visibility":"on"}]},{"featureType":"road.arterial","elementType":"labels","stylers":[{"hue":"#bbc0c4"},{"saturation":-93},{"lightness":-2},{"visibility":"simplified"}]}]
};

/*Plotting Map*/
var mapMono = new google.maps.Map(document.getElementById('map-mono'), mapMonoOptions);

/*Setting Marker*/
var  mapMonoMarker = new google.maps.Marker({
	position:  mapMono.getCenter(),
	map:  mapMono,
	icon: image
});

/********************************
Dark Style
*********************************/

/*Setting Map Options*/
var mapDarkOptions = {
    center: new google.maps.LatLng(40.7903, -73.9597),
    zoom: 13,
	zoomControl:true,
	zoomControlOptions: {
	  style:google.maps.ZoomControlStyle.SMALL
	},
	panControl:false,
    mapTypeControl:false,
    scaleControl:false,
    streetViewControl:false,
    overviewMapControl:false,
    rotateControl:false, 
    scrollwheel: false,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
   styles: [{"stylers":[{"hue":"#ff1a00"},{"invert_lightness":true},{"saturation":-100},{"lightness":33},{"gamma":0.5}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#2D333C"}]}]
};

/*Plotting Map*/
var mapDark = new google.maps.Map(document.getElementById('map-dark'), mapDarkOptions);

/*Setting Marker*/
var mapDarkMarker = new google.maps.Marker({
	position: mapDark.getCenter(),
	map: mapDark,
	icon: image
});

/********************************
Blue Theme Style
*********************************/

/*Setting Map Options*/
var mapBlueOptions = {
    center: new google.maps.LatLng(40.7903, -73.9597),
    zoom: 13,
	zoomControl:true,
	zoomControlOptions: {
	  style:google.maps.ZoomControlStyle.SMALL
	},
	panControl:false,
    mapTypeControl:false,
    scaleControl:false,
    streetViewControl:false,
    overviewMapControl:false,
    rotateControl:false, 
    scrollwheel: false,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
   styles: [{"featureType":"water","stylers":[{"color":"#0e171d"}]},{"featureType":"landscape","stylers":[{"color":"#1e303d"}]},{"featureType":"road","stylers":[{"color":"#1e303d"}]},{"featureType":"poi.park","stylers":[{"color":"#1e303d"}]},{"featureType":"transit","stylers":[{"color":"#182731"},{"visibility":"simplified"}]},{"featureType":"poi","elementType":"labels.icon","stylers":[{"color":"#f0c514"},{"visibility":"off"}]},{"featureType":"poi","elementType":"labels.text.stroke","stylers":[{"color":"#1e303d"},{"visibility":"off"}]},{"featureType":"transit","elementType":"labels.text.fill","stylers":[{"color":"#e77e24"},{"visibility":"off"}]},{"featureType":"road","elementType":"labels.text.fill","stylers":[{"color":"#94a5a6"}]},{"featureType":"administrative","elementType":"labels","stylers":[{"visibility":"simplified"},{"color":"#e84c3c"}]},{"featureType":"poi","stylers":[{"color":"#e84c3c"},{"visibility":"off"}]}]
};

/*Plotting Map*/
var mapBlue = new google.maps.Map(document.getElementById('map-blue'), mapBlueOptions);

/*Setting Marker*/
var mapBlueMarker = new google.maps.Marker({
	position: mapBlue.getCenter(),
	map: mapBlue,
	icon: image
});

/********************************
Essence Style
*********************************/

/*Setting Map Options*/
var mapEssenceOptions = {
    center: new google.maps.LatLng(40.7903, -73.9597),
    zoom: 13,
	zoomControl:true,
	zoomControlOptions: {
	  style:google.maps.ZoomControlStyle.SMALL
	},
	panControl:false,
    mapTypeControl:false,
    scaleControl:false,
    streetViewControl:false,
    overviewMapControl:false,
    rotateControl:false, 
    scrollwheel: false,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
   styles: [{"featureType":"landscape.natural","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#e0efef"}]},{"featureType":"poi","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"hue":"#1900ff"},{"color":"#c0e8e8"}]},{"featureType":"landscape.man_made","elementType":"geometry.fill"},{"featureType":"road","elementType":"geometry","stylers":[{"lightness":100},{"visibility":"simplified"}]},{"featureType":"road","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"water","stylers":[{"color":"#7dcdcd"}]},{"featureType":"transit.line","elementType":"geometry","stylers":[{"visibility":"on"},{"lightness":700}]}]
};

/*Plotting Map*/
var mapEssence = new google.maps.Map(document.getElementById('map-essence'), mapEssenceOptions);

/*Setting Marker*/
var mapEssenceMarker = new google.maps.Marker({
	position: mapEssence.getCenter(),
	map: mapEssence,
	icon: image
});

/********************************
Flat Style
*********************************/

/*Setting Map Options*/
var mapFlatOptions = {
    center: new google.maps.LatLng(40.7903, -73.9597),
    zoom: 13,
	zoomControl:true,
	zoomControlOptions: {
	  style:google.maps.ZoomControlStyle.SMALL
	},
	panControl:false,
    mapTypeControl:false,
    scaleControl:false,
    streetViewControl:false,
    overviewMapControl:false,
    rotateControl:false, 
    scrollwheel: false,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
   styles: [{"featureType":"water","elementType":"all","stylers":[{"hue":"#7fc8ed"},{"saturation":55},{"lightness":-6},{"visibility":"on"}]},{"featureType":"water","elementType":"labels","stylers":[{"hue":"#7fc8ed"},{"saturation":55},{"lightness":-6},{"visibility":"off"}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"hue":"#83cead"},{"saturation":1},{"lightness":-15},{"visibility":"on"}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"hue":"#f3f4f4"},{"saturation":-84},{"lightness":59},{"visibility":"on"}]},{"featureType":"landscape","elementType":"labels","stylers":[{"hue":"#ffffff"},{"saturation":-100},{"lightness":100},{"visibility":"off"}]},{"featureType":"road","elementType":"geometry","stylers":[{"hue":"#ffffff"},{"saturation":-100},{"lightness":100},{"visibility":"on"}]},{"featureType":"road","elementType":"labels","stylers":[{"hue":"#bbbbbb"},{"saturation":-100},{"lightness":26},{"visibility":"on"}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"hue":"#ffcc00"},{"saturation":100},{"lightness":-35},{"visibility":"simplified"}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"hue":"#ffcc00"},{"saturation":100},{"lightness":-22},{"visibility":"on"}]},{"featureType":"poi.school","elementType":"all","stylers":[{"hue":"#d7e4e4"},{"saturation":-60},{"lightness":23},{"visibility":"on"}]}]
};

/*Plotting Map*/
var mapFlat = new google.maps.Map(document.getElementById('map-flat'), mapFlatOptions);

/*Setting Marker*/
var mapFlatMarker = new google.maps.Marker({
	position: mapFlat.getCenter(),
	map: mapFlat,
	icon: image
});

/********************************
Shift Style
*********************************/

/*Setting Map Options*/
var mapShiftOptions = {
    center: new google.maps.LatLng(40.7903, -73.9597),
    zoom: 13,
	zoomControl:true,
	zoomControlOptions: {
	  style:google.maps.ZoomControlStyle.SMALL
	},
	panControl:false,
    mapTypeControl:false,
    scaleControl:false,
    streetViewControl:false,
    overviewMapControl:false,
    rotateControl:false, 
    scrollwheel: false,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
   styles: [{"stylers":[{"saturation":-100},{"gamma":1}]},{"elementType":"labels.text.stroke","stylers":[{"visibility":"off"}]},{"featureType":"poi.business","elementType":"labels.text","stylers":[{"visibility":"off"}]},{"featureType":"poi.business","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"poi.place_of_worship","elementType":"labels.text","stylers":[{"visibility":"off"}]},{"featureType":"poi.place_of_worship","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"geometry","stylers":[{"visibility":"simplified"}]},{"featureType":"water","stylers":[{"visibility":"on"},{"saturation":50},{"gamma":0},{"hue":"#50a5d1"}]},{"featureType":"administrative.neighborhood","elementType":"labels.text.fill","stylers":[{"color":"#333333"}]},{"featureType":"road.local","elementType":"labels.text","stylers":[{"weight":0.5},{"color":"#333333"}]},{"featureType":"transit.station","elementType":"labels.icon","stylers":[{"gamma":1},{"saturation":50}]}]
};

/*Plotting Map*/
var mapShift = new google.maps.Map(document.getElementById('map-shift'), mapShiftOptions);

/*Setting Marker*/
var mapShiftMarker = new google.maps.Marker({
	position: mapShift.getCenter(),
	map: mapShift,
	icon: image
});

/********************************
Light Style
*********************************/

/*Setting Map Options*/
var mapLightOptions = {
    center: new google.maps.LatLng(40.7903, -73.9597),
    zoom: 13,
	zoomControl:true,
	zoomControlOptions: {
	  style:google.maps.ZoomControlStyle.SMALL
	},
	panControl:false,
    mapTypeControl:false,
    scaleControl:false,
    streetViewControl:false,
    overviewMapControl:false,
    rotateControl:false, 
    scrollwheel: false,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
   styles: [{"featureType":"landscape","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"stylers":[{"hue":"#00aaff"},{"saturation":-100},{"gamma":2.15},{"lightness":12}]},{"featureType":"road","elementType":"labels.text.fill","stylers":[{"visibility":"on"},{"lightness":24}]},{"featureType":"road","elementType":"geometry","stylers":[{"lightness":57}]}]
};

/*Plotting Map*/
var mapLight = new google.maps.Map(document.getElementById('map-light'), mapLightOptions);

/*Setting Marker*/
var mapLightMarker = new google.maps.Marker({
	position: mapLight.getCenter(),
	map: mapLight,
	icon: image
});


	   