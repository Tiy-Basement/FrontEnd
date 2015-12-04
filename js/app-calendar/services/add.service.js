let AddService = function($http, $cookies) {
  

  function Group (groupObj) {
    this.name = groupObj.name;
    if(groupObj.password) {
      return (this.join_password = groupObj.password);
    } else {
      return  (this.join_password = null);
    }
  }

  this.addGroup = function (groupObj) {
    let g = new Group(groupObj);
    let tkn = $cookies.get('Access-Token');
    return $http.post(
      'http://tiy-basement.herokuapp.com/group',
      g,
      {headers: {
        'Access-Token': tkn
      }}
    );
  };

  function Event (eventObj) {
    this.title = eventObj.title;
    this.start = eventObj.start;
    this.end = eventObj.end;
    this.location = eventObj.location;
    this.note = eventObj.note;
  }

  this.addEvent = function (eventObj) {
    let e = new Event(eventObj);
    let tkn = $cookies.get('Access-Token');
    return $http.post(
      'http://tiy-basement.herokuapp.com/event',
      e,
      {headers: {
        'Access-Token' : tkn
      }} 
    );
  };


};

AddService.$inject = ['$http', '$cookies'];

export default AddService;