let GroupController = function(DeleteService, $stateParams, $state, $cookies) {

  let vm = this;
  vm.deleteGroup = deleteGroup;
  
  
  //deleteGroup Function
  function deleteGroup(obj) {
      DeleteService.deleteGroup(obj);
      $state.go('root.home');
    };

};

GroupController.$inject = ['DeleteService','$stateParams','$state', '$cookies'];

export default GroupController;