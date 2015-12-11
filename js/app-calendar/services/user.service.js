let UserService = function($http, FILESERVER, $cookies) {

  // this.getUser = getUser;

  // User Constructor
  function User(userObj){
    this.user_id = userObj.user_id;
    this.username= userObj.username;
  }
  // // getUser Function
  // function getUser(id){
  //   return $http.get(FILESERVER.SERVER.URL + 'users', FILESERVER.SERVER.CONFIG);
  // }

  // Group Constructor
  function Group (groupObj) {
    this.id       = groupObj.id;
    this.username = groupObj.username;
  }

  // getGroups Function

  this.getGroups = function() {
    return $http.get(FILESERVER.SERVER.URL + 'users', FILESERVER.SERVER.CONFIG);
  };

};

UserService.$inject = ['$http', 'FILESERVER','$cookies'];

export default UserService;