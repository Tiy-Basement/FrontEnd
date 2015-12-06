let AddMemberController = function($scope, AddService) {
  
  $scope.addMember = function(mem) {
    AddService.addMember(mem).then((res) => {
      console.log(res);
    });
  };
};

AddMemberController.$inject = ['$scope', 'AddService'];

export default AddMemberController;