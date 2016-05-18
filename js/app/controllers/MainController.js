function MainController($scope){
  $scope.person = {
    name : "Brian",
    email : "brian@yourhouse.io",
    phone : "cell"
  }
}

angular
  .module('app')
  .controller('MainController', MainController)
