let DeleteGroupController = function(DeleteService) {
  
  let vm = this;

  vm.deleteGroup = deleteGroup;

  function deleteGroup (groupObj, password) {
    DeleteService.deleteGroup(groupObj).then( (res) => {
      console.log ('from controller: deleted group');
    });
  }
};

DeleteGroupController.$inject = ['DeleteService'];

export default DeleteGroupController;