const scriptURL = 'https://script.google.com/macros/s/AKfycbwufdN1yUVl0s_2kIzLJai4b4S_sgdZGSg6qIt168ATZVI5hr_58-sYCOQKrCffSkXvKg/exec';
const form = document.forms['subscription'];
const msg = document.getElementById('msg');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    msg.innerHTML = "Just a moment...";

    fetch(scriptURL, {
        method: 'POST', 
        body: new FormData(form) 
    })
    .then(() => {
        msg.innerHTML = "Thank you for Subscribing :)";

        setTimeout(function(){
            msg.innerHTML = "";
        }, 5000);

        form.reset();
    })
    .catch(error => {
        msg.innerHTML = "Something went wrong :("
        console.error('Error!', error.message)
    });
});
