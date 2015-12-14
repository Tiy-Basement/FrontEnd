let GroupController = function(DeleteService, $stateParams, $state, $cookies, $scope) {

  let vm = this;
  vm.deleteGroup = deleteGroup;

  //routes to add group event page
  $scope.routeToAdd = function () {
    $state.go('root.addGroupEvent', {id: $stateParams.id});
  };
  
  
  //deleteGroup Function
  function deleteGroup(obj) {
    DeleteService.deleteGroup(obj);
    $state.go('root.home');
  };

};

GroupController.$inject = ['DeleteService','$stateParams','$state', '$cookies', '$scope'];

export default GroupController;