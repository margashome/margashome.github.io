var app = angular.module('blogApp.services', [
  'ngResource'
]);

// Service that provides users operations
app.factory('postService', function ($resource) {
    return $resource('resources/posts/:id');
});