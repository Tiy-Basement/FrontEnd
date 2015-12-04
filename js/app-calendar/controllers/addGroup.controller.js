let AddGroupController = function($scope, AddService) {

  console.log(AddService.addGroup);

  $scope.addGroup = function (groupObj) {
    AddService.addGroup(groupObj).then( (res) => {
      console.log(res);
    });
  };
  
};

AddGroupController.$inject = ['$scope', 'AddService'];

export default AddGroupController;