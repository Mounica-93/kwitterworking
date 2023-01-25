var firebaseConfig = {
      apiKey: "AIzaSyDUroOlAMh1DGH3IZBvoKP8hkDWXxUBEBY",
      authDomain: "kwittter-c2ebd.firebaseapp.com",
      databaseURL: "https://kwittter-c2ebd-default-rtdb.firebaseio.com",
      projectId: "kwittter-c2ebd",
      storageBucket: "kwittter-c2ebd.appspot.com",
      messagingSenderId: "124953122540",
      appId: "1:124953122540:web:6a737bbb2618a195e377c9"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + " ";

function addRoom()
{
    room_name = document.getElementById("room_name").value;

    firebase.database().ref("/").child(room_name).update({
          purpose : "adding room name"
    });

    localStorage.setItem("room_name", room_name);
    window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
     
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id=" + Room_names+" onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
      document.getElementById("output").innerHTML += row;
      });});}
getData();

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
      window.location = "index.html"
}      


