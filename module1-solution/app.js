(function(){
  'use strict';

  angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];

  function LunchCheckController($scope) {
    $scope.dishes = '';
    $scope.resultMsg = 'waiting for results...';
    $scope.boxClass = 'normal';

    $scope.check = function() {
      //check on empty items
      var arrayOfDishes = $scope.dishes.split(',').filter(function(value) {
        return value != "";
      });

      arrayOfDishes.map(function(inputString) {
        //check at only whitespaces items
        if (inputString.match(/^\s*$/)) {
          $scope.resultMsg = 'You have empty item at input field, please check it';
          $scope.boxClass = 'red';

        } else {

          if (arrayOfDishes.length !== 0 && arrayOfDishes.length <= 3) {
            $scope.resultMsg = 'Enjoy!';
            $scope.boxClass = 'green';

          } else if(arrayOfDishes.length == 0) {
            $scope.resultMsg = 'Please enter data first';
            $scope.boxClass = 'red';

          } else {
            $scope.resultMsg = 'Too much!';
            $scope.boxClass = 'green';
          }
        }
      })
    }
  }

})()
