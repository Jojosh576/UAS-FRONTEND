angular.module('signupApp', [])
.controller('SignupController', function($scope, $http) {
    $scope.user = {};
    $scope.message = '';

    $scope.signup = function() {
        $http.post('/api/signup', $scope.user)
        .then(function(response) {
            $scope.message = 'Signup successful!';
        }, function(error) {
            $scope.message = 'Signup failed!';
        });
    };
});
