// Initialize Firebase
var config = {
    apiKey: "Your API",
      authDomain: "your DOMAIN",
      databaseURL: "HTTPS",
      projectId: "project ID",
      storageBucket: "sotrage",
      messagingSenderId: "senderID",
      appId: "APPID",
      measurementId: "measID"
  };
  firebase.initializeApp(config);
  
  // Reference messages collection
  var messagesRef = firebase.database().ref('messages');
  
  // Listen for form submit
  document.getElementById('contactForm').addEventListener('submit', submitForm);
  
  // Submit form
  function submitForm(e){
    e.preventDefault();
  
    //Get value
    var name = getInputVal('name');
    var company = getInputVal('company');
    var subject = getInputVal('subject');
    var email = getInputVal('email');
    var phone = getInputVal('phone');
    var message = getInputVal('message');
  
    // Save message
    saveMessage(name, company, subject, email, phone, message);
  
    // Show alert
    document.querySelector('.alert').style.display = 'block';
  
    // Hide alert after 3 seconds
    setTimeout(function(){
      document.querySelector('.alert').style.display = 'none';
    },3000);
  
    // Clear form
    document.getElementById('contactForm').reset();
  }
  
  // Function to get form value
  function getInputVal(id){
    return document.getElementById(id).value;
  }
  
  // Save message to firebase
  function saveMessage(name, company, subject, email, phone, message){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
      name: name,
      company: company,
      subject: subject,
      email: email,
      phone: phone,
      message: message
    });
  }
  