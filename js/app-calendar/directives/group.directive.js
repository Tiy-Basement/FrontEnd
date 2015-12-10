let groupItem = function($state, UserService) {
  
  return {
    restrict: 'E',
    replace: true,
    scope: {
      group: '='
    },
    template: `
      <div class="sideGroup">
        <div>{{ group.name }}</div>
      </div>
    `,
    controller: 'GroupController as vm',
    link: function (scope, element, attrs) {
      element.on('click', function () {
        $state.go('root.group', {id: scope.group.group_id});
      });
    }
  };

};

groupItem.$inject = ['$state', 'UserService'];

export default groupItem;