let DeleteService = function($http, FILESERVER, $cookies, $state) {

  let url = 'http://tiy-basement.herokuapp.com';
  
  this.deleteGroup = deleteGroup;
  this.deleteUser = deleteUser;
  this.deleteEvent = deleteEvent;

  function deleteGroup () {
    let token = $cookies.get('Access-Token');
    FILESERVER.SERVER.CONFIG.headers['Access-Token'] = token;

    if (token) {
      return $http.delete(url +'/group', 
      FILESERVER.CONFIG);
    } else {
      $state.go('root2.splash');
    }
  }

  function deleteUser (){
    let token = $cookies.get('Access-Token');
    FILESERVER.SERVER.CONFIG.headers['Access-Token'] = token;

    if(token) {
      $http.delete(url+'/users', FILESERVER.CONFIG);
    } else {
      $state.go('root2.splash');
    }
  }


  function deleteEvent(){
    let token = $cookies.get('Access-Token');
    FILESERVER.SERVER.CONFIG.headers['Access-Token'] = token;

    if(token) {
      alert('you are fucking absolutely everything up');
    } else {
      $state.go('root2.splash');
    }
  }

};

DeleteService.$inject = ['$http', 'FILESERVER', '$cookies', '$state'];

export default DeleteService;