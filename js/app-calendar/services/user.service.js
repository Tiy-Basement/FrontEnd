let UserService = function($http, FILESERVER, $cookies) {

  this.getGroups = getGroups;
  this.getUser = getUser;

  // User Constructor
  function User(userObj){
    this.user_id = userObj.user_id;
    this.username= userObj.username;
  }
  // getUser Function
  function getUser(id){
    return $http.get(FILESERVER.SERVER.URL + 'users', FILESERVER.SERVER.CONFIG);
  }

  // Group Constructor
  function Group (groupObj) {
    this.username = groupObj.username;
  }
  // getGroups Function
  function getGroups() {
    return $http.get(FILESERVER.SERVER.URL + 'users/'+ 'groups', FILESERVER.SERVER.CONFIG);
  }




};

UserService.$inject = ['$http', 'FILESERVER','$cookies'];

export default UserService;