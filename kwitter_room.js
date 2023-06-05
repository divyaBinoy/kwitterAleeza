//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
    apiKey: "AIzaSyAkJemVv0XmSoKmqXWoLigC7dcwkpHehwE",
    authDomain: "kwitter-93-315ed.firebaseapp.com",
    databaseURL: "https://kwitter-93-315ed-default-rtdb.firebaseio.com",
    projectId: "kwitter-93-315ed",
    storageBucket: "kwitter-93-315ed.appspot.com",
    messagingSenderId: "208443526653",
    appId: "1:208443526653:web:a3548e8671835419661d94"
  };
  
  // Initialize Firebase
   firebase.initializeApp(firebaseConfig);
   user_name= localStorage.getItem("user_name");
   document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
    console.log("Room Name - " + Room_names);
    row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#" + Room_names + "</div><hr>";
    document.getElementById("output").innerHTML += row;
    //End code
    });});}
getData();

function addRoom()
{
    Room_name = document.getElementById("room_name").value;

    firebase.database().ref("/").child(Room_name).update({
          purpose : "adding room name"
    });

    localStorage.setItem("room_name", Room_name);

    window.location= "kwitter_page.html";

}

function redirectToRoomName(name)
{
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout()
{
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";

}
