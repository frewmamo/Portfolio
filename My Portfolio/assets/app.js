
$("#about").on("click", function(event){
    event.preventDefault();
    $(".home-screen").show();
    $(".contact-screen").hide();
    $(".portfolio-screen").hide();
    $("#textChange").text("About Me")
    //$("#textChange").attr("class", "navbar-brand home animated fadeInDown");
});
$("#portfolio").on("click", function(event){
    event.preventDefault();
    $(".home-screen").hide();
    $(".contact-screen").hide();
    $(".portfolio-screen").show();
    document.body.style.backgroundImage = "url('images/guages.jpg')";
    $("#textChange").text("Portfolio")
    //$("#textChange").attr("class", "navbar-brand home animated fadeInDown");
});
$("#contact").on("click", function(event){
    event.preventDefault();
    $(".home-screen").hide();
    $(".contact-screen").show();
    $(".portfolio-screen").hide();
    $("#textChange").text("Contact")
    //$("#textChange").attr("class", "navbar-brand home animated fadeInDown");
});

var config = {
    apiKey: "AIzaSyC4YlL-RD710bhLTP-EJpOV2syxB18px3I",
    authDomain: "newcontacts-8c125.firebaseapp.com",
    databaseURL: "https://newcontacts-8c125.firebaseio.com",
    projectId: "newcontacts-8c125",
    storageBucket: "",
    messagingSenderId: "103094403036",
    appId: "1:103094403036:web:ab84c26273c7d7fdcd1919"
  };
  
  firebase.initializeApp(config);
  var database = firebase.database();

  $("#add-contact").on("click", function(event) {
    event.preventDefault();
  
    var contactName = $("#contact-name-input").val().trim();
    var companyInput = $("#company-input").val().trim();
    var userInfo = $("#number-input").val().trim();
  

    var newUser = {
      name: contactName,
      company: companyInput,
      info: userInfo,
    };
    
    database.ref().push(newUser);


    console.log(newUser.name);
    console.log(newUser.company);
    console.log(newUser.info);

    $("#contact-name-input").val("");
    $("#company-input").val("");
    $("#number-input").val("");

});