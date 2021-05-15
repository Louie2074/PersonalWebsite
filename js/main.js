
document.getElementById("nav-item-home").addEventListener('click', () => {
  $("main").empty();
  $("main").load("index.html main");
  //Sets timer for animation
  window.setTimeout(function () {
    $(".loader-wrapper").fadeOut("slow");
  }, 500);
  $("body").css("background-image", "url('img/pexels-sam-kolder-2387873.webp')");

});
document.getElementById("nav-item-about").addEventListener('click', () => {
  //clears and loads main content
  $("main").empty();
  $("main").load("about.html main");
  //Sets timer for animation
  window.setTimeout(function () {
    $(".loader-wrapper").fadeOut("slow");
  }, 1000);
  //serves background img
  $("body").css("background-image", "url('img/pexels-aarti-vijay-2693529.webp')");
});
document.getElementById("nav-item-contact").addEventListener('click', () => {
  $("main").empty();
  $("main").load("contact.html main");
  window.setTimeout(function () {
    $(".loader-wrapper").fadeOut("slow");
  }, 1000);

  $("body").css("background-image", "url('img/pexels-sanaan-mazhar-3075993.webp')");
});

var form = document.getElementById("my-form");
async function handleSubmit(event) {
  event.preventDefault();
  var status = document.getElementById("my-form-status");
  var data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
      'Accept': 'application/json'
    }
  }).then(response => {
    status.innerHTML = "Thanks for your submission!";
    form.reset()
  }).catch(error => {
    status.innerHTML = "Oops! There was a problem submitting your form"
  });
}
form.addEventListener("submit", handleSubmit)



