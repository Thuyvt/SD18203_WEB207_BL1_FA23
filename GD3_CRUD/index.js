var app = angular.module("jsonServerDemo", ["ngRoute"]);

app.controller("listPostsController", function ($scope, $http, $routeParams){
    $scope.lstPosts = [];
    // khai báo link api post
    const api_post = "http://localhost:3000/posts";
    
    // Gửi yêu cầu lấy ra danh sách
    $http.get(api_post) // gửi yêu cầu với method get đến api để lấy ra dữ liệu
    .then(function (response) { // sau khi có dữ liệu, xử lý dữ liệu trả về
        console.log(response);
        $scope.lstPosts = response.data;
    })
    .catch(function (error){
        alert(error.message);
    })

    // NẾU TRÊN ĐƯỜNG DẪN CÓ PARAMETER
    $scope.id = $routeParams.id;
    if ($scope.id && $scope.id > 0) {
        console.log($scope.id);
         // Gửi yêu cầu lấy ra danh sách
        $http.get(api_post+"/" + $scope.id) // gửi yêu cầu với method get đến api để lấy ra dữ liệu
        .then(function (response) { // sau khi có dữ liệu, xử lý dữ liệu trả về
            console.log(response.data);
        })
        .catch(function (error) {
            alert(error.message);
        })
    }
});

app.config(function($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix("");
    $routeProvider.when("/home", {
        templateUrl: "list.html",
        controller: "listPostsController",
    })
    .when("/detail/:id", {
        templateUrl: "detail.html",
        controller: "listPostsController"
    })
    .otherwise({
        redirectTo: "/home"
    })
})