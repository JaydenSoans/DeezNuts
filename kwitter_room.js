// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyADKc9CQJI1xeQ7urXdoSjiOI28hUk7PvU",
  authDomain: "deez-nuts-84b25.firebaseapp.com",
  databaseURL: "https://deez-nuts-84b25-default-rtdb.firebaseio.com",
  projectId: "deez-nuts-84b25",
  storageBucket: "deez-nuts-84b25.appspot.com",
  messagingSenderId: "956494430785",
  appId: "1:956494430785:web:0dc39f5b3afb5017023cc0"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + " !";

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