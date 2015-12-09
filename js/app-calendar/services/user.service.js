let UserService = function($http, FILESERVER) {


  function getGroups () {
    return $http.get(FILESERVER.SERVER.URL + '/' + 'users/groups', FILESERVER.SERVER.CONFIG);
  }

};

UserService.$inject = ['$http', 'FILESERVER'];

export default UserService;