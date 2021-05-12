
document.getElementById("nav-item-home").addEventListener('click', () => {
    if(window.screen.width>600){
    $( "main" ).load( "index.html main" ); 
    $("main").css("background-image", "none");
    $("body").css("background-image", "none");
    $("body").css("background-image", "url('img/pexels-iconcom-733031.jpg')");
    }else{
    $( "main" ).load( "index.html main" ); 
    $("main").css("background-image", "none");
    $("body").css("background-image", "none");
    $("body").css("background-image", "url('img/doge.png')");
    }
});
document.getElementById("nav-item-about").addEventListener('click', () => {
    $( "main" ).load( "about.html main" ); 
    $("main").css("background-image", "none");
    $("body").css("background-image", "none");
    $("body").css("background-image", "url('img/pexels-aarti-vijay-2693529.jpg')");

});
document.getElementById("nav-item-contact").addEventListener('click', () => {
    $( "main" ).load( "contact.html main" ); 
    $("main").css("background-image", "none");
    $("body").css("background-image", "none");
    $("body").css("background-image", "url('img/pexels-sanaan-mazhar-3075993.jpg')");
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



