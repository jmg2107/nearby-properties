var geolib = require('geolib');
var prop = require('../db/properties.js')['list'];


module.exports = {

  getProps: function(req, res, next){

    var center = req.body;
    var result = [];
    prop.forEach(function(place, ind, arr){
      var check = {latitude: place['lat'],
                  longitude: place['long']};
      //set the center of 20 mile radius circle to be from req
      //check if each property is within 20 miiles
      if(geolib.isPointInCircle(check, center, 32186.9)){
        //if within 20 miles (32186.9 meters), push property to result array
        result.push(place);
      }
    });
    var packet = JSON.stringify(result);
    res.end(packet);

  }

};