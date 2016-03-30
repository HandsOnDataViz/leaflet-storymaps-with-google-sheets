# leaflet-storymap
Leaflet storymap with scroll-driven navigation for narrative and point markers from easy-to-learn template, with GeoJSON data file

## Demo
http://jackdougherty.github.io/leaflet-storymap/index.html

### Strengths
- Scroll-driven navigation, using screen swipe, trackpad, or keyboard down-arrow. Initial map displays all point markers. Viewers can pan and zoom the map independently of the narration to explore further.
- Easy-to-learn template to create your own storymap. Upload text, point coordinates, zoom levels, and image links to a CSV generic spreadsheet, and drag into http://geojson.io to create a GeoJSON data file.
- Images can be stored in local subfolder or pulled from an external URL.
- Works in modern browsers (Chrome, Firefox, IE, Safari, including 1st generation iPad). Not supported in IE 8 or lower.
- Uses only free and open-source Leaflet.js and jQuery libraries.

### Limitations
- Currently, there is no way to insert hyperlinks inside the 'description' text.

### Compare with other storymaps
- http://storymaps.arcgis.com/en/ with open-source code at https://github.com/Esri/map-journal-storytelling-template-js
- https://storymap.knightlab.com/
- http://jackdougherty.github.io/leaflet-stories/index.html
- http://jackdougherty.github.io/mapbox-storymap/index.html
- http://jackdougherty.github.io/mapbox-storymap/pulse.html
- http://jackdougherty.github.io/mapbox-storymap/markers.html

## Credits
- Adapted from MUX Lab, Map Effects 100: https://github.com/muxlab/map-effects-100, see http://muxlab.github.io/map-effects-100/Leaflet/11_scroll-driven-map-navigation.html
- Thanks [@ilyankou](https://github.com/ilyankou) for improving image display, navigation scroll, and web interface
- Numeric icon markers thanks to https://github.com/coryasilva/Leaflet.ExtraMarkers and StackOverflow suggestions to modify

## Create your own storymap

See easy-to-learn instructions in the Leaflet Templates section of *Data Visualization for All* book at http://DataVizForAll.org

## Examples and Added Features
- Explore http://pembrokesoundscapes.ca/map, view code at https://github.com/rblades/rblades.github.io. Added audio playback in the narrative, historical map layers.

## To Do

- Test responsive design on various devices
- Change bottom icon to an up-arrow (or browser refresh symbol), and make it clickable to return to the top (or refresh browser).
- Change code to make local download workable with Chrome browser (CORS error).
- Add code to make points clickable to auto-scroll to relevant narrative chapter. See http://muxlab.github.io/map-effects-100/Leaflet/12_map-driven-scroll-navigation.html OR http://jackdougherty.github.io/leaflet-stories
- Search for way to insert a URL hyperlink inside GeoJSON properties, to allow links within the description.
- Create leaflet-storymap-polygons version to tell stories about map boundaries (rather than points). Try creating each boundary chapter as its own geojson file (data1.js, data2.js, etc.), add each when chapter loads (and remove when scrolling backwards), and use fitBounds for each chapter geojson (or a filled-in geojson to draw attention to an area). See http://github.io/jackdougherty/leaflet-storymap-polygons/

## Code contributions welcome
- Submit GitHub pull requests to the dev branch
