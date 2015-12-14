let GroupService = function($http, FILESERVER, $cookies) {
  

   // Group Constructor
  function Group (groupObj) {
    this.id       = groupObj.id;
    this.username = groupObj.username;
  }

  let userId = $cookies.get('UserID');
  console.log(userId);

  let token = $cookies.get('Access-Token');

  this.getMembers = function (){
    console.log('hello');
  }

};

GroupService.$inject = ['$http','FILESERVER', '$cookies'];

export default GroupService;