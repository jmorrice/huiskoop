angular.module('starter.controllers', [])

.controller('ChecklistCtrl', function($scope, $stateParams, $localStorage, Sections) {
  $scope.section = Sections.get($stateParams.section);
  $scope.saveToggle = function (item) {
    var storedItem = $localStorage.getObject(item.id);
    storedItem.completed = item.completed;
    $localStorage.setObject(item.id, storedItem);
  };
})
.controller('DetailsCtrl', function($scope, $stateParams, Sections) {
  $scope.section = Sections.get($stateParams.section);
  angular.forEach($scope.section.items, function(item, index) {
    if (item.id == $stateParams.item) {
      $scope.item = item;
    }
  });
})
.controller('HomeCtrl', function($scope, $filter, Sections) {
  $scope.sections = [
    [Sections.get(0), Sections.get(1), Sections.get(2)],
    [Sections.get(3), Sections.get(4), Sections.get(5)],
    [Sections.get(6), Sections.get(7), Sections.get(8)]
  ];

  $scope.getCompletion = function (section) {
    var completed = $filter('filter')(section.items, {'completed':true});
    console.log((completed.length/section.items.length) * 100);
    return (completed.length/section.items.length) * 100;
  };
});
