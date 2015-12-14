let userName = function ($state, UserService){
    return {

      restrict: 'E',
      replace: true,
      scope: {
        user: '='
      },

      template:`
        <div class="userText">
          Welcome, {{vm.user.username}}!
        </div>
      `,
       controller: 'UserController as vm',
    }; 
  };

userName.$inject = ['$state','UserService'];
export default userName;