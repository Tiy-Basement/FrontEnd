let DeleteService = function($http, FILESERVER, $cookies, $state, $stateParams) {

  let url = 'http://tiy-basement.herokuapp.com';
  
  this.deleteGroup = deleteGroup;
  this.deleteUser = deleteUser;
  this.leaveGroup = leaveGroup;
  this.deleteEvent = deleteEvent;

   // Group Constructor
  function Group (groupObj) {
    this.id = groupObj.id;
  }

  // Group Constructor
  function User (userObj) {
    this.id = userObj.id;
  }

  function deleteEvent (eventId) {
    return $http.delete(
      url + '/events/' + eventId,
      FILESERVER.SERVER.CONFIG
    );
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
    let user_id = $cookies.get('UserID');
    $http.delete(url + '/group/' + $stateParams.id + '/member/' + user_id, FILESERVER.SERVER.CONFIG);
  }


};

DeleteService.$inject = ['$http', 'FILESERVER', '$cookies', '$state', '$stateParams'];

export default DeleteService;