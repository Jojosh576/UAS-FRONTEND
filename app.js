angular.module('loginApp', [])
.controller('LoginController', function($scope, $window) {
    $scope.user = {};
    $scope.errorMessage = '';

    $scope.login = function() {
        // Contoh validasi sederhana
        if ($scope.user.username === 'admin' && $scope.user.password === 'password') {
            // Jika login berhasil, alihkan ke index.html
            $window.location.href = 'index.html';
        } else {
            // Jika login gagal, tampilkan pesan kesalahan
            $scope.errorMessage = 'Username atau password salah.';
        }
    };
});