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
      //filter empty items
      var arrayOfDishes = $scope.dishes.split(',').filter(function(value) {
        return value != '';
      });

      if (arrayOfDishes.length == 0) {
        $scope.resultMsg = 'Please enter data first';
        $scope.boxClass = 'red';

      } else {
        arrayOfDishes.map(function(element) {
          //check at only whitespaces items
          if (element.match(/^\s*$/g) !== null) {
            console.log(element.match(/^\s*$/g));
            $scope.resultMsg = 'You have empty item at input field, please check it';
            $scope.boxClass = 'red';
          } else if (arrayOfDishes.length <= 3) {
            $scope.resultMsg = 'Enjoy!';
            $scope.boxClass = 'green';
          } else {
            $scope.resultMsg = 'Too much!';
            $scope.boxClass = 'green';
          }
        });
      }
    }
  }

})()
