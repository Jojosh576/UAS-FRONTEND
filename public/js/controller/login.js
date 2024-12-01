angular.module('loginApp', [])
controller('LoginController', function($scope, $window) {
   $scope.user = {};
   $scope.errorMessage = '';
    $scope.login = function() {
       console.log('Login function called');
       const validUsername = 'sindu'; 
       const validPassword = 'sindu111'; 
        if ($scope.user.username === validUsername && $scope.user.password === validPassword) {
           console.log('Credentials are valid');
           // Store the username and password in local storage
           localStorage.setItem('username', $scope.user.username);
           localStorage.setItem('password', $scope.user.password);
            // Redirect to index.html
           console.log('Redirecting to index.html');
           $window.location.href = '/views/index.html'; // Adjust the path if necessary
       } else {
           console.log('Invalid credentials');
           alert('Username atau password salah!');
       }
   };
    $scope.goToSignup = function() {
       console.log('Redirecting to signup page'); 
       $window.location.href = '/signup.html';
   };
});