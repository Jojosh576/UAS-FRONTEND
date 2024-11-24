angular.module('loginApp', [])
controller('LoginController', function($scope, $window) {
   $scope.user = {};
   $scope.errorMessage = '';
    $scope.login = function() {
       const validUsername = 'sindu'; 
       const validPassword = 'sindu111'; 
        if ($scope.user.username === validUsername && $scope.user.password === validPassword) {
           
           $window.location.href = '/views/index.html';
       } else {
           alert('Username atau password salah!');
       }
   };
    $scope.goToSignup = function() {
       console.log('Redirecting to signup page'); 
       $window.location.href = '/signup.html';
   };
});