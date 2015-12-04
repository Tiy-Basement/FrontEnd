let AddService = function($http, $cookies) {
  
  let addGroup = function (groupObj) {

  };

  function Event (eventObj) {
    this.title = eventObj.title;
    this.start = eventObj.start;
    this.end = eventObj.end;
    this.location = eventObj.location;
    this.note = eventObj.note;
  }

  this.addEvent = function (eventObj,$cookies) {
    let e = new Event(eventObj);
    return $http.post(
      'http://tiy-basement.herokuapp.com/event',
      e,
      {headers: $cookies.get(access_token)}
      );
  };


};

AddService.$inject = ['$http', '$cookies'];

export default AddService;