var myApp = angular.module('myApp', []);
myApp.controller('AppCtrl', function($scope, $http) {
    
var refresh = function() {
  $http.get('/contactlist').success(function(response) {
  	console.log(response);
    $scope.contactlist = response;
    $scope.contact="";
  
  });
};
refresh();

$scope.addContact = function() {
	$http.post('/contactlist',$scope.contact).success(function(response){
		console.log(response);
		   refresh();
	});
};

$scope.remove = function(id) {
	console.log(id);
  $http.delete('/contactlist/'+id).success(function(response){
  	console.log(response);
  	refresh();
  });
};

$scope.edit = function(id) {
	$http.get('/contactlist/'+id).success(function(response){
		console.log("kk"+response);
		$scope.contact=response;
		//refresh();
	});
};

$scope.clear = function(){
	$scope.contact="";
};
 
$scope.update = function() {
  console.log($scope.contact._id);
  $http.put('/contactlist/' + $scope.contact._id, $scope.contact).success(function(response) {
    refresh();
  })
};

});﻿