
angular.module("projetoPortifolio").config(function ($routeProvider) {
	$routeProvider.when("/relatos", {
		templateUrl: "srcFront/view/landing-page/landing-page.html",
		controller: "portifolioController",
		resolve: {
			relatos: function (relatosAPI) {
				return relatosAPI.getRelatos();
			},
		}
	});
	$routeProvider.when("/crud", {
		templateUrl: "srcFront/view/crud.html",
		controller: "portifolioController",
		resolve: {
			relatos: function (relatosAPI) {
				return relatosAPI.getRelatos();
			},
		}
	});
	
	$routeProvider.otherwise({redirectTo: "/relatos"});
});