'use strict';

angular
  .module('visualizerApp', [
    'ngRoute',
    'ngCookies',
    'ngAnimate',
    'angularFileUpload',
    'angularMoment',
    'angularPeity'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        redirectTo: '/display/'
      })
      .when('/display/', {
        templateUrl: 'views/display.html',
        controller: 'DisplayController',
        activetab: 'display',
        reloadOnSearch: false
      })
      .when('/display/:owner/:repo/:hash/', {
        templateUrl: 'views/display.html',
        controller: 'DisplayController',
        activetab: 'display',
        reloadOnSearch: false
      })
      .otherwise({
        redirectTo: '/'
      });
  });

angular.module('visualizerApp')
  .filter('limitToFrom', function() {
    return function(arr, offset, limit) {
      if (!angular.isArray(arr))
        return arr;

      var start = offset;
      var end = start + limit;
      start = Math.max(Math.min(start, arr.length), 0);
      end = Math.max(Math.min(end, arr.length), 0);
      return arr.slice(start, end);
    };
  });

jQuery.fn.peity.defaults.pie = {
  diameter: 16,
  fill: ['#ff9900', '#ffd592', '#fff4dd']
};
