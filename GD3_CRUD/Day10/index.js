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
    $scope.detail = {};
    $scope.dsThuyvt66 = [];
    if ($scope.id && $scope.id > 0) {
        console.log($scope.id);
         // Gửi yêu cầu lấy ra danh sách
        $http.get(api_post+"/" + $scope.id) // gửi yêu cầu với method get đến api để lấy ra dữ liệu
        .then(function (response) { // sau khi có dữ liệu, xử lý dữ liệu trả về
            $scope.detail = response.data;
        })
        .catch(function (error) {
            alert(error.message);
        })
    } else if ($scope.id === "thuyvt66") {
        $http.get(api_post + "?author=thuyvt66")
        .then(function (response) {
            $scope.dsThuyvt66 = response.data;
        })
        .catch(function (error) { });
    }

    // xóa đối tượng
    $scope.delete = function (index) {
        let id = $scope.lstPosts[index].id;
        $http.delete(api_post + "/" + id)
        .then(function (response) {
            // xóa luôn dòng dữ liệu trên bảng
            $scope.lstPosts.splice(index, 1);
            // alert("Xóa thành công");
        })
        .catch(function (error) {});
    }

    // Chọn đối tượng cần sửa
    $scope.post = {};
    $scope.onSelect = function (index) {
        let id = $scope.lstPosts[index].id;
        $http.get(api_post + "/"+ id)
        .then(function (response) {
            $scope.post = response.data;
            console.log($scope.post);
        })
        .catch(function (error) {});
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