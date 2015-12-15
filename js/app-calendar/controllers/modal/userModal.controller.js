let UserModalController = function($scope, $uibModalInstance) {
  

  $scope.ok = function () {
    $uibModalInstance.close();
  };

  $scope.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };

};

UserModalController.$inject = ['$scope', '$uibModalInstance'];

export default UserModalController;