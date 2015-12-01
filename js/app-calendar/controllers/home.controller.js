let HomeController = function($scope) {
  
  console.log('Hey, home page!');

  $scope.eventSources = [];

};

HomeController.$inject = ['$scope'];

export default HomeController;