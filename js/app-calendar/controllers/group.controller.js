let GroupController = function(GroupService, DeleteService, $stateParams, $state, $cookies) {

  let vm = this;
  vm.deleteGroup = deleteGroup;
  vm.members = [];
  
  //deleteGroup Function
  function deleteGroup(obj) {
      DeleteService.deleteGroup(obj);
      $state.go('root.home');
    };

  //getMembers
  function getMembers(obj){
    GroupService.getMembers(obj).then((res) => {
      console.log(res); 
    })
  }


};

GroupController.$inject = ['GroupService','DeleteService','$stateParams','$state', '$cookies'];

export default GroupController;