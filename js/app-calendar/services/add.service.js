let AddService = function($http, $cookies) {
  
  function Group (groupObj) {
    this.name = groupObj.name;
    if(groupObj.password) {
      return (this.password = groupObj.password);
    } else {
      return  (this.password = null);
    }
  }

  let addGroup = function (groupObj, $cookies) {
    let g = new Group(groupObj);
    return $http.post(
      'http://tiy-basement.herokuapp.com/group',
      g,
      {headers: $cookies.get(access_token)}
    );
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