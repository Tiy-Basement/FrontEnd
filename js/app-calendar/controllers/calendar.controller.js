let CalendarController = function ($scope, $compile, uiCalendarConfig, $cookies, $http, $stateParams) {

  var date = new Date();
  var d = date.getDate();
  var m = date.getMonth();
  var y = date.getFullYear();
  
  let tkn = $cookies.get('Access-Token');
  let userId = $cookies.get('UserID');



  // gets user events for home calendar
  $scope.myEvents = {
    url: 'http://tiy-basement.herokuapp.com/user/'+ userId + '/events',
    headers: {
      'Access-Token': tkn
    },
    color: '#272255',
    cache: true,
    lazyFetching: true,
  };

  //gets events for the group calendar
  $scope.groupEvents = {
    url: 'http://tiy-basement.herokuapp.com/group/' + $stateParams.id + '/events',  
    headers: {
      'Access-Token': tkn
    },
    cache: true,
    lazyFetching: true,
  };

  $scope.mergeEvents = {
    url: 'http://tiy-basement.herokuapp.com/group/' + $stateParams.id + '/members/events',
    headers: {
      'Access-Token': tkn,
    },
    lazyFetching: true,
    cache: true,
    color: '#1A1B41',
  }
  
  $scope.eventSources = [ $scope.myEvents ];

  $scope.groupSource = [ $scope.groupEvents, $scope.mergeEvents ];


  /* Change View */
  $scope.changeView = function(view,calendar) {
    uiCalendarConfig.calendars[calendar].fullCalendar('changeView',view);
  };

  /* Change View */
  $scope.renderCalender = function(calendar) {
    if(uiCalendarConfig.calendars[calendar]){
      uiCalendarConfig.calendars[calendar].fullCalendar('render');
    }
  };

  /* config object */
  $scope.uiConfig = {
    calendar:{
      editable: false,
      header:{
        left: 'month agendaWeek',
        center: 'title',
        right: 'today prev,next'
      },
      defaultView: 'agendaWeek',
      eventResize: $scope.alertOnResize,
      eventRender: $scope.eventRender,
      timezone: 'local',
      allDaySlot: false,
      minTime: '06:00:00',
      maxTime: '30:00:00',
      firstDay: 1,
    }
  };

};


CalendarController.$inject = ['$scope', '$compile', 'uiCalendarConfig', '$cookies', '$http', '$stateParams'];

export default CalendarController;