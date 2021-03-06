let noteItem = function($state, SOMESERVICE) {
  
  return {
    restrict: 'E',
    replace: true,
    scope: {
      event: '='
    },
    template: `
      <div class="sideNote">
        <div>{{ event.group_name }}</div>
        <div>{{ event.title }}</div>
        <div>{{ event.start }} - {{ event.end }}</div>
        <div>{{ event.note }}</div>
      </div>
    `,
    controller: 'HomeController as vm',
    link: function (scope, element, attrs) {
      });
    }
  };

};

noteItem.$inject = ['$state', 'SOMESERVICE'];

export default noteItem;