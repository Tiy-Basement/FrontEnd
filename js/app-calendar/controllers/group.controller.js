let GroupController = function(DeleteService, $stateParams, $state, $cookies) {

  let vm = this;

  vm.deleteGroup = deleteGroup;
    
  function deleteGroup(obj) {
      DeleteService.deleteGroup(obj);
      $state.go('root.home');
    };



  vm.groups = [];

  activate();

  function activate () {
    UserService.getGroups().then( (res) => {
      vm.groups = res.data.results;
    });
  }

};

GroupController.$inject = ['DeleteService','$stateParams','$state', '$cookies'];

export default GroupController;