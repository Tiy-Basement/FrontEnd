let AddGroupController = function($scope) {
  
  let vm = this;

  vm.addGroup = addGroup;

  function addGroup (groupObj) {
    AddService.addGroup(groupObj).then( (res) => {
      console.log(res);
    });
  }
};

AddGroupController.$inject = ['$scope'];

export default AddGroupController;