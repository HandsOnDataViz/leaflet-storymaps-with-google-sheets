# Leaflet Storymaps with Google Sheets
Customize your Leaflet story map with linked Google Sheets template and scrolling narrative.
Supports images, audio and video embeddings, and Leaflet TileLayer/geojson overlays.

<p align="center">
  <img src="./leaflet-storymaps-demo.gif" title="Storymaps demo" />
</p>

## Live links (replace with your own)
- Leaflet Map https://handsondataviz.github.io/leaflet-storymaps-with-google-sheets/
- The map is hosted by GitHub and can be found at https://handsondataviz.github.io/leaflet-storymaps-with-google-sheets/
- Google Sheets template https://docs.google.com/spreadsheets/d/1AO6XHL_0JafWZF4KEejkdDNqfuZWUk3SlNlQ6MjlRFM/edit#gid=0

## Create Your Own
- See step-by-step tutorial in *Hands-On Data Visualization* https://HandsOnDataViz.org/leaflet-storymaps-with-google-sheets.html

#### Geocode your address data with Google Sheets add-on
To geocode (find latitude and longitude coordinates), we recommend installing the free [Geocoding by SmartMonkey add-on for Google Sheets](https://gsuite.google.com/marketplace/app/geocoding_by_smartmonkey/1033231575312). Insert your addresses in place of the samples in the Geocoding Details tab, then use Add-Ons > Geocoding > Geocode Details menu. Learn more in *Hands-On Data Visualization* https://handsondataviz.org/geocode.html

![Geocoding](geocode.png)

#### To finalize your map, you need to either:
- Download each Google Sheets tab as a CSV file and upload into a `csv` subfolder in your GitHub repo
  - OR
- Get your own Google Sheets API Key to insert into `google-doc-url.js`

See more in the tutorial https://handsondataviz.org/leaflet-storymaps-with-google-sheets.html

## Problem: The map I created here before September 2020 is not working
Google Sheets changed its API from version 3 to version 4 after Sept 30th 2020, which breaks prior versions of the map, so we made several updates to the code. To make your pre-Sept 2020 maps work again, here are four options, A-B-C-D:

Option A: Use your existing code and pull your data from CSV files rather than the linked Google Sheet.

1. Go to your linked Google Sheet, and for each tab, *File > Download* in CSV format, and rename them this way: Chapters.csv, Options.csv.
2. Log into the web interface of your GitHub storymap repository.
3. Create a new subfolder named `csv` in your GitHub repo, by selecting *Add file > Create a file* and typing in `csv/`. The forward slash indicates it is a folder, not a file.
4. In your GitHub repo, upload each CSV file you created into this new `csv` subfolder.
5. In your Github repo, open the `google-doc-url.js` file, scroll to the bottom of the page, and delete it.
Now the code automatically searches for data in your CSV folder, rather than your Google Sheet. If desired, you can continue to use the Google Sheet to edit your storymap content, then upload those changes to the CSV folder each time. Or you can edit the CSV files directly.

OR

Option B: If you originally "forked" a copy of our code, create a GitHub "pull request" to update your repo with our code revisions.

Advice: We recommend this option only if you understand (or are willing to learn about) GitHub pull requests, and can deal with
Warning: Since this operation might overwrite some of your code, go to *Code > Download ZIP* to make a backup to your local computer.
1. Log into the web interface fo your GitHub storymap repository.
2. Click *Pull requests* and click the green button for a *New pull request*.
3. On the *Comparing Changes* page, use the menus to pull code *into* your repo *from* the original repo, named HandsOnDataViz/leaflet-storymaps-with-google-sheets. GitHub may warn that you cannot automatically merge the files, but proceed anyways.
4. You may need to click the *Resolve conflicts* button on the next screen to .... CONTINUE HERE

OR

Option C: Use GitHub Desktop to move copies of the newer code (index.html, scripts folder, etc.) into your repo via your local computer.

OR

Option D: Make a copy of our newer code by clicking the green 'Use template' button. Migrate any media or geodata content from your old repo to your new repo. Reconnect your Google Sheet to your new repo.

## Credits (and licenses)
Developed by [Ilya Ilyankou](https://github.com/ilyankou) and [Jack Dougherty](https://github.com/jackdougherty) with support from Trinity College, CT. Inspired by Code for Atlanta mapsfor.us (2016) https://github.com/codeforatlanta/mapsforus (BSD-3-Clause). Adapted from MUX Lab, Map Effects 100: https://github.com/muxlab/map-effects-100, see http://muxlab.github.io/map-effects-100/Leaflet/11_scroll-driven-map-navigation.html.

We use [Google Sheets API version 4](https://developers.google.com/sheets/api), with these open-source components:

- Leaflet v1.7.1 https://leafletjs.com (BSD-2-Clause)
- jQuery v3.5.1 https://code.jquery.com (MIT)
- PapaParse v5.3.0 to parse CSV with JavaScript (MIT)
- Font Awesome v5.8.1 https://cdn.fontawesome.com (MIT, SIL OFL 1.1)
- leaflet-providers (v1.10.2) https://github.com/leaflet-extras/leaflet-providers (BSD-2-Clause)
- Leaflet.awesome-markers (v2.0.4), manually updated to svg to allow hex and material icons https://github.com/sigma-geosistemas/Leaflet.awesome-markers (MIT)
- Leaflet.ExtraMarkers (v1.0.5) https://github.com/coryasilva/Leaflet.ExtraMarkers (MIT)
- jQuery-CSV (v1.0.11) https://github.com/evanplaice/jquery-csv (MIT)
- Single Element CSS Spinner (31 May 2016) https://github.com/lukehaas/css-loaders (MIT)
