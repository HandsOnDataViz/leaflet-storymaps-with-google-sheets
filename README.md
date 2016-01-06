# leaflet-storymap
Leaflet storymap with scroll-driven navigation for narrative and point markers

## Demo
http://jackdougherty.github.io/leaflet-storymap/index.html

### Benefits
- Clean scroll-driven navigation, using screen swipe, trackpad, or keyboard down-arrow. Viewers may pan and zoom the map independently of the narration to explore further. Initial map displays all point markers.
- Linked images may be stored in local subfolder or externally. Coordinate points, narration text, image links, and zoom levels for each chapter are stored in a local geoJSON file, which makes it easier to create new storymaps with minimal coding.
- Responsive design that automatically resizes for all devices (but coding needs to be improved.)
- Works in modern browsers (Chrome, Firefox, IE, Safari, including 1st generation iPad). Not supported in IE 8 or lower.
- Uses only free and open-source Leaflet.js and jQuery libraries.

## Credits
- Adapted from MUX Lab, Map Effects 100: https://github.com/muxlab/map-effects-100
- See http://muxlab.github.io/map-effects-100/Leaflet/11_scroll-driven-map-navigation.html

## Compare with other storymap templates
- http://jackdougherty.github.io/leaflet-stories/index.html
- http://jackdougherty.github.io/mapbox-storymap/index.html
- http://jackdougherty.github.io/mapbox-storymap/pulse.html
- http://jackdougherty.github.io/mapbox-storymap/markers.html

## Create your own storymap 

1. Download a copy of this code, or fork a copy to your GitHub account (requires free sign-up).
1. Title: Edit the title in the index.HTML file, using a text editor. If you downloaded the code, try this free editor: https://atom.io/. If you forked the code on GitHub, view the master branch on the browser and click the editor button (pencil), then commit (save changes). Recommended: Try the free GitHub Desktop tool (Mac or Windows, https://desktop.github.com/) to easily move files and commit changes from online GitHub to local computer, and vice versa.
1. Images: (Currently, all images must be about 300px wide, and roughly similar height.) Upload images into the "img" subfolder, or identify URLs to images on an external site.
1. Data: All of the point markers, narrative text, and image links are stored in the data.geojson file. GeoJSON is a popular open format for storing geographical data and its properties (read more at https://en.wikipedia.org/wiki/GeoJSON). GitHub automatically displays GeoJSON files on a map; click the "Raw" button to view and edit the human-readable code. To create your own GeoJSON data (with point markers, narrative, image links, etc.) try this free web tool ( http://geojson.io) and follow these steps:
- In geojson.io, click search icon (magnifiying glass) to find your general location. Click on marker tool to draw points on your map, in the order of your chapters. Note that GeoJSON lists coordinates in longitude/latitude format (like X-Y coordinates in mathematics), NOT the latitude/longitude format (used in Google Maps and Leaflet).
- In geojson.io, click the Table tab, create new columns using these exact header labels, and insert your data:
**TO DO** convert to lower-case in geojson and script.js; add new variables; remove "Source: " from code
  - *id* (Assign numbers 1, 2, 3. . to each point, in desired order of appearance in chapters.)
  - *chapter* (Add header for each section of your narrative.)
  - *zoom* (Your desired zoom level for each chapter, usually between 11 [zoomed out] and 18 [zoomed in])
  - *image* (If storing images in local "img" folder, follow this format: img/photo1.jpg. Or if loading images from an external site, insert the full URL. Currently, images must be about 300px wide and roughly similar height.)
  - *source-credit* (Insert origin of the image, to appear as a caption, in this format: "Source: ABC").
  - *source-link* (Insert hyperlink to make source-credit clickable.)
  - *description* (Add text to appear in the chapter.)
- NOTE: All headers must appear in the data.geojson file, but several items are optional (including chapter, image, description) and may be left blank with empty quotation marks (""). If using geojson.io, click inside each cell of the table to ensure that blank entries (" ") are created. (Goal is to make source-credit and source-link optional, too.)
- In geojson.io, save your file as "data.geojson" and upload to replace existing version, OR copy and paste the content into the existing version.
1. Test your storymap. If you downloaded the code to your computer, set up a local development environment (for Mac, try free MAMP application: https://www.mamp.info), then open the index.html with your browser. If you forked the code to your GitHub account, then use the GitHub Pages feature to host your code on the live web. (See more about GitHub Pages hosting in http://www.datavizbook.org/content/publish/host-html-code-ghpages/tutorial.html).
1. Live web hosting: Upload the entire storymap folder to a web server, or use GitHub Pages hosting feature.

## To Do
- Test IE 9+ browser.
- Test large number of points
- Test in more mobile devices to determine best responsive CSS strategy.
- Modify CSS to create fully responsive design, and ensure that each item in narrative becomes active (especially the last item), regardless of screen size. For one type of responsive strategy, see original @media CSS in: https://github.com/muxlab/map-effects-100/blob/gh-pages/Leaflet/11_scroll-driven-map-navigation.html
- Experiment with these settings/comments: "-50 is a minor adjustment"
- Add code to automatically resize and center images to fit narrative div width, similar to this Mapbox storymap version: http://jackdougherty.github.io/mapbox-storymap/pulse.html
- Test limits of length of text. If length is too long, possibly show excerpts with "read more" link?
- Find a way to make the div chapter length variable, so that the height adjusts automatically for tall images and long descriptions, without adversely lengthening blank space for other chapters.
- Make source-link optional by inserting an if/else statement for source-link=""
- Is there a way to embed clickable hyperlinks inside description field of GeoJSON file?
- Replace generic Leaflet blue markers with numbered circles or icons, matching chapter ID. Consider Font-Awesome-markers numeric (http://stackoverflow.com/questions/22622393/leaflet-awesome-markers-adding-numbers, see https://github.com/lvoogdt/Leaflet.awesome-markers/tree/6dd41539428caa28f75b30fa2cd8dcba2c202a86/dist) or L.letterIcon (http://mapbbcode.org/leaflet.html) or similar.
- Add code to make points clickable to auto-scroll to relevant narrative chapter. See http://muxlab.github.io/map-effects-100/Leaflet/12_map-driven-scroll-navigation.html OR http://jackdougherty.github.io/leaflet-stories
- Aspirational goal: Add code to display different tileLayers (e.g. MAGIC 1934 Aerial, etc.) or overlays for different chapters, based on  instructed in GeoJSON file.
- Create leaflet-storymap-polygons version to tell stories about map boundaries (rather than points). Try creating each boundary chapter as its own geojson file (data1.js, data2.js, etc.), add each when chapter loads (and remove when scrolling backwards), and use fitBounds for each chapter geojson (or a filled-in geojson to draw attention to an area). See http://github.io/jackdougherty/leaflet-storymap-polygons/

## Code contributions welcome
- Submit GitHub pull requests to the dev branch for review/approval
