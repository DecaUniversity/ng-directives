"use strict";

angular.module("app", []);

angular.module("app").controller("MainController", ["$scope", function ($scope) {
	
	$scope.diva1 = {
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
	
	$scope.diva2 = {
		name: "Adele",
		address: {
			street: "Hello Lane",
			city: "Seattle",
			stt: "Washington"
		},
		squad: [
			"Shakira", "Beyonce", "Beckham"
		]
	};
	
}]);

angular.module("app").directive("userInfoCard", function () {
	return {
		templateUrl: "userInfoCard.html",
		restrict: "E",
		scope: {
			diva: "="
		},
		controller: function ($scope) {
			$scope.queenMe = function (queenToBe) {
				queenToBe.rank = "Queen"
			}
		}
	}
});