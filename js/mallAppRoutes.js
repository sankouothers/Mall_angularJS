var mallAppRoutes = angular.module("mallAppRoutes",["ngRoute"])

mallAppRoutes.config(function ($routeProvider) {
    $routeProvider
        .when("/commodity", {
            templateUrl: "commodity/commodityList.html",
            controller: "commodityListController"
        })
        .when("/commodity/:id", {
            templateUrl: "commodity/commodityInfo.html",
            controller: "commodityInfoController"
        })
        .when("/indent", {
            templateUrl: "indent/indentList.html",
            controller: "indentListController"
        })
        .otherwise({
            redirectTo: "/commodity"
        });
});