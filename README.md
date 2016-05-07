# leaflet-storymap
Leaflet storymap with scroll-driven navigation for narrative and point markers from easy-to-learn template, with GeoJSON data file

## Demo
http://jackdougherty.github.io/leaflet-storymap/index.html

### Strengths
- Scroll-driven navigation, using screen swipe, trackpad, or keyboard down-arrow. Initial map displays all point markers. Viewers can pan and zoom the map independently of the narration to explore further.
- Easy-to-learn template to create your own storymap. Upload text, point coordinates, zoom levels, and image links to a CSV generic spreadsheet, and drag into http://geojson.io to create a GeoJSON data file.
- Images can be stored in local subfolder or pulled from an external URL.
- Works in modern browsers: Chrome, Firefox, Safari, Internet Explorer 9+.

### Limitations
- Due to GeoJSON data limitations, there is no easy way to insert hyperlinks inside the 'description' text. They must be created outside, in fields such as "source-link"

### Compare with
- Similar storymap that displays multiple GeoJSON boundary layers http://jackdougherty.github.io/leaflet-storymap-layers/index.html
- ArcGIS storymap http://storymaps.arcgis.com/en/ with open-source code at https://github.com/Esri/map-journal-storytelling-template-js
- KnightLab storymap https://storymap.knightlab.com/

## Requires open-source libraries
- Leaflet.js
- leaflet.extra-markers
- jQuery
- Font Awesome

## Credits
- Adapted from MUX Lab, Map Effects 100: https://github.com/muxlab/map-effects-100, see http://muxlab.github.io/map-effects-100/Leaflet/11_scroll-driven-map-navigation.html
- Thanks [@ilyankou](https://github.com/ilyankou) for improving image display, navigation scroll, and web interface
- Numeric icon markers thanks to https://github.com/coryasilva/Leaflet.ExtraMarkers and StackOverflow suggestions for modification

## Create your own storymap

See easy-to-learn instructions in the Leaflet Templates section of *Data Visualization for All* book at http://DataVizForAll.org

## Examples and Added Features
- Explore http://pembrokesoundscapes.ca/map, view code at https://github.com/rblades/rblades.github.io. Added audio playback in the narrative, historical map layers.

## To Do
- Add code to make points clickable to auto-scroll to relevant narrative chapter. See http://muxlab.github.io/map-effects-100/Leaflet/12_map-driven-scroll-navigation.html OR http://jackdougherty.github.io/leaflet-stories

## Code contributions welcome
- Submit GitHub pull requests to the dev branch
