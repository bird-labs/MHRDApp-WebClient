app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  $routeProvider
    .when('/posts', {
      controller: 'postsController',
      templateUrl: 'views/posts.html'
    })
    .when('/issues/:id/', {
        controller: 'issueController',
        templateUrl: 'views/issue.html'
    })
    .when('/about', {
      templateUrl: 'views/about.html'
    })
    .when('/signout', {
      redirectTo: '/'
    })
    .when('/profile', {
      templateUrl: 'views/profile.html'
    })
    .when('/', {
      controller: 'homeController',
      templateUrl: 'views/home.html'
    })
    .otherwise({
      redirectTo: '/'
    });
}]);
