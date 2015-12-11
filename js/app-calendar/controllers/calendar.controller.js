let CalendarController = function ($scope, $compile, uiCalendarConfig, $cookies, $http) {

  var date = new Date();
  var d = date.getDate();
  var m = date.getMonth();
  var y = date.getFullYear();
  
  let tkn = $cookies.get('Access-Token');
  let userId = $cookies.get('UserID');

  $scope.events = [];

  $scope.eventSources = [ $scope.events ];

  
  $http.get(
    'http://tiy-basement.herokuapp.com/user/'+ userId + '/events',
    {headers: {
      'Access-Token': tkn
    }}
  ).then( (res) => {
    // trying to push the response into the event array 
    // so the calendar can read it
    angular.copy(res.data, $scope.events);

    // console.log($scope.eventSources);
    // angular.forEach(res.data, (event) => {
    //   console.log(event);
    //   $scope.events.push(event);
    //   console.log($scope.events);
    // });


    // $scope.events.push({
    //     title  : 'event1',
    //     start  : '2015-12-01'
    // });

    // console.log($scope.events);


    // console.log('jd', $scope.events);


  });


  /* event source that calls a function on every view switch */
  $scope.eventsF = function (start, end, timezone, callback) {
    var s = new Date(start).getTime() / 1000;
    var e = new Date(end).getTime() / 1000;
    var m = new Date(start).getMonth();
    var events = [{title: 'Feed Me ' + m,start: s + (50000),end: s + (100000),allDay: false, className: ['customFeed']}];
    callback(events);
  };

  /* alert on eventClick */
  $scope.alertOnEventClick = function( date, jsEvent, view){
    $scope.alertMessage = (date.title + ' was clicked ');
  };

  /* alert on Drop */
  $scope.alertOnDrop = function(event, delta, revertFunc, jsEvent, ui, view){
    $scope.alertMessage = ('Event Droped to make dayDelta ' + delta);
  };

  /* alert on Resize */
  $scope.alertOnResize = function(event, delta, revertFunc, jsEvent, ui, view ){
    $scope.alertMessage = ('Event Resized to make dayDelta ' + delta);
  };

  /* add and removes an event source of choice */
  $scope.addRemoveEventSource = function(sources,source) {
    var canAdd = 0;
    angular.forEach(sources,function(value, key){
      if(sources[key] === source){
        sources.splice(key,1);
        canAdd = 1;
      }
    });
    if(canAdd === 0){
      sources.push(source);
    }
  };


  /* remove event */
  $scope.remove = function(index) {
    $scope.events.splice(index,1);
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

  /* Render Tooltip */
  $scope.eventRender = function( event, element, view ) { 
    element.attr({'tooltip': event.title,
                   'tooltip-append-to-body': true});
    $compile(element)($scope);
  };

  /* config object */
  $scope.uiConfig = {
    calendar:{
      editable: true,
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
    }
  };

  /* event sources array*/
  // $scope.eventSources = [$scope.events];
  // console.log($scope.eventSources)
};


CalendarController.$inject = ['$scope', '$compile', 'uiCalendarConfig', '$cookies', '$http'];

export default CalendarController;