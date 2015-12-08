let userItem = function (HomeService){
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

      controller: 'HomeController as vm',
      link: function(scope,element,attribute) {
            
      }
    }; 
  };

userItem.$inject = ['HomeService'];
export default userItem;