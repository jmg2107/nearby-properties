var app = angular.module('nearby',[])

.controller('TestController', function($scope, $http){

  $scope.longitude = 0;
  $scope.latitude = 0;
  $scope.properties = [];

  $scope.send = function(){
    var data = {latitude: $scope.latitude, longitude: $scope.longitude};
    var pack =  JSON.stringify(data);
     return $http({
      method: 'POST',
      url: '/api/getProps',
      data: pack
    })
    .then(function(result) {
      console.log(result);
      $scope.properties = result.data;
    });
  };

});