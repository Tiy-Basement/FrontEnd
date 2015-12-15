let AddEventController = function($scope, AddService, $state) {
  
  $scope.addEvent = function(eventObj) {
    AddService.addEvent(eventObj).then((res) => {
      console.log(res);
      $state.reload($state.current);
    });
  };


};

AddEventController.$inject = ['$scope', 'AddService', '$state'];

export default AddEventController;