// $watching -ing functions in angularjs

// From Ben Nadel
// http://www.bennadel.com/blog/2658-using-scope-watch-to-watch-functions-in-angularjs.htm
// Example using changing friend status in a function instead of watching a scope

// Function express, 2 things that go on
// 1.  Will be called multiple times per digest
// 2.  If return a value from function watching, the new value is used??
$scope.$watch(
  function($scope) {
    console.log('function watched');
    // This becomes the value we're "watching"
    return ('Function: Best friend is: ' + $scope.bestFriend.name);
  }, function(newValue) {
    console.log(newValue);
  }
)

// Interpolation
// Only is called 1 time whenver there's a change?
$scope.$watch(
  $interpolate('Interpolate: Best friend is {{ bestfriend.name }}'),
  function(newValue) {
    console.log(newValue);
  }
)
