
let groupItem = function($state, UserService) {
  
  return {
    restrict: 'E',
    replace: true,
    scope: {
      car: '='
    },
    template: `
      <div>
        {{vm.group.name}}
      </div>
    `,
    controller: 'GroupController as vm',
    link: function (scope, element, attrs) {

    }
  };
};

groupItem.$inject = ['$state', 'UserService'];

export default groupItem;