let UserModalController = function($scope, $uibModalInstance, myEvent) {
  
  $scope.myEvent = myEvent;

  $scope.ok = function () {
    $uibModalInstance.close(console.log(myEvent));
  };

  $scope.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };

};

UserModalController.$inject = ['$scope', '$uibModalInstance', 'myEvent'];

export default UserModalController;