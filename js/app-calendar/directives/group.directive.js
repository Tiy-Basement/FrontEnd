let groupItem = function($state, UserService, $cookies) {
  
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
        $state.go('root.group', {id: group.group_id});
      });
    }
  };

};

groupItem.$inject = ['$state', 'UserService', '$cookies'];

export default groupItem;