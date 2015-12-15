let UserEventController = function($scope, $uibModal) {
  

  //opens modal on button click
  $scope.open = function () {

    var modalInstance = $uibModal.open({
      animation: true,
      templateUrl: 'templates/app-calendar/userModal.tpl.html',
      controller: 'UserModalController',
      resolve: {
        myEvent: function() {return $scope.myEvent}
      }
    }); 
  }

};

UserEventController.$inject = ['$scope', '$uibModal'];

export default UserEventController;