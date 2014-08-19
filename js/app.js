var app = angular.module('app', ['ngRoute', 'btford.markdown']);

var TOC = ['codebase', 'dependencies', 'config', 'backing-services', 'build-release-run', 'processes', 'port-binding', 'concurrency', 'disposability', 'dev-prod-parity', 'logs', 'admin-processes'];

app.config(function ($locationProvider, $routeProvider) {
  $locationProvider.html5Mode(false).hashPrefix('!');

  $routeProvider.when('/', {
    templateUrl: 'views/home.html'
  });

  $routeProvider.when('/:factor', {
    templateUrl: 'views/factor.html'
  });
});


app.controller('markdown', function ($scope, $routeParams) {
  var factor = $routeParams.factor;
  $scope.factor = 'content_zh-CN/' + factor + '.md';
});

app.controller('page', function ($scope, $routeParams) {
  var factor = $routeParams.factor;
  var index = TOC.indexOf(factor);

  $scope.size = TOC.length;
  $scope.index = index;
  $scope.prev = '#!/' + TOC[index - 1];
  $scope.next = '#!/' + TOC[index + 1];
});
