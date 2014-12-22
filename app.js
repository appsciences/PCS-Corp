'use strict';

// Declare app level module which depends on views, and components
angular.module('csp-corp', [
    'ngRoute'
]).
//need a loading indicator for routes if backend and thus resolve is slow
    config(['$routeProvider', function ($routeProvider) {
        $routeProvider.
            when('/home', {
                templateUrl: 'partials/home.html'
            }).
            when('/patients', {
                templateUrl: 'partials/patients.html'
            }).
            when('/appt', {
                templateUrl: 'partials/appt.html'
            }).
            when('/pcps', {
                templateUrl: 'partials/pcps.html'
            }).
            when('/specialists', {
                templateUrl: 'partials/specialists.html'
            }).
            when('/about', {
                templateUrl: 'partials/about.html'
            }).
            when('/contact', {
                templateUrl: 'partials/contact.html'
            }).
            otherwise({
                redirectTo:'/home'
            });
    }]
).
    controller('mainCtrl', ['$scope', '$location', function ($scope, $location, $window) {

        $scope.$location = $location;

    }]);