let GroupService = function($http, FILESERVER, $cookies, $stateParams) {
  

   // Group Constructor
  function Group (groupObj) {
    this.id       = groupObj.id;
    this.name = groupObj.name;
  }

  let userId = $cookies.get('UserID');
  console.log(userId);

  let token = $cookies.get('Access-Token');
  console.log($stateParams.id);

  //get group events function
  this.getGroupEvents = function (){
    return $http.get(FILESERVER.SERVER.URL+'group/'+$stateParams.id+'/events', {headers:{'Access-Token':token}})
  }
  
  // get group members--- route doesn't work
  this.getMembers = function (){
    return $http.get(FILESERVER.SERVER.URL+'group/'+$stateParams.id+'/info', {headers:{'Access-Token':token}})
  }
  //get single group--- route doesn't work
  this.getSingleGroup = function (){
    return $http.get(FILESERVER.SERVER.URL+'group/'+$stateParams.id, {headers: {'Access-Token': token}})
  }
};

GroupService.$inject = ['$http','FILESERVER', '$cookies', '$stateParams'];

export default GroupService;