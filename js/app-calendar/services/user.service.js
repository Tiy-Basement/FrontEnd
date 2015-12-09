let UserService = function($http, FILESERVER) {
  
  // console.log('User Service');

  function getUser (id) {
    return $http.get(FILESERVER.SERVER.URL + '/' + id, FILESERVER.SERVER.CONFIG);
  }

  function getGroups () {
    return $http.get(FILESERVER.SERVER.URL + '/' + 'users/groups', FILESERVER.SERVER.CONFIG);
  }

};

UserService.$inject = ['$http', 'FILESERVER'];

export default UserService;