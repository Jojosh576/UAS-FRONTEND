angular.module('signupApp', [])
controller('SignupController', function($scope, $http, $window) {
   $scope.user = {};
    $scope.signup = function() {
       $http.post('/api/signup', $scope.user)
       .then(function(response) {
           alert('Signup successful!');
           $window.location.href = '/views/index.html';
       })
       .catch(function(error) {
           alert('Signup failed: ' + error.data.message);
       });
   };
});