var app = angular.module('blogApp', [
  'ngRoute', 'ui.bootstrap', 'blogApp.services'
]);

/**
 * Configure the Routes
 */
app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    // Home
    .when("/", {templateUrl: "partials/blog.html", controller: "PageCtrl"})
    // Pages
    .when("/about", {templateUrl: "partials/about.html", controller: "PageCtrl"})
    .when("/post", {templateUrl: "partials/blog_item.html", controller: "PageCtrl"})
    // else 404
    .otherwise("/404", {templateUrl: "partials/404.html", controller: "PageCtrl"});
}]);

/**
 * Controls the Blog
 */
app.controller('BlogCtrl', function (/* $scope, $location, $http */) {
  console.log("Blog Controller reporting for duty.");
});

/**
 * Controls all other Pages
 */
app.controller('PageCtrl', function ( $scope/*, $location, $http */) {
  console.log("Page Controller reporting for duty.");

  $scope.myInterval = 3000;
  $scope.slides = [
    {
      image: 'pics/hunting1.jpg',
	  text: 'hunting1'
    },
    {
      image: 'pics/hunting2.jpg',
	  text: 'hunting2'
    },
    {
      image: 'pics/hunting3.jpg',
	  text: 'hunting3'
    }
  ];

});