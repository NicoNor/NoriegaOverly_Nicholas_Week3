angular.module("MyApp").service("DataService", function(){

  //ERRANDS ARRAY
  var errandsArray = [];


  this.getErrands = function(){
    var errArray = JSON.parse(localStorage.getItem("errandsLS")) || [];
    errandsArray = errArray;
    return errandsArray;
  };

  this.saveErrand = function(eName,edueDate,estatus){
    var savedErrands = {errand: eName, dueDate:edueDate, status:estatus };
    errandsArray.push(savedErrands);
    localStorage.setItem("errandsLS", JSON.stringify(errandsArray));
  };

  this.removeErrandsAt = function(pIndex){
    errandsArray.splice(pIndex,1);
    localStorage.setItem("errandsLS", JSON.stringify(errandsArray));
  };

  this.destroyIt = function(){
    errandsArray.splice(0);
    localStorage.clear();
  };

  //CHORE array
var choresArray = [];

//retuns chore ARRAY
this.getChores = function(){
  var myChore = JSON.parse(localStorage.getItem("choreList")) || [];
  choresArray = myChore;
  return choresArray;
};

//Add new chore to array
this.saveChore = function(inxChore1, inxChore2, inxChore3){
  var savedChores = {name:inxChore1, dueDate:inxChore2, status:inxChore3};
  choresArray.push(savedChores);
  localStorage.setItem("choreList", JSON.stringify(choresArray));
};

// Delete CHORE from ARRAY
this.removeChore = function(cIndex){
  choresArray.splice(cIndex, 1);
  localStorage.setItem("choreList", JSON.stringify(choresArray));
};

// EMAIL ARRAY

var emailArray = ["Tom@yahoo.com", "Jim@gmail.com", "Mary@gmail.com", "Susan@gmail.com"];

//Returns the email array
this.getEmail = function(){
  var myEmail = localStorage.getItem("emailList");
  emailArray = JSON.parse(myEmail) || emailArray;
  return emailArray;
};

//Add new email
this.newEmail = function(myEmail){
  var newEmail = myEmail;

  emailArray.push(newEmail);
  var myEmails = JSON.stringify(emailArray);
  localStorage.setItem("callList", myEmails);
};

//DELETE mail
this.removeEmail = function(noEmail){
  emailArray.splice(emailArray.indexOf(noEmail),1);
  localStorage.setItem("emailList", JSON.stringify(emailArray));
};


// CALLS array

var callsArray = ["Tom", "Jim", "Mary", "Susan"];

//Reutns the CALL array
this.getCalls = function(){
  var myCall = localStorage.getItem("callList");
  callsArray = JSON.parse(myCall) || callsArray;
  return callsArray;
};

// ADD new CALL
this.newCall = function(myCall){
  var newCall = myCall;

  callsArray.push(newCall);
  var myCalls = JSON.stringify(callsArray);
  localStorage.setItem("callList", myCalls);
};

//Delete Call
this.removeCall = function(noCall) {
  callsArray.splice(callsArray.indexOf(noCall),1);
  localStorage.setItem("callList", JSON.stringify(callsArray));
};

});
