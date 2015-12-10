//I SUBSTITUTED THE USER ENDPOINT
//BC THE GROUP ONE DOESN'T GIVE ME A RESPONSE
let groupItem = function($state, UserService) {

  return {
    restrict: 'E',
    replace: true,
    scope: {
      Group: '='
    },
    template: `
      <li ng-repeat="G in vm.groups" Group="G">
        {{G.username}}
      </li>
    `,
    controller: 'UserController as vm',
    link: function (scope, element, attrs) {
      element.on('click', function () {
        $state.go('root.group', {id: scope.G.group_id});
      });
    }
  };
};

groupItem.$inject = ['$state', 'UserService'];

export default groupItem;