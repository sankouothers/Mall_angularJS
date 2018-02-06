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
        .when("/create/commodity",{
            templateUrl: "commodity/commodityAdd.html",
            controller: "commodityAddController"
        })
        .when("/indent", {
            templateUrl: "indent/indentList.html",
            controller: "indentListController"
        })
        .when("/user/add",{
            templateUrl:"user/userAdd.html",
            controller:"userAddController"
        })
        .otherwise({
            redirectTo: "/commodity"
        });
});