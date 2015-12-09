let userName = function (UserService){
    return {

      restrict: 'E',
      replace: true,
      scope: {
        user: '='
      },

      template:`
        <div class="userText">
          Welcome, {{vm.user.username}}
        </div>
      `,

      controller: 'UserController as vm',
      link: function(scope,element,attribute) {
            
      }
    }; 
  };

userName.$inject = ['UserService'];
export default userName;