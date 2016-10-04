"use strict";

angular.module("app", []);

angular.module("app").controller("MainController", ["$scope", function ($scope) {
	
	$scope.diva = {
		name: "Shakira",
		address: {
			street: "Sabor Way",
			city: "Miami",
			stt: "Florida"
		},
		squad: [
			"Adele", "Beyonce", "Marimar"
		]
	};
	
}]);

angular.module("app").directive("userInfoCard", function () {
	return {
		templateUrl: "userInfoCard.html",
		restrict: "E",
		controller: function ($scope) {
			$scope.queenMe = function (queenToBe) {
				queenToBe.rank = "Queen"
			}
		}
	}
});