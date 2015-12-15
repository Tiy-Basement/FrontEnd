let GroupModalEventController = function($scope, $uibModal) {
  

  //opens modal on button click
  $scope.open = function () {

    var modalInstance = $uibModal.open({
      animation: true,
      templateUrl: 'templates/app-calendar/groupModal.tpl.html',
      controller: 'GroupModalController',
      resolve: {
        myEvent: function() {return $scope.myEvent}
      }
    }); 
  }

};

GroupModalEventController.$inject = ['$scope', '$uibModal'];

export default GroupModalEventController;