let UserService = function($http, FILESERVER) {
  
  this.showUserName = showUserName;


  function showUserName () {
    return $http.get(FILESERVER.SERVER.URL + '/users/', FILESERVER.SERVER.CONFIG);
  }

 function getGroup(groupObj) {
  let token = $cookies.get('Access-Token');
  FILESERVER.SERVER.CONFIG.headers['Access-Token'] = token;
    if (token) {
      return $http.get(url+'/group', FILESERVER.CONFIG);
    }
  }
};

UserService.$inject = ['$http', 'FILESERVER'];

export default UserService;