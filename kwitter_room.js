
//ADD YOUR FIREBASE LINKS 
var firebaseConfig = {
  apiKey: "AIzaSyAQyRctGhvx2LekRG6eaONPJG8xTF3qa0o",
  authDomain: "kwitter-c93.firebaseapp.com",
  databaseURL: "https://kwitter-c93-default-rtdb.firebaseio.com",
  projectId: "kwitter-c93",
  storageBucket: "kwitter-c93.appspot.com",
  messagingSenderId: "285881032928",
  appId: "1:285881032928:web:338461867114a33b71b085"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "index.html";
}
