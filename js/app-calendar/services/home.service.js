let HomeService = function($http, FILESERVER, $cookies, $state) {
  
  let url = 'http://tiy-basement.herokuapp.com';
  this.showUser = showUser;

   function User (userObj) {
    this.username = userObj.username;
    this.email = userObj.email;
    this.phone = userObj.phone;
    this.password = userObj.password;
    this.showUser = userObj.showUser;
  }



  function showUser (userObj) {
    let token = $cookies.get('Access-Token');
    let u = new User(userObj);
    FILESERVER.SERVER.CONFIG.headers['Access-Token'] = token;

    if (token) {
      console.log(u.username);
      return  $http.get(url+'/user', FILESERVER.CONFIG );
    } else {
      $state.go('root2.splash');
    }
  }
  

};

HomeService.$inject = ['$http', 'FILESERVER', '$cookies', '$state'];

export default HomeService;