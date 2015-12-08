let DeleteGroupController = function(DeleteService) {
  
  let vm = this;

  vm.deleteGroup = deleteGroup;
  
  function deleteGroup(groupObj) {
    DeleteService.deleteGroup(groupObj).then((res) => {
      console.log(res);
    });
  }
  

};

DeleteGroupController.$inject = ['DeleteService'];

export default DeleteGroupController;