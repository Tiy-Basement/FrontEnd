let DeleteService = function($http, FILESERVER, $cookies, $state) {

  let url = 'http://tiy-basement.herokuapp.com';
  
  this.deleteGroup = deleteGroup;
  this.deleteUser = deleteUser;

  function deleteGroup () {
    let token = $cookies.get('Access-Token');
    FILESERVER.SERVER.CONFIG.headers['Access-Token'] = token;

    if (token) {
      $http.delete(url +'/group', FILESERVER.CONFIG);
      return $state.go('root.home');
    } else {
      $state.go('root2.splash');
    }
  }


  function deleteUser (){
    let token = $cookies.get('Access-Token');
    FILESERVER.SERVER.CONFIG.headers['Access-Token'] = token;

    if(token) {
      prompt('are you sure');
      $http.delete(url+'/users/:id');
    } else {
      $state.go('root2.splash');
    }
  }


};

DeleteService.$inject = ['$http', 'FILESERVER', '$cookies', '$state'];

export default DeleteService;