let groupItem = function($state, UserService) {
  
  return {
    restrict: 'E',
    replace: true,
    scope: {
      group: '='
    },
    template: `
      <div class="sideGroup" ng-click="vm.clicked(group)">
        <div>{{ group.name }}</div>
      </div>
    `,
    controller: 'HomeController as vm',
    link: function (scope, element, attrs) {
      element.on('click', function () {
        $state.go('root.group', {id: scope.somethingsomethingId});
      });
    }
  };

};

groupItem.$inject = ['$state', 'UserService'];

export default groupItem;