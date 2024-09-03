const form = document.querySelector('form');

form.addEventListener('submit', function (event) {
    event.preventDefault(); 
  
    emailValidation();
  });

    

function emailValidation() {
    const mail = document.getElementById('email');
    const errorMsg = document.querySelector('small');
    
    errorMsg.textContent = "";

    let isValid = true;

    if (mail.value === "" || !/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(mail.value)) {
        errorMsg.textContent = "Valid email required";
        errorMsg.style.color = "#FF474C";
        mail.style.color = "#ff0a0a";
        mail.style.borderColor = "#ff0a0a";
        mail.style.backgroundColor = "#ffd6d6";
        isValid = false;
    }else {
        mail.style.color = "";
        mail.style.borderColor = "";
        mail.style.backgroundColor = "";

        isValid = true;

        window.location.href = `./success.html?email=${encodeURIComponent(mail.value)}`;

    }
   return isValid;
}

function displayEmailFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    const email = urlParams.get('email');
    const emailSpan = document.querySelector('span');

    if (email) {
        emailSpan.textContent = email;
    } else {
        emailSpan.textContent = 'No email provided.';
    }
}

