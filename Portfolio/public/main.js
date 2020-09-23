var firebaseConfig = {
    apiKey: "AIzaSyCvlGnadMawwR0Emv_iGIKDrElGCbwjD3c",
    authDomain: "portfolio-951cd.firebaseapp.com",
    databaseURL: "https://portfolio-951cd.firebaseio.com",
    projectId: "portfolio-951cd",
    storageBucket: "portfolio-951cd.appspot.com",
    messagingSenderId: "54812566910",
    appId: "1:54812566910:web:89a6d70461ec555c623f2f",
    measurementId: "G-C27ZCLY1HM"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  var messagesRef = firebase.database().ref('messages');


document.getElementById('contact-form').addEventListener('submit', submitForm);

function submitForm(e){
    e.preventDefault();

    var name = getInputVal('name');
    var subject = getInputVal('subject');
    var email = getInputVal('email');
    var message = getInputVal('message');

    saveMessage(name, subject, email, message);

}

function getInputVal(id){
    return document.getElementById(id).value;
}

function saveMessage(name, subject, email, message){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        name: name,
        subject: subject,
        email:email,
        message:message
    });
}