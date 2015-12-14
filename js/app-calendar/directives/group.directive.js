let groupItem = function($state, UserService) {

  return {
    restrict: 'E',
    replace: true,
    scope: {
      Group: '='
    },
    template: `
      <li ng-repeat="G in vm.groups" Group="G">
        {{G.name}}
      </li>
    `,
    controller: 'UserController as vm',
  
  };
};

groupItem.$inject = ['$state', 'UserService'];

export default groupItem;