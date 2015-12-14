let UserService = function($http, FILESERVER, $cookies) {

  // Group Constructor
  function Group (groupObj) {
    this.id       = groupObj.id;
    this.username = groupObj.username;
  }

  let userId = $cookies.get('UserID');
  // console.log(userId);

  let token = $cookies.get('Access-Token');


  // getUserGroups Function
  this.getUserGroups = function() {
    return $http.get(FILESERVER.SERVER.URL + 'users/info', {headers: {'Access-Token':token}});
  };


};

UserService.$inject = ['$http', 'FILESERVER','$cookies'];

export default UserService;