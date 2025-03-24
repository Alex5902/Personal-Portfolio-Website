let tablinks = document.getElementsByClassName('tab-links');
let tabcontents = document.getElementsByClassName('tab-contents');

const opentab = (event, tabname) => {
    for (tablink of tablinks){
        tablink.classList.remove('active-link');
    }
    for (tabcontent of tabcontents){
        tabcontent.classList.remove('active-tab');
    }
    event.currentTarget.classList.add('active-link');
    document.getElementById(tabname).classList.add('active-tab');
}

var sidemenu = document.getElementById("sidemenu");

const openmenu = () => {
    sidemenu.style.right = '0';
}
const closemenu = () => {
    sidemenu.style.right = '-200px';
}

document.querySelectorAll('.tab-button').forEach(button => {
    button.addEventListener('click', () => {
      document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
      document.querySelectorAll('.tab-content').forEach(tab => tab.classList.remove('active'));
  
      button.classList.add('active');
      document.getElementById(button.dataset.tab).classList.add('active');
    });
  });

function showFullImage(src) {
    document.getElementById("modalImage").src = src;
    document.getElementById("imageModal").style.display = "flex";
}
function hideModal() {
    document.getElementById("imageModal").style.display = "none";
}

function openCVModal() {
    document.getElementById('cvModal').style.display = 'block';
}

function closeCVModal() {
    document.getElementById('cvModal').style.display = 'none';
}

// google sheets form
const scriptURL = 'https://script.google.com/macros/s/AKfycbzaJd7x9XZB0vMD7q6ooZfuz8iFeRNKHrRX-bO0WzgveIPNCHjUc3o15z5ehDPRKF9Euw/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        msg.innerHTML = "Message sent successfully"
        setTimeout(function(){
            msg.innerHTML = ""
        }, 2000)
        form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})