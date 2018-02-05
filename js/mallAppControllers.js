var mallAppControllers = angular.module("mallAppControllers",[])

mallAppControllers.controller("commodityListController", function ($scope, $http) {
    $http.get('http://localhost:8082/commodity').then(
        function(response){
            if (response.status == 200){
                $scope.commodities = response.data;
            }else{
                alert("链接错误")
            }
        }
    );
    $scope.orderBy = "name"
});

mallAppControllers.controller("commodityInfoController",function ($scope, $http,$location,$routeParams) {
    $http.get('http://localhost:8082/commodity'+'/'+$routeParams.id).then(
        function(response){
            if (response.status == 200){
                $scope.commodity = response.data;
            }else{
                alert("链接错误")
            }
        }
    );
    $scope.createIndent = function (id) {
        $http.get('http://localhost:8082/indent/create/'+id).then(
            function(response){
                if (response.status == 200){
                    $location.path("/indent");
                }else{
                    alert("链接错误")
                }
            }
        );
    }
});

mallAppControllers.controller("indentListController",function ($scope, $http,$location,$routeParams) {
    $http.get('http://localhost:8082/indent').then(
        function(response){
            if (response.status == 200){
                $scope.indents = response.data;
            }else{
                alert("链接错误")
            }
        }
    );
});