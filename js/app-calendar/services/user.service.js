let UserService = function($http, FILESERVER, $cookies,$stateParams) {


  // Group Constructor
  function Group (groupObj) {
    this.id       = groupObj.id;
    this.username = groupObj.username;
  }

  let userId = $cookies.get('UserID');
  console.log(userId);

  // getUserGroups Function
  this.getUserGroups = function() {
    return $http.get(FILESERVER.SERVER.URL + 'users/'+'groups', FILESERVER.SERVER.CONFIG.headers);
  };


};

UserService.$inject = ['$http', 'FILESERVER','$cookies','$stateParams'];

export default UserService;