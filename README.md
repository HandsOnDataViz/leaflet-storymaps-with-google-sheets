# leaflet-storymap
Leaflet storymap with scroll-driven navigation for narrative and point markers

## Demo
http://jackdougherty.github.io/leaflet-storymap/index.html

### Benefits
- Clean scroll-driven navigation, which allows users to pan and zoom the map independently of the narration, for further exploration. Initial map displays all markers.
- Images are stored in a local subfolder. Coordinate points, narration text, image links, and zoom levels for each chapter are stored in a local geoJSON file, which makes it easier to create new storymaps with minimal coding.
- Responsive design that automatically resizes for all devices (but coding needs to be improved.)
- Works in modern browsers (Chrome, Firefox, IE, Safari, including 1st generation iPad). Not supported in IE 8 or lower.
- Uses only free and open-source Leaflet.js and jQuery libraries.

## Credits
Adapted from MUX Lab, Map Effects 100: https://github.com/muxlab/map-effects-100

## Compare with
- http://jackdougherty.github.io/leaflet-stories/index.html
- http://jackdougherty.github.io/mapbox-storymap/index.html

## Set up your title, point markers, narrative, and images

1. Download a copy of this code, or fork a copy to your GitHub account (requires free sign-up).
1. To modify the title in the index.HTML file, use a text editor tool. If you downloaded the code, I recommend this free editor: https://atom.io/. If you forked the code on GitHub, use the built-in editor in the browser. Optional: download the free GitHub Desktop tool to easily migrate your file changes from GitHub to local computer, and vice versa.
1. Create images (currently must be 300px wide), organize file names, and upload into the "img" subfolder.
1. To create the point markers, narrative text, and links to your images, use a geoJSON creation tool. I recommend this free web app: http://geojson.io)
- In geojson.io, use "search" icon to find your general location, and click on marker tool to draw points on your map, in the order of your chapters. Note that GeoJSON uses longitude/latitude format, NOT the latitude/longitude format used in Leaflet.)
- In geojson.io, click the Table tab, and create columns named:
  - ID (numbers 1, 2, 3. . )
  - Chapter (header for each section of your narrative)
  - Zoom (your desired zoom level for each chapter)
  - Image (link to each image in your local "img" subfolder; currently must be 300px wide and roughly similar height)
  - ImageSource (web link to the image source)
  - Description (text for the chapter)

1. In geojson.io, save your file as "data.geojson" and upload to replace existing file in local folder, OR simply copy and paste the content into the existing data.geojson file.
1. Optional: Test your map. If you downloaded the code to your computer, set up a local development environment (I recommend the free MAMP for Mac application (https://www.mamp.info), then open the index.html with your browser (I recommend Chrome). If you forked the code to your GitHub account, then use the GitHub Pages feature to host your code on the live web. (See more about GitHub Pages hosting in http://www.datavizbook.org/content/publish/host-html-code-ghpages/tutorial.html).

## To Do
- Reorganize from one HTML file into separate JS and CSS files
- Test IE 9+ browser.
- Modify CSS to create fully responsive design, and ensure that each item in narrative becomes active (especially the last item), regardless of screen size. See original @media CSS for one type of responsive strategy.
- Experiment with these settings/comments: "-50 is a minor adjustment"
- Add code automatically resize and center images to fit narrative div width (similar to pulse version)
- Replace generic Leaflet blue markers with numbered circles or icons, matching chapter ID
- Add code to make points clickable to auto-scroll to relevant narrative chapter, as happens in http://jackdougherty.github.io/leaflet-stories.
- Add if/else statement: if ImageSource == "" then make blank; else do below
- Add code to display different tileLayers (e.g. MAGIC 1934 Aerial, etc.) or overlays for different chapters, as instructed in geoJSON file.
- Create leaflet-storymap-polygons version to tell stories about map boundaries (rather than points). Try creating each boundary chapter as its own geojson file (data1.js, data2.js, etc.), add each when chapter loads (and remove when scrolling backwards), and use fitBounds for each chapter geojson (or a filled-in geojson to draw attention to an area).
