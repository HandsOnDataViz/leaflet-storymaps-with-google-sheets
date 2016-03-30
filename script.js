// This watches for the scrollable container
var scrollPosition = 0;
$('div#contents').scroll(function() {
  scrollPosition = $(this).scrollTop();
});

function initMap() {

  // This creates the Leaflet map with a generic start point, because code at bottom automatically fits bounds to all markers
  var map = L.map('map').setView([0, 0], 5);

  // This displays a base layer map (other options available)
  var lightAll = new L.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="http://cartodb.com/attributions">CartoDB</a>'
  }).addTo(map);

  // This customizes link to view source code; add your own GitHub repository
  map.attributionControl
  .setPrefix('View <a href="http://github.com/jackdougherty/leaflet-storymap">code on GitHub</a>, created with <a href="http://leafletjs.com" title="A JS library for interactive maps">Leaflet</a>');

  // This loads the GeoJSON map data file from a local folder
  $.getJSON('map.geojson', function(data) {
    var geojson = L.geoJson(data, {
      onEachFeature: function (feature, layer) {
        (function(layer, properties) {
          // This creates numerical icons to match the ID numbers
          // OR remove the next 6 lines for default blue Leaflet markers
          var numericMarker = L.ExtraMarkers.icon({
            icon: 'fa-number',
            number: feature.properties['id'],
            markerColor: 'blue'
          });
          layer.setIcon(numericMarker);

          // This creates the contents of each chapter from the GeoJSON data. Unwanted items can be removed, and new ones can be added
          var chapter = $('<p></p>', {
            text: feature.properties['chapter'],
            class: 'chapter-header'
          });
          var image = $('<img>', {
            src: feature.properties['image'],
            width: '100%'
          });
          var source = $('<a>', {
            text: feature.properties['source-credit'],
            href: feature.properties['source-link'],
            target: "_blank",
            class: 'source'
          });
          var description = $('<p></p>', {
            text: feature.properties['description'],
            class: 'description'
          });
          var container = $('<div></div>', {
            id: 'container' + feature.properties['id'],
            class: 'image-container'
          });
          container.append(chapter).append(image).append(source).append(description);
          $('#contents').append(container);
          // Watch the current scroll postion for scroll-driven map navigation!
          var areaHeight = $('.image-container').height() + 50;
          var areaTop = (feature.properties['id']-1) * areaHeight - 50; // -50 is a minor adjustment
          var areaBottom = areaTop + areaHeight - 50; // -50 is a minor adjustment
          $('div#contents').scroll(function() {
            if($(this).scrollTop() >= areaTop && $(this).scrollTop() < areaBottom) {
              $('.image-container').css('opacity', 0.3);
              $('div#container' + feature.properties['id']).css('opacity', 1);
              map.flyTo([feature.geometry.coordinates[1], feature.geometry.coordinates[0] ], feature.properties['zoom']);
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
