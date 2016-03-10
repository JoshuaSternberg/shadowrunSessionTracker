var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider) {

    $routeProvider
        .when('/tracker', {
            templateUrl: '/views/templates/tracker.html',
            controller: 'Tracker'
        })
        .when('/input', {
            templateUrl: '/views/templates/input.html',
            controller: 'Input'
        })
}]);