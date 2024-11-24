angular.module('loginApp', [])
.controller('LoginController', function($scope, $window) {
    $scope.user = {};
    $scope.errorMessage = '';

    $scope.login = function() {
        const validUsername = 'sindu'; // Ganti dengan username yang valid
        const validPassword = 'sindu111'; // Ganti dengan password yang valid

        if ($scope.user.username === validUsername && $scope.user.password === validPassword) {
            $window.location.href = 'index.html'; // Alihkan ke halaman index.html
        } else {
            alert('Username atau password salah!');
        }
    };
    $scope.goToSignup = function() {
        $window.location.href = 'signup.html';
    }
});