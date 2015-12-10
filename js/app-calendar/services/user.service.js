let UserService = function($http, FILESERVER, $cookies) {

  this.getGroups = getGroups;
 

  // User Constructor
  function User(userObj){
    this.id = userObj.id;
  }
  // getUser Function
  function getUser(id){
    return $http.get(FILESERVER.SERVER.URL + 'users/' + id, FILESERVER.SERVER.CONFIG);
  }

  // Group Constructor
  function Group (groupObj) {
    this.username = groupObj.username;
  }
  // getGroups Function
  function getGroups() {
    return $http.get(FILESERVER.SERVER.URL + 'users/groups', FILESERVER.SERVER.CONFIG);
  }




};

UserService.$inject = ['$http', 'FILESERVER','$cookies'];

export default UserService;