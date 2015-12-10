let userName = function (UserService){
    return {

      restrict: 'E',
      replace: true,
      scope: {
        user: '='
      },

      template:`
        <div class="userText">
          Welcome, {{user.username}}
        </div>
      `,

      controller: 'UserController as vm',
    }; 
  };

userName.$inject = ['UserService'];
export default userName;