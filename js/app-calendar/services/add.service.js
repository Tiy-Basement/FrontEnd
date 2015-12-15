
let AddService = function($http, $cookies, FILESERVER, $stateParams, $state) {

  // let this = vm;

  this.joinGroup = joinGroup;

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
    ).then($state.go('root.home'));
  };

  let joinUrl = FILESERVER.SERVER.URL + 'group/member';

  function joinGroup(groupObj) {
    console.log('things are happening');
    let g = new Group(groupObj);
    let tkn = $cookies.get('Access-Token');
    return $http.post(
      joinUrl,
      g,
      {headers: {
        'Access-Token': tkn
      }}
    ).then($state.go('root.home'));
  }

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
      'http://tiy-basement.herokuapp.com/events',
      e,
      {headers: {
        'Access-Token' : tkn
      }} 
    ).then($state.reload($state.current));
  };

  this.addGroupEvent = function(eventObj){
    let e = new Event(eventObj);
    let tkn = $cookies.get('Access-Token');
    return $http.post(
      'http://tiy-basement.herokuapp.com/group/' + $stateParams.id + '/events',
      e,
      {headers:{'Access-Token': tkn}}
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

AddService.$inject = ['$http', '$cookies', 'FILESERVER', '$stateParams', '$state'];

export default AddService;