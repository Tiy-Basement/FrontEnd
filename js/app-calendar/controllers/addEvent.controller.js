let AddEventController = function($scope, AddService, $state) {
  
  $scope.addEvent = function(eventObj) {
    AddService.addEvent(eventObj).then((res) => {
      console.log(res);
      $state.go('root.home', { id: res.data.event.user_id });
    });
  };


};

AddEventController.$inject = ['$scope', 'AddService', '$state'];

export default AddEventController;