angular.module('authApp', [])
.controller('AuthController', function($scope, $window) {
    $scope.isLoggedIn = !!localStorage.getItem('er');
    $scope.login = function() {
       // Simulate login process
       if ($scope.loginData.email && $scope.loginData.password) {
           // Here you would typically send a request to your backend to verify credentials
           const user = { email: $scope.loginData.email };
           localStorage.setItem('user', JSON.stringify(user));
           $scope.isLoggedIn = true;
           $window.location.href = '/views/index.html'; // Redirect to index after login
       } else {
           alert('Invalid credentials');
       }
   };
    $scope.logout = function() {
       localStorage.removeItem('user');
       $scope.isLoggedIn = false;
       $window.location.href = '/views/index.html';
   };
});