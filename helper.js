var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link")
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab")
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

document.addEventListener("DOMContentLoaded", function() {
    const scriptURL = 'https://script.google.com/macros/s/AKfycbz2et0vc7nqqR18Oatt2Y5DU-1LJfy2IY8T4HHEn5Q0E6nchygRCgEisHRhLXMvAJl8tQ/exec'
    const form = document.forms["submit-to-google-sheet"]
    const msg = document.getElementById("msg")
    form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
            msg.innerHTML = "Message Sent Successfully"
            setTimeout(function(){
                msg.innerHTML = ""
            }, 3000)
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
    });
});
