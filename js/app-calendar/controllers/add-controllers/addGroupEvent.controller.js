let GroupEventController = function($scope, AddService, $state, $stateParams) {
  
  $scope.addGroupEvent = function(eventObj) {
    AddService.addGroupEvent(eventObj).then((res) => {
      console.log(res);
      $state.go('root.group', { id: $stateParams.id });
    });
  };


};

GroupEventController.$inject = ['$scope', 'AddService', '$state', '$stateParams'];

export default GroupEventController;