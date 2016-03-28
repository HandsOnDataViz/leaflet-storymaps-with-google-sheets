# leaflet-storymap
Leaflet storymap with scroll-driven navigation for narrative and point markers from easy-to-learn template, with GeoJSON data file

## Demo
http://jackdougherty.github.io/leaflet-storymap/index.html

### Strengths
- Clean scroll-driven navigation, using screen swipe, trackpad, or keyboard down-arrow. Initial map displays all point markers. Viewers may pan and zoom the map independently of the narration to explore further.
- Easy-to-learn template to create your own storymap. Upload coordinate points, zoom levels, narrative text, and image links into a CSV generic spreadsheet, and drag into http://geojson.io to create a GeoJSON data file.
- Linked images may be stored in local subfolder or external URL.
- Responsive design that automatically resizes for all devices (but CSS needs to be improved.)
- Works in modern browsers (Chrome, Firefox, IE, Safari, including 1st generation iPad). Not supported in IE 8 or lower.
- Uses only free and open-source Leaflet.js and jQuery libraries.

### Limitations
- Currently, images must be manually resized to about 300px wide, and all must have roughly similar height, since there is no automatic resizing yet.
- Currently, narrative text must be roughly similar length for each chapter, since there is no automatic resizing yet.
- Currently, there is no way to insert hyperlinks inside the 'description' narrative text, until we find a way to code these into the GeoJSON data properties.

### Compare with other storymaps
- http://storymaps.arcgis.com/en/ with open-source code at https://github.com/Esri/map-journal-storytelling-template-js
- https://storymap.knightlab.com/
- http://jackdougherty.github.io/leaflet-stories/index.html
- http://jackdougherty.github.io/mapbox-storymap/index.html
- http://jackdougherty.github.io/mapbox-storymap/pulse.html
- http://jackdougherty.github.io/mapbox-storymap/markers.html

## Credits
- Adapted from MUX Lab, Map Effects 100: https://github.com/muxlab/map-effects-100
- See http://muxlab.github.io/map-effects-100/Leaflet/11_scroll-driven-map-navigation.html
- Numeric icon markers thanks to https://github.com/coryasilva/Leaflet.ExtraMarkers and StackOverflow suggestions to modify

## Create your own storymap

See easy-to-learn instructions in the Leaflet code templates section of *Data Visualization for All* book at http://DataVizForAll.org

## To Do

- Automatic resizing of images and narrative.
  - Add code to automatically resize images and center them to fit narrative div width, similar to this Mapbox storymap version: http://jackdougherty.github.io/mapbox-storymap/pulse.html
  - Add code to automatically calculate the div height to fit each description, to allow different lengths of text.

- Improve responsive design
  - Modify CSS to create fully responsive design, and ensure that each item in narrative becomes active (especially the last item), regardless of screen size. For one type of responsive strategy, see original @media CSS in: https://github.com/muxlab/map-effects-100/blob/gh-pages/Leaflet/11_scroll-driven-map-navigation.html
  - Experiment with settings/comments from original code, such as: "-50 is a minor adjustment"

- Is it possible to embed clickable hyperlinks inside the 'description' field of the map.csv file to work inside the map.geojson file? The core problem is coding URLs inside GeoJSON properties.

- Add code to make points clickable to auto-scroll to relevant narrative chapter. See http://muxlab.github.io/map-effects-100/Leaflet/12_map-driven-scroll-navigation.html OR http://jackdougherty.github.io/leaflet-stories


## Long-term aspirational goals
- Add code to display different tileLayers (e.g. MAGIC 1934 Aerial, etc.) or overlays for different chapters, based on  instructed in GeoJSON file.
- Create option to display photo icons based on images folder, similar to flickr photo feed icons
```
// Define flickrURL endpoint with API explorer: insert your own key, and tags= or text= to filter results
var flickrURL = "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=25dcc9a8c7410551dcb0af48c778bde5&user_id=56513965%40N06&tags=HPHS&extras=geo%2Curl_t%2Curl_s%2Curl_m%2Ctitle&format=json&nojsoncallback=1";

// Define the flickr popup display
// ** TO DO: Rewrite link to view original source photo directly on Flickr
// ** POSSIBLY include this code directly in the functions below for easier sequencing by novices
var popupHTML = function(photo){
  var result = "";
      result = '<strong>'+photo.title+'</strong><br>';
      result += '<a href="'+photo.url_m+'" target="_blank">';
      result += '<img src="'+photo.url_s+'"></a>';      //was url_t; want url_s; can change to url_m if desired, but frame needs work
      result += '<small>click image to enlarge in new tab</small>';
      return result;
}
// Load photos from flickr JSON (insert your flickrURL above), display with clickable photo thumbnails
$.getJSON(flickrURL, function (data) {
  // Create new layerGroup for the markers, with option to append ".addTo(map);" to display by default
  var layerGroup = new L.LayerGroup().addTo(map);
  // Add layerGroup to your layer control and insert your label to appear in legend
  controlLayers.addOverlay(layerGroup, 'HPHS photo icons');
  // Start a loop to insert flickr photo data into photoContent
  for (var i = 0; i < data.photos.photo.length; i++) {
    var photoContent = data.photos.photo[i];
    var photoIcon = L.icon(
      {iconUrl: photoContent.url_t,
      iconSize: [photoContent.width_t * 0.5, photoContent.height_t * 0.5]}  //reduces thumbnails 50%
    );
    var marker = new L.marker([photoContent.latitude, photoContent.longitude], {icon: photoIcon});
    marker.bindPopup(popupHTML(photoContent));
    // Add the marker to the layerGroup
    marker.addTo(layerGroup);
  }
});
```
- Create leaflet-storymap-polygons version to tell stories about map boundaries (rather than points). Try creating each boundary chapter as its own geojson file (data1.js, data2.js, etc.), add each when chapter loads (and remove when scrolling backwards), and use fitBounds for each chapter geojson (or a filled-in geojson to draw attention to an area). See http://github.io/jackdougherty/leaflet-storymap-polygons/

## Code contributions welcome
- Submit GitHub pull requests to the dev branch for review/approval
