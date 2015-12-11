let DeleteService = function($http, FILESERVER, $cookies, $state, $stateParams) {

  let url = 'http://tiy-basement.herokuapp.com';
  
  this.deleteGroup = deleteGroup;
  this.deleteUser = deleteUser;

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
  }
  
  //Delete User Function 
  function deleteUser (){
  $http.delete(url+'/user/'+$stateParams.id, FILESERVER.CONFIG);

  }

};

DeleteService.$inject = ['$http', 'FILESERVER', '$cookies', '$state', '$stateParams'];

export default DeleteService;