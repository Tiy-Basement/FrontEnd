let DeleteService = function($http, FILESERVER, $cookies, $state, $stateParams) {

  let url = 'http://tiy-basement.herokuapp.com';
  
  this.deleteGroup = deleteGroup;
  this.deleteUser = deleteUser;
  this.leaveGroup = leaveGroup;

   // Group Constructor
  function Group (groupObj) {
    this.id = groupObj.id;
  }

  // Group Constructor
  function User (userObj) {
    this.id = userObj.id;
  }


  //Delete Group Function
  function deleteGroup () {
   $http.delete(url+'/group/'+$stateParams.id, FILESERVER.SERVER.CONFIG);
   $state.go('root.home');
  }
  
  //Delete User Function 
  function deleteUser (){
    $http.delete(url+'/user/'+$stateParams.id, FILESERVER.SERVER.CONFIG);

  }

  // Leave a group (destroy membership)
  function leaveGroup () {
    $http.delete(SOME_URL, FILESERVER.SERVER.CONFIG);
  }


};

DeleteService.$inject = ['$http', 'FILESERVER', '$cookies', '$state', '$stateParams'];

export default DeleteService;