# leaflet-storymap
TESTING Leaflet storymap with scroll-driven navigation for narrative and point markers

## Demos
http://jackdougherty.github.io/leaflet-storymap/index.html

## Credits
Mapbox GL story map with scroll fly-to https://www.mapbox.com/mapbox-gl-js/example/scroll-fly-to/

Mapbox GL story map (Madrid airport runway) https://www.mapbox.com/bites/00045/

Mapbox storymap tutorial (Sherlock Holmes) (https://www.mapbox.com/mapbox.js/example/v1.0.0/scroll-driven-navigation/

## To Do
- TESTING pure Leaflet version (beta 1.0) with map.flyTo
- PROBLEMS: (list them)
- test older IE browser support and older iPad browsers
- define all points, refer to them in chapters, and display all at start and during storymap
    if portable to pure Leaflet, try this:
    L.marker([38.913184,-77.031952]).addTo(map);
    L.marker([37.775408,-122.413682]).addTo(map);
- evaluate pros and cons of one-color markers vs changing color when featured in narrative (compare with Mapbox storymap tutorial Sherlock Holmes)
- determine if this model also can display polygons (as geojson objects?) for narratives about boundaries
- automatically resize and center images to fit narrative div width (similar to pulse version)-
