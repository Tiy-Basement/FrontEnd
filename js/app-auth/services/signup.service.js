let SignupService = function($http) {

  // let url = heroku stuff

  this.addUser = addUser;

  function User (userObj) {
    this.name = userObj.name;
    this.email = userObj.email;
    this.phone = userObj.phone;
    this.password = userObj.password;
  }

  function addUser(userObj) {
    let u = new User(userObj);
    console.log(u);
    // return $http.post(url, u, /*  server headers/config  */);
  }

};
   
SignupService.$inject = ['$http'];

export default SignupService;