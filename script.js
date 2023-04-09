function load() {
    var z = document.getElementById('rowload');
    document.getElementsByClassName('btn1')[0].style.display = 'none';
    z.style.display = 'block';
   
}
function hide() {
    document.getElementById('rowload').style.display = 'none';
    document.getElementsByClassName('btn1')[0].style.display = 'block';
}
var tablinks = document.getElementsByClassName('tab-links');
var tabcontents = document.getElementsByClassName('tab-contents');
function opentab(tabname) {
    for(tablink of tablinks){
        tablink.classList.remove("active")
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab")
    }
    event.currentTarget.classList.add("active")
    document.getElementById(tabname).classList.add("active-tab")
}
function openmenu() {
    document.getElementById('side-menu').style.right='0px';
}
function closemenu() {
    document.getElementById('side-menu').style.right='-200px';
}
const scriptURL = 'https://script.google.com/macros/s/AKfycbzmYVJdhnZxu5X0EaBvsNBWlSl4dGqQEojY23IiPZVytlSZhEH-tOM7YNcxvSuYZyxVvA/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById('msg');
form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            msg.innerHTML="Sent Successfully!"
            setTimeout(() => {
                msg.innerHTML="";
            }, 5000);
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
})