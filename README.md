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
Adapted from MUX Lab, Map Effects 100: https://github.com/muxlab/map-effects-100

## Compare with
- http://jackdougherty.github.io/leaflet-stories/index.html
- http://jackdougherty.github.io/mapbox-storymap/index.html

## Create your own storymap

1. Download a copy of this code, or fork a copy to your GitHub account (requires free sign-up).
1. Title: Edit the title in the index.HTML file, using a text editor. If you downloaded the code, try this free editor: https://atom.io/. If you forked the code on GitHub, view the master branch on the browser and click the editor button (pencil), then commit (save changes). Recommended: Try the free GitHub Desktop tool (Mac or Windows, https://desktop.github.com/) to easily move files and commit changes from online GitHub to local computer, and vice versa.
1. Images: (Currently, all images must be about 300px wide, and roughly similar height.) Upload images into the "img" subfolder, or identify URLs to images on an external site.
1. Data: All of the point markers, narrative text, and image links are stored in the data.geojson file. GeoJSON is a popular open format for storing geographical data and its properties (read more at https://en.wikipedia.org/wiki/GeoJSON). GitHub automatically displays GeoJSON files on a map; click the "Raw" button to view and edit the human-readable code. To create your own GeoJSON data (with point markers, narrative, image links, etc.) try this free web tool ( http://geojson.io) and follow these steps:
- In geojson.io, click search icon (magnifiying glass) to find your general location. Click on marker tool to draw points on your map, in the order of your chapters. Note that GeoJSON lists coordinates in longitude/latitude format (like X-Y coordinates in mathematics), NOT the latitude/longitude format (used in Google Maps and Leaflet).
- In geojson.io, click the Table tab, create columns with these headers, and insert your data:
  - ID (assign numbers 1, 2, 3. . to each point in order )
  - Chapter (header for each section of your narrative)
  - Zoom (your desired zoom level for each chapter, usually between 11 [zoomed out] and 18 [zoomed in])
  - Image (if stored locally, link to each image in your local "img" subfolder; currently must be 300px wide and roughly similar height)
  - ImageSource (web link to the image source)
  - Description (text for the chapter)

- In geojson.io, save your file as "data.geojson" and upload to replace existing version, OR copy and paste the content into the existing version.
1. Optional: Test your map. If you downloaded the code to your computer, set up a local development environment (I recommend the free MAMP for Mac application (https://www.mamp.info), then open the index.html with your browser (I recommend Chrome). If you forked the code to your GitHub account, then use the GitHub Pages feature to host your code on the live web. (See more about GitHub Pages hosting in http://www.datavizbook.org/content/publish/host-html-code-ghpages/tutorial.html).

## To Do
- Test IE 9+ browser.
- Test in more mobile devices, and rethink CSS to be fully responsive (see below).
- Test large number of points
- Test limits of length of text. If length is too long, possibly show excerpts with "read more" link?
- Find a way to make the div chapter length variable, so that the height adjusts automatically for tall images and long descriptions, without adversely lengthening blank space for other chapters.
- Revise code to separate ImageSource and ImageLink (to allow either URL or non-URL text to appear on top of hyperlink), confirm that blank values will render as blank lines, and clarify this as an optional setting in the GeoJSON.
- Modify CSS to create fully responsive design, and ensure that each item in narrative becomes active (especially the last item), regardless of screen size. See original @media CSS for one type of responsive strategy.
- Experiment with these settings/comments: "-50 is a minor adjustment"
- Add code automatically resize and center images to fit narrative div width (similar to pulse version)
- Replace generic Leaflet blue markers with numbered circles or icons, matching chapter ID. Consider Font-Awesome-markers numeric (http://stackoverflow.com/questions/22622393/leaflet-awesome-markers-adding-numbers, see https://github.com/lvoogdt/Leaflet.awesome-markers/tree/6dd41539428caa28f75b30fa2cd8dcba2c202a86/dist) or L.letterIcon (http://mapbbcode.org/leaflet.html) or similar.
- Add code to make points clickable to auto-scroll to relevant narrative chapter, as happens in http://jackdougherty.github.io/leaflet-stories.
- Add if/else statement: if ImageSource == "" then make blank; else do below
- Add code to display different tileLayers (e.g. MAGIC 1934 Aerial, etc.) or overlays for different chapters, as instructed in geoJSON file.
- Create leaflet-storymap-polygons version to tell stories about map boundaries (rather than points). Try creating each boundary chapter as its own geojson file (data1.js, data2.js, etc.), add each when chapter loads (and remove when scrolling backwards), and use fitBounds for each chapter geojson (or a filled-in geojson to draw attention to an area).

## Code contributions welcome
- Submit GitHub pull requests to the dev branch for review/approval
