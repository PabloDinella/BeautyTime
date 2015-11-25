angular.module('app.controllers', [])

.controller('serviçOCtrl', function($scope) {

})

.controller('agendarCtrl', function($scope) {

})

.controller('buscarCtrl', function($scope) {

})

.controller('meusHoráRiosCtrl', function($scope) {

})

.controller('confirmaçãOCtrl', function($scope) {

})

.controller('searchPage', ['$scope', '$location', function($scope, $location) {

  $scope.changeView = function() {
    var view = "#/buscar";
    $location.path(view);
    console.log("eeee");
  };


}])
