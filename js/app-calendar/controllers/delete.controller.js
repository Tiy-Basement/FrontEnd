let DeleteController = function($cookies, DeleteService) {
  
  let vm = this;

  vm.deleteEvent = deleteEvent;
  vm.deleteUser = deleteUser;

  function deleteEvent(eventObj){
    DeleteService.deleteEvent(eventObj).then((res) => {
      console.log(res);
    });
  }


  function deleteUser(userObj) {
    DeleteService.deleteUser(userObj).then((res) => {
      console.log(res);
    });
  }
};

DeleteController.$inject = ['DeleteService'];

export default DeleteController;