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
    color: '#7D90C3',
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
  
  $scope.eventSources = [ $scope.myEvents ];

  $scope.groupSource = [ $scope.groupEvents ];


  /* event source that calls a function on every view switch */
  $scope.eventsF = function (start, end, timezone, callback) {
    var s = new Date(start).getTime() / 1000;
    var e = new Date(end).getTime() / 1000;
    var m = new Date(start).getMonth();
  };

  /* alert on eventClick */
  $scope.alertOnEventClick = function( date, jsEvent, view){
    $scope.alertMessage = (date.title + ' was clicked ');
    console.log("john", date);
  };

  /* alert on Drop */
  $scope.alertOnDrop = function(event, delta, revertFunc, jsEvent, ui, view){
    $scope.alertMessage = ('Event Droped to make dayDelta ' + delta);
    console.log(event);
  };

  /* alert on Resize */
  $scope.alertOnResize = function(event, delta, revertFunc, jsEvent, ui, view ){
    $scope.alertMessage = ('Event Resized to make dayDelta ' + delta);
  };

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
      eventClick: $scope.alertOnEventClick,
      eventDrop: $scope.alertOnDrop,
      eventResize: $scope.alertOnResize,
      eventRender: $scope.eventRender,
      timezone: 'local',
    }
  };

};


CalendarController.$inject = ['$scope', '$compile', 'uiCalendarConfig', '$cookies', '$http', '$stateParams'];

export default CalendarController;