let GroupService = function($http, FILESERVER, $cookies, $stateParams) {
  

   // Group Constructor
  function Group (groupObj) {
    this.id       = groupObj.id;
    this.username = groupObj.username;
  }

  let userId = $cookies.get('UserID');
  console.log(userId);

  let token = $cookies.get('Access-Token');
  console.log($stateParams.id);

  this.getMembers = function (){
    return $http.get(FILESERVER.SERVER.URL+'group/'+$stateParams.id+'/members', {headers:{'Access-Token':token}})
  }

};

GroupService.$inject = ['$http','FILESERVER', '$cookies', '$stateParams'];

export default GroupService;