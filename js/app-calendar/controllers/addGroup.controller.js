
let AddGroupController = function($scope, AddService, $state) {

  // console.log(AddService.addGroup);

  $scope.addGroup = function (groupObj) {
    AddService.addGroup(groupObj).then( (res) => {
      console.log(res);
      $state.go('root.current', { id: res.data.group.id }, {reload: true});
    });
  };
  
};



AddGroupController.$inject = ['$scope', 'AddService', '$state'];

export default AddGroupController;