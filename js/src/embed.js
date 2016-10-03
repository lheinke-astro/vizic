// Load css
require('leaflet/leaflet.css');
require('leaflet-draw/dist/leaflet.draw.css');

// Forcibly load the marker icon images to be in the bundle.
require('leaflet/images/marker-shadow.png');
require('leaflet/images/marker-icon.png');
require('leaflet/images/marker-icon-2x.png');

// Export everything from jupyter-leaflet and the npm package version number.
module.exports = require('./jupyter-astro-leaflet.js');
module.exports['version'] = require('../package.json').version;
