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


mallAppControllers.controller("userAddController",function ($scope, $http,$location,$routeParams,$templateCache) {
    $scope.submitForm=function () {
        $http({
            method: 'POST',
            url: 'http://localhost:8082/user',
            headers: {
                'Content-Type': 'application/xml;charset=UTF-8'
            },
            data: $scope.user
        }).then(function(response) {
            if (response.status == 200){
                console.log("111111")
            }else{
                alert("链接错误")
            }
        });




        // $http.jsonp('http://localhost:8082/user', $scope.user).then(
        //     function (response) {
        //         console.log('response', response)
        //         if (response.status == 200){
        //             console.log("111111")
        //         }else{
        //             alert("链接错误")
        //         }
        //     }
        // );

    }
});


mallAppControllers.controller("commodityAddController",function ($scope, $http,$location,$routeParams) {
    $scope.submitForm=function () {
        console.log($scope.commodity);
        $http.post('http://localhost:8082/commodity',$scope.commodity).then(
            function (response) {
                if (response.status == 200){
                    console.log("111111")
                }else{
                    alert("链接错误")
                }
            }
        );

    }
});


mallAppControllers.controller("loginController",function ($scope, $http,$location,$routeParams) {
    $scope.submitForm=function () {
        console.log($scope.userForm);
        $http.post('http://localhost:8082/login',$scope.userForm).then(
            function (response) {
                if (response.status == 200){
                    console.log("111111")
                }else{
                    alert("链接错误")
                }
            }
        );

    }
});