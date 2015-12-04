let AddEventController = function($scope, AddService) {
  
  $scope.addEvent = function(eventObj) {
    AddService.addEvent(eventObj).then((res) => {
      console.log(res);
    })
  }


};

AddEventController.$inject = ['$scope', 'AddService'];

export default AddEventController;