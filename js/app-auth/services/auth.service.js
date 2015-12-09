let AuthService = function($http, FILESERVER, $cookies, $state) {

  this.checkAuth = function () {
    let token = $cookies.get('Access-Token');
    let id = $cookies.get('UserID');

    FILESERVER.SERVER.CONFIG.headers['Access-Token'] = token;

    if (token) {
      // console.log(token);
    } else {
      $state.go('root2.splash');
    }
  };

  // this.sendLogin = function (userObj) {
  //   return $http.post(FILESERVER.SERVER.URL + 'login', userObj, FILESERVER.SERVER.CONFIG);
  // };

  // this.loginSuccess = function (res) {
  //   console.log(res);
  //   $cookies.put('authToken', res.data.auth_token);
  //   FILESERVER.SERVER.CONFIG.header['access_token'] = res.data.user.auth_token;
  //   $state.go('root.home');
  // };

  this.logout = function () {
    $cookies.remove('Access-Token');
    FILESERVER.SERVER.CONFIG.headers['Access-Token'] = null;
    $state.go('root2.splash');
  };

};

AuthService.$inject = ['$http', 'FILESERVER', '$cookies', '$state'];

export default AuthService;