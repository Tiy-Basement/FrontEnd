let GroupController = function(DeleteService, $stateParams) {

  let vm = this;
  vm.deleteGroup = deleteGroup;
    
  function deleteGroup() {
      DeleteService.deleteGroup().then((res) => {
        console.log(res);
      });
    }


};

GroupController.$inject = ['DeleteService','$stateParams'];

export default GroupController;