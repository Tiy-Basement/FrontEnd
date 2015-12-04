let HomeController = function($scope) {
  
  console.log('Hey, home page!');

  $scope.eventSources = [];

  // $scope.uiConfig = {
  //   calendar:{
  //     height: 450,
  //     editable: true,
  //     header:{
  //       left: 'month basicWeek basicDay agendaWeek agendaDay',
  //       center: 'title',
  //       right: 'today prev,next'
  //     },
  //     dayClick: $scope.alertEventOnClick,
  //     eventDrop: $scope.alertOnDrop,
  //     eventResize: $scope.alertOnResize
  //   }
  // };

};

HomeController.$inject = ['$scope'];

export default HomeController;