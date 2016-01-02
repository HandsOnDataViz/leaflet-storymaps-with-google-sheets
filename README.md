# leaflet-storymap
TESTING Leaflet storymap with scroll-driven navigation for narrative and point markers

## Demos
http://jackdougherty.github.io/leaflet-storymap/index.html

http://jackdougherty.github.io/leaflet-storymap/map-effects.html

## Credits
Mapbox GL story map with scroll fly-to https://www.mapbox.com/mapbox-gl-js/example/scroll-fly-to/

Mapbox GL story map (Madrid airport runway) https://www.mapbox.com/bites/00045/

Mapbox storymap tutorial (Sherlock Holmes) (https://www.mapbox.com/mapbox.js/example/v1.0.0/scroll-driven-navigation/

## To Do
- TESTING pure Leaflet version (beta 1.0) with map.flyTo
- KEY PROBLEM: current version does NOT properly make narrative sections 'active' when scrolling upward. See these console errors:
  - Uncaught TypeError: Cannot read property 'lat' of null
  - setActiveChapter	@	index.html:209
  - window.onscroll	@	index.html:198
- Is this caused by a mismatch when moving from MapboxGL (lng, lat) to Leaflet (lat,lng)?

- test older IE browser support and older iPad browsers
- create more efficient way to code points in both marker display and sections/chapters
- can this Leaflet model also display geojson polygons, in specific sections/chapters, to tell stories about boundaries?
- add code automatically resize and center images to fit narrative div width (similar to pulse version)
