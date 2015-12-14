let GroupController = function(DeleteService, $stateParams, $state, $cookies, UserService, EditService) {

  let vm = this;

  vm.deleteGroup = deleteGroup;
  vm.editGroup = editGroup;
    
  function deleteGroup(obj) {
      DeleteService.deleteGroup(obj);
      $state.go('root.home');
    };

  function editGroup(obj) {
    // console.log('editing the group');
    EditService.editGroup(obj).then( (res) => {
      console.log(res);
    });
    // $state.go('root.group', )
  }



  vm.groups = [];

  activate();

  function activate () {
    UserService.getGroups().then( (res) => {
      vm.groups = res.data.results;
    });
  }

};

GroupController.$inject = ['DeleteService','$stateParams','$state', '$cookies', 'UserService', 'EditService'];

export default GroupController;