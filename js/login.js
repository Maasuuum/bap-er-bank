// step 1: data pass through submit button by using js/add click event handler with the submit button
// Event Handler(addEventListener)

document.getElementById('btn-submit').addEventListener('click', function(){
    // console.log('Submit button clicked')

    // step 2: get the email address/value inside the email input field
    // always remember to use .value to get text from an input field
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    // console.log(email);

    // step 3: get password
    // set id on the html element
    // get the element
    // get the value from the element
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    // console.log(email, password);

    // DANGER: Do Not verify email password on the client side
    // step 5: verify email and password and check whether valid user or not
    if(email === 'masum@gmail.com' && password === 'secret'){
        console.log('valid user')
    }
    else{
        console.log('invalid user')
    }
})