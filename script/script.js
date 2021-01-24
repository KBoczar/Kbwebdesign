

// window.addEventListener('resize', () => {
//     window.location.reload();
// });

window.addEventListener("DOMContentLoaded", function() {

  var navbar = document.querySelector('.navbar');
var navbarOffsetTop = navbar.offsetTop;
var sections = document.querySelectorAll('section');
var navbarLinks =document.querySelectorAll('.navbar-links');
var progress = document.querySelector('.progress-bar-wrapper')
var progressBarPercent = [98, 78, 48];
var progper = document.querySelectorAll('.progress-percent');

window.addEventListener('scroll',()=>{
mainFn();
});

var mainFn = () => {
    if(window.pageYOffset >= navbarOffsetTop){
        navbar.classList.add('sticky');
    }else {
        navbar.classList.remove('sticky');
    }


    sections.forEach((section, i) => {
        if(window.pageYOffset  >= section.offsetTop - 10){
            navbarLinks.forEach(navbarLinks =>{
                navbarLinks.classList.remove('change');
            })
            navbarLinks[i].classList.add('change');
        }
    });
    if(window.pageYOffset + window.innerHeight >= progress.offsetTop) {
        progper.forEach((el, i)=> {
            el.style.width = `${progressBarPercent[i]}%`;
            el.previousElementSibling.firstElementChild.textContent = progressBarPercent[i];
        })
    }
};

mainFn();

    // get the form elements defined in your form HTML above
    
    var form = document.getElementById("my-form");
    var status = document.getElementById("status");

    // Success and Error functions for after the form is submitted
    
    function success() {
      form.reset();
      status.innerText = "Thanks!";
    }

    function error() {
      status.innerText = "Oops! There was a problem.";
    }

    // handle the form submission event

    form.addEventListener("submit", function(ev) {
      ev.preventDefault();
      var data = new FormData(form);
      ajax(form.method, form.action, data, success, error);
    });
  });
  
  // helper function for sending an AJAX request

  function ajax(method, url, data, success, error) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = function() {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        success(xhr.response, xhr.responseType);
      } else {
        error(xhr.status, xhr.response, xhr.responseType);
      }
    }; 
    xhr.send(data);
  }