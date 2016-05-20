var myLists = angular.module("MyApp", ['ngRoute'])

.config(function($routeProvider){
  $routeProvider.when('/view1',{
    templateUrl : "View1.html",
    controller : "errandCntrlr"
  }).when('/view2',{
    templateUrl : "View2.html",
    controller : "choresCntrlr"
  }).when("/view3/:email",{
    templateUrl : "View3.html",
    controller : "emailCntrlr"
  }).otherwise({
    redirectTo : "/view1"
  });
})

//ERRAND controller
.controller("errandCntrlr",function($scope,DataService){
  "use strict";
  $scope.errands = DataService.getErrands();
    $scope.newErrand = {};
    //Name matches button click on html
    $scope.addErrand = function(){  //ng-model names
      DataService.saveErrand($scope.newErrand.errand, $scope.newErrand.dueDate, $scope.newErrand.status);
      $scope.newErrand = {};
    };
    //Matches button name on View1.html
    $scope.removeErrand = function(idx){
      DataService.removeErrandsAt(idx); //(idx) you can use obj.name
    };
    $scope.clearIt = function(){
      DataService.destroyIt();
    };
//CHORE controller
}).controller("choresCntrlr", function($scope,DataService){
  "use strict";
  $scope.chores = DataService.getchores();
  $scope.newChore = {};
//ADD CHORE
  $scope.addChore = function(){
    DataService.saveChore($scope.newChore.name, $scope.newChore.dueDate, $scope.newChore.status);
    $scope.newChore = {};
  };

  $scope.deleteChore = function(choreToDelete) {
    DataService.removeChore(choreToDelete);
  };

  //CALL/EMAIL controller
}).controller("emailCntrlr",function($scope,$routeParams,DataService){
  "use strict";
  //Route Paramater here
  $scope.anyWord = $routeParams.email;

  //Get Mail
  $scope.emailArray = DataService.getEmail();

  //Add email
  $scope.addEmail = function(){
    DataService.newEmail($scope.email);
    $scope.email = '';
  };

  //Delete email
  $scope.deleteEmail=function(email) {
    DataService.removeEmail(email);
  };
//------------------------------------------------
  //Get Calls
  $scope.callsArray = DataService.getCalls();

  //Add Calls
  $scope.addCalls = function(){
    DataService.newCall($scope.calls);
    $scope.calls = '';
  };

  //Delete Calls
  $scope.deleteCall=function(call) {
    DataService.removeCall(call);
  };
})
