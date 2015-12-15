let GroupModalController = function($scope, $uibModalInstance) {
  

  $scope.ok = function () {
    $uibModalInstance.close();
  };

  $scope.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };

};

GroupModalController.$inject = ['$scope', '$uibModalInstance'];

export default GroupModalController;