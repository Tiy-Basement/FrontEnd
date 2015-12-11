let DeleteService = function($http, FILESERVER, $cookies, $state, $stateParams) {

  let url = 'http://tiy-basement.herokuapp.com';
  
  this.deleteGroup = deleteGroup;
  this.deleteUser = deleteUser;
  this.deleteEvent = deleteEvent;

   // Group Constructor
  function Group (groupObj) {
    this.id       = groupObj.id;
    this.username = groupObj.username;
  }

 // let groupId = $cookies.get('groupId');
 //  console.log(groupId);



  function deleteGroup () {
    console.log($stateParams.id);
    // return $http.delete(url +'group/'+$stateParams.id, 
    //   FILESERVER.CONFIG);
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

DeleteService.$inject = ['$http', 'FILESERVER', '$cookies', '$state', '$stateParams'];

export default DeleteService;