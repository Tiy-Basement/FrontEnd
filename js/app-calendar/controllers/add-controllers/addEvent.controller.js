let AddEventController = function($scope, AddService, $state) {
  
  $scope.addEvent = function(eventObj) {
    AddService.addEvent(eventObj).then((res) => {
      $state.reload($state.current);
    });
  };


};

AddEventController.$inject = ['$scope', 'AddService', '$state'];

export default AddEventController;