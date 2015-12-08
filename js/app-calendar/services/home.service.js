let HomeService = function($http, FILESERVER, $cookies, $state) {
  
  let url = 'http://tiy-basement.herokuapp.com';

  this.getUser = getUser;
  this.getGroup = getGroup;

  function User (userObj) {
    this.username = userObj.username;
    this.email = userObj.email;
    this.phone = userObj.phone;
    this.password = userObj.password;
  }

  function Group (groupObj) {
    this.name = groupObj.name;
    if(groupObj.password) {
      return (this.join_password = groupObj.password);
    } else {
      return  (this.join_password = null);
    }
  }

  function getGroup(groupObj) {
    let token = $cookies.get('Access-Token');
    FILESERVER.SERVER.CONFIG.headers['Access-Token'] = token;
    if (token) {
      return $http.get(url+'/group', FILESERVER.CONFIG);
    }
  }

  function getUser (userObj) {
    let token = $cookies.get('Access-Token');
    FILESERVER.SERVER.CONFIG.headers['Access-Token'] = token;
    if (token) {
      return  $http.get(url+'/users', FILESERVER.CONFIG );
    } else {
      $state.go('root2.splash');
    }
  }
  

};

HomeService.$inject = ['$http', 'FILESERVER', '$cookies', '$state'];

export default HomeService;