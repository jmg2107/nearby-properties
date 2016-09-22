# nearby-properties
Return list of properties within 20 miles of input lat/long coordinates

This app uses geolib (https://www.npmjs.com/package/geolib) on the backend to calculate if input coordinates are within 20 miles of the saved list of properties

Setup:
-git clone from https://github.com/jmg2107/nearby-properties
-npm install

How App works:
-send POST to '/api/getProps', where req.body is
{latitude: <lat coordinate> , longitude: <long coordinate>}
-app will send back list of properties in an array

To use app UI (locally):
-run 'node index.js' from terminal
-navigate to http://http://localhost:3000/ from your browser

To use app UI (deployed version):
-navigate to https://nearby-properties.herokuapp.com/
