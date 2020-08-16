// function myFunction() {
//   var x = document.getElementById("myTopnav");
//   if (x.className === "topnav") {
//     x.className += " responsive";
//   } else {
//     x.className = "topnav";
//   }
// }

const togglePassword = document.querySelector('#togglePassword');
const password = document.querySelector('#password');


togglePassword.addEventListener('click', function (e) {
    // toggle the type attribute
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
    // toggle the eye slash icon
    this.classList.toggle('fa-eye-slash');
});

const form = document.getElementById('form')
const userName = document.getElementById('username')
const email = document.getElementById('email')
const userPassword = document.getElementById('userPassword')
const SignupButton = document.getElementById('SignupBtn')

form.addEventListener('submit', function(e) {
  event.preventDefault();

  checkInputs();
});

function checkInputs() {
  //get the values from the inputs
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();

  
  if (usernameValue === '') {
      //show error
      //add error class
      setErrorFor(username, 'Username cannot be blank');
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement; // .form-control
  const small = formControl.querySelector('small');

  //add error message inside small
  small.innerText = message;

  //add error class 
  formControl.className = 'form-control error';
}