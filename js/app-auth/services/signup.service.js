let SignupService = function($http) {

  function User (userObj) {
    this.name = userObj.name;
    this.email = userObj.email;
    this.phone = userObj.phone;
    this.password = userObj.password;
  }

  function addUser(userObj) {
    let u = new User(userObj);
    // return $http.post(url, u, /*  server headers/config  */);
  }

};
   
SignupService.$inject = ['$http'];

export default SignupService;