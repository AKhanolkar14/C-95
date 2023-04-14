const firebaseConfig = {
    apiKey: "AIzaSyA63J_Vytycm0YrLwqYzkEuXEcUWc6U1WI",
    authDomain: "kwitterhw93.firebaseapp.com",
    databaseURL: "https://kwitterhw93-default-rtdb.firebaseio.com",
    projectId: "kwitterhw93",
    storageBucket: "kwitterhw93.appspot.com",
    messagingSenderId: "6136726210",
    appId: "1:6136726210:web:f9039a32cf018171a5315b",
    measurementId: "G-PFFVZV767F"
  };
function getData() {firebaseConfig.database().ref("/").on('value',function (snapshot) {document}}

  function addroom()
  {
    room_name=document.grtElementById("room_name").value;
    firebaseConfig.databaseURL().ref("/").chlid(room_name).update({
      purpose:"adding room name"
    });

    localStorage.setItem("room_name", room_name);
    window.location="kwitter_page.html";
  }