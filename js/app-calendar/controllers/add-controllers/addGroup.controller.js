
let AddGroupController = function($scope, AddService, $state) {

  // console.log(AddService.addGroup);

  $scope.addGroup = function (groupObj) {
    AddService.addGroup(groupObj).then( (res) => {
      // console.log(res);
      $state.go('root.home');
    });
  };
  
};



AddGroupController.$inject = ['$scope', 'AddService', '$state'];

export default AddGroupController;