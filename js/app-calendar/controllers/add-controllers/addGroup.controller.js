
let AddGroupController = function($scope, AddService, $state) {

  $scope.addGroup = function (groupObj) {
    AddService.addGroup(groupObj).then( (res) => {
      $state.go('root.home');
    });
  };
  
};


AddGroupController.$inject = ['$scope', 'AddService', '$state'];

export default AddGroupController;