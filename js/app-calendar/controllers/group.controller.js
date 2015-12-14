let GroupController = function(DeleteService, $stateParams, $state, $cookies, UserService, EditService) {

  // console.log($stateParams);

  let vm = this;

  vm.deleteGroup = deleteGroup;
  vm.editGroup = editGroup;

  
  
  //deleteGroup Function
  function deleteGroup(obj) {
      DeleteService.deleteGroup(obj);
      $state.go('root.home');
  };

  function editGroup (groupObj) {
    // console.log('editing the group');
    EditService.editGroup(groupObj).then( (res) => {
      console.log(res);
      // $state.go('root.group', { id: res.data.id});
    });
  }



  // vm.groups = [];

  // activate();

  // function activate () {
  //   UserService.getGroups().then( (res) => {
  //     vm.groups = res.data.results;
  //   });
  // }

};

GroupController.$inject = ['DeleteService','$stateParams','$state', '$cookies', 'UserService', 'EditService'];

export default GroupController;