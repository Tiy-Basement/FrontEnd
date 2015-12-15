let GroupEventController = function($scope, AddService, $state, $stateParams) {
  
  $scope.addGroupEvent = function(eventObj) {
    AddService.addGroupEvent(eventObj).then((res) => {
      $state.reload($state.current);
    });
  };


};

GroupEventController.$inject = ['$scope', 'AddService', '$state', '$stateParams'];

export default GroupEventController;