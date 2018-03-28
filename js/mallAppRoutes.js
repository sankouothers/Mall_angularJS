var mallAppRoutes = angular.module("mallAppRoutes",["ngRoute"])

mallAppRoutes.config(function ($routeProvider) {
    $routeProvider
        .when("/commodity", {
            templateUrl: "pages/commodity/commodityList.html",
            controller: "commodityListController"
        })
        .when("/commodity/:id", {
            templateUrl: "pages/commodity/commodityInfo.html",
            controller: "commodityInfoController"
        })
        .when("/create/commodity",{
            templateUrl: "pages/commodity/commodityAdd.html",
            controller: "commodityAddController"
        })
        .when("/indent", {
            templateUrl: "pages/indent/indentList.html",
            controller: "indentListController"
        })
        .when("/user/add",{
            templateUrl:"pages/user/userAdd.html",
            controller:"userAddController"
        })
        .when("/login",{
            templateUrl:"pages/login.html",
            controller:"loginController"
        })
        .otherwise({
            redirectTo: "/commodity"
        });
});