// Watch for scrollable container
var scrollPosition = 0;
$('div#contents').scroll(function() {
  scrollPosition = $(this).scrollTop();
});
// Leaflet Map Init
function initMap() {
  var map = L.map('map', {
    zoomControl: false
  }).setView([0, 0], 5); // initial map automatically fits bounds of all markers

  // optional : customize link to view source code; add your own GitHub repository
  map.attributionControl
  .setPrefix('View <a href="http://github.com/jackdougherty/leaflet-storymap">code on GitHub</a>, created with <a href="http://leafletjs.com" title="A JS library for interactive maps">Leaflet</a>');

  // optional: add legend to toggle any baselayers and/or overlays
  // global variable with (null, null) allows indiv layers to be added inside functions below
  var controlLayers = L.control.layers( null, null, {
    position: "bottomright",
    collapsed: false // false = open by default
  }).addTo(map);

  // optional: reposition zoom control other than default topleft
  L.control.zoom({position: "topright"}).addTo(map);

  /* BASELAYERS */
  // use common baselayers below, delete, or add more with plain JavaScript from http://leaflet-extras.github.io/leaflet-providers/preview/
  // .addTo(map); -- suffix displays baselayer by default
  // controlLayers.addBaseLayer (variableName, 'label'); -- adds baselayer and label to legend; omit if only one baselayer with no toggle desired
  var lightAll = new L.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="http://cartodb.com/attributions">CartoDB</a>'
  }).addTo(map); //this displays layer by default
  controlLayers.addBaseLayer(lightAll, 'CartoDB LightAll');

  // Esri satellite map from http://leaflet-extras.github.io/leaflet-providers/preview/
  var Esri_WorldImagery = L.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
    attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
  });
  controlLayers.addBaseLayer(Esri_WorldImagery, 'Esri Satellite');

  // tileLayer.WMS as a baselayer - see http://leafletjs.com/reference.html#tilelayer-wms
  // UConn MAGIC WMS settings - see http://geoserver.lib.uconn.edu:8080/geoserver/web/?wicket:bookmarkablePage=:org.geoserver.web.demo.MapPreviewPage
  var aerial1934 = new L.tileLayer.wms("http://geoserver.lib.uconn.edu:8080/geoserver/MAGIC/wms?", {
    layers: 'MAGIC:1934 Connecticut Aerial Photography',
    format: 'image/png',
    version: '1.1.0',
    transparent: true,
    attribution: '1934 <a href="http://magic.library.uconn.edu">MAGIC UConn</a> and <a href="http://cslib.org">CSL</a>'
  });
  controlLayers.addBaseLayer(aerial1934, 'CT Aerial 1934');

  // *GET THE GEOJSON
  $.getJSON('data.geojson', function(data) {
    var geojson = L.geoJson(data, {
      onEachFeature: function (feature, layer) {
        (function(layer, properties) {
          // Create Contents elements
          var chapter = $('<p></p>', {
            text: feature.properties['Chapter'],
            class: 'chapter-header'
          });
          var image = $('<img>', {
            src: 'img/' + feature.properties['Image'],
            width: '100%'
          });
          // TO DO: Add if/else statement: if ImageSource == "" then make blank; else do below
          var imageSource = $('<a>', {
            text: "Source: " + feature.properties['ImageSource'],
            href: feature.properties['ImageSource'],
            target: "_blank",
            class: 'source'
          });
          var description = $('<p></p>', {
            text: feature.properties['Description'],
            class: 'description'
          });
          var container = $('<div></div>', {
            id: 'container' + feature.properties['ID'],
            class: 'image-container'
          });
          container.append(chapter).append(image).append(imageSource).append(description);
          $('#contents').append(container);
          // Watch the current scroll postion for scroll-driven map navigation!
          var areaHeight = $('.image-container').height() + 50;
          var areaTop = (feature.properties['ID']-1) * areaHeight - 50; // -50 is a minor adjustment
          var areaBottom = areaTop + areaHeight - 50; // -50 is a minor adjustment
          $('div#contents').scroll(function() {
            if($(this).scrollTop() >= areaTop && $(this).scrollTop() < areaBottom) {
              $('.image-container').css('opacity', 0.3);
              $('div#container' + feature.properties['ID']).css('opacity', 1);
              map.flyTo([feature.geometry.coordinates[1], feature.geometry.coordinates[0] ], feature.properties['Zoom']);
            }
          });
        })(layer, feature.properties);
      }
    });
    $('div#container1').css('opacity', 1);
    map.fitBounds(geojson.getBounds());
    geojson.addTo(map);
  });
}
initMap();
