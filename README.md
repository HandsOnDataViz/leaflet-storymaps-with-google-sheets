# leaflet-storymap-mapbox
Adapted from Mapbox scroll-driven navigation with narrative and point markers

## Demos
http://jackdougherty.github.io/leaflet-storymap-mapbox/index-markers-gl.html

http://jackdougherty.github.io/leaflet-storymap-mapbox/index-markers.html

http://jackdougherty.github.io/leaflet-storymap-mapbox/index-pulse.html

## Dependency
requires a Mapbox account token (free up to 50,000 views per month)

## Credits
Mapbox GL story map with scroll fly-to https://www.mapbox.com/mapbox-gl-js/example/scroll-fly-to/

Mapbox GL story map (Madrid airport runway) https://www.mapbox.com/bites/00045/

Mapbox storymap tutorial (Sherlock Holmes) (https://www.mapbox.com/mapbox.js/example/v1.0.0/scroll-driven-navigation/

## To Do
- redefine narrative-map width; change narrative opacity
- test benefits of MapBox dependency (such as high-quality satellite imagery?)
- try making pure Leaflet version with flyTo (definitely in beta 1.0, maybe 0.7.7); remove pitch and bearing
- define all points, refer to them in chapters, and display all at start and during storymap
- evaluate pros and cons of one-color markers vs changing color when featured in narrative (see prior version)
- determine if it will display polygons (as geojson objects?) for narratives about boundaries
- find way to insert photos to automatically resize in narrative (as they do in pulse version)
