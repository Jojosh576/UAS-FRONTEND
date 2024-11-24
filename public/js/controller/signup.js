angular.module('signupApp', [])
controller('SignupController', function($scope, $http, $window) {
   $scope.user = {};
    $scope.signup = function() {
       $http.post('/api/signup', $scope.user)
       .then(function(response) {
           // Show a success message
           alert('Signup successful!');
           // Redirect to the index page
           $window.location.href = '/views/index.html';
       });
   };
});