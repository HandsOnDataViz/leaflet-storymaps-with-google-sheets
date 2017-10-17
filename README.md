# leaflet-storymap
Leaflet storymap with scroll-driven navigation for narrative and point markers from easy-to-learn template, with GeoJSON data file

## Demo
http://jackdougherty.github.io/leaflet-storymap/index.html

### Features
- Scroll-driven navigation, using screen swipe, trackpad, or keyboard down-arrow. Initial map displays all point markers.
- Viewers can pan and zoom the map independently of the narration, or click on any point to go directly to that chapter.
- Easy-to-learn template to create your own storymap. Upload text, point coordinates, zoom levels, and image links to a CSV generic spreadsheet, and drag into http://geojson.io to create a GeoJSON data file.
- Images can be stored in local subfolder or pulled from an external URL.
- Works in modern browsers: Chrome, Firefox, Safari, Internet Explorer 9+.
- Accessible tested using the WAVE and aXe tools.

### Limitations
- Due to GeoJSON data limitations, there is no easy way to insert hyperlinks inside the 'description' text. They must be created outside, in fields such as "source-link".
- Images must contain an [alternative text](https://moz.com/learn/seo/alt-text), or alt tag description of the photo to maintain accessibility using the `alt` field in the csv/geojson.

## See also
- Easier-to-modify Leaflet Storymaps with Google Sheets
- https://github.com/DataVizForAll/leaflet-storymaps-with-google-sheets

### Compare with
- Easy-to-learn story map tools -- see Maps Mania 2016 review (http://googlemapsmania.blogspot.com/2016/06/easy-story-maps.html):
  - Esri ArcGIS storymap http://storymaps.arcgis.com/en/ with open-source code at https://github.com/Esri/map-journal-storytelling-template-js
  - MapMe storymap http://mapme.com/support/knowledgebase/how-do-mapme-stories-work/
  - CartoDB Odyssey storymap http://cartodb.github.io/odyssey.js/
  - KnightLab storymap https://storymap.knightlab.com/
- Related Leaflet storymap template that also displays multiple GeoJSON layers http://jackdougherty.github.io/leaflet-storymap-layers/index.html
- Related Leaflet storymap template that also displays both tile layers and GeoJSON layers
http://jackdougherty.github.io/otl-historical-town-borders/index.html

## Requires open-source libraries
- Leaflet.js
- leaflet.extra-markers
- jQuery
- Font Awesome

## Credits
- Adapted from MUX Lab, Map Effects 100: https://github.com/muxlab/map-effects-100, see http://muxlab.github.io/map-effects-100/Leaflet/11_scroll-driven-map-navigation.html
- Thanks [@ilyankou](https://github.com/ilyankou) for improving image display, navigation scroll, and web interface
- Thanks [@geospatialem] (https://github.com/geospatialem) for accessibility improvements
- Numeric icon markers thanks to https://github.com/coryasilva/Leaflet.ExtraMarkers and StackOverflow suggestions for modification

## Create your own storymap

See easy-to-learn instructions in the Leaflet Templates section of *Data Visualization for All* book at http://DataVizForAll.org

## Examples with Added Features
- Explore http://pembrokesoundscapes.ca/map, view code at https://github.com/rblades/rblades.github.io. Added audio playback in the narrative, historical map layers.
