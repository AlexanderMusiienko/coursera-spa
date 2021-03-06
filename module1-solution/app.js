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
      var allWordsAreValid = true;

      function checkWord(word) {
        return !/^\s*$/.test(word);
      };

      if (arrayOfDishes.length == 0) {
        $scope.resultMsg = 'Please enter data first';
        $scope.boxClass = 'red';

      } else {

        arrayOfDishes.forEach(function(word) {
          if (!checkWord(word)) {
            allWordsAreValid = false;
          }
        });

        //check at only whitespaces items
        if (!allWordsAreValid) {
          $scope.resultMsg = 'You have empty item at input field, please check it';
          $scope.boxClass = 'red';
        } else if (arrayOfDishes.length <= 3) {
          $scope.resultMsg = 'Enjoy!';
          $scope.boxClass = 'green';
        } else {
          $scope.resultMsg = 'Too much!';
          $scope.boxClass = 'green';
        }
      }
    }
  }

})()
