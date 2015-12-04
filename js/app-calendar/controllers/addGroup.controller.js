let AddGroupController = function($scope, AddService) {
  
  let vm = this;

  vm.addGroup = addGroup;

  function addGroup (groupObj) {
    AddService.addGroup(groupObj).then( (res) => {
      console.log(res);
    });
  }
};

AddGroupController.$inject = ['$scope','AddService'];

export default AddGroupController;