let AddService = function($http, $cookies) {
  
  //group constructor
  function Group (groupObj) {
    this.name = groupObj.name;
    if(groupObj.password) {
      return (this.join_password = groupObj.password);
    } else {
      return  (this.join_password = null);
    }
  }
  //post group to server
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

  //event constructor
  function Event (eventObj) {
    this.title = eventObj.title;
    this.start = eventObj.start;
    this.end = eventObj.end;
    this.location = eventObj.location;
    this.note = eventObj.note;
  }
  //post request to server
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
  //member constructor
  function Member(mem) {
    this.username = mem.username;
  }
  //post member to server
  this.addMember = function (mem) {
    let e = new Member(mem);
    let tkn = $cookies.get('Access-Token');
    return $http.post(
      'http://tiy-basement.herokuapp.com/',//dont forget to add endpoint when ready
      e,
      {headers:{
        'Access-Token': tkn
      }}
    );
  };

};

AddService.$inject = ['$http', '$cookies'];

export default AddService;