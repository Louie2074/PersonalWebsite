// Function to handle navigation clicks
function handleNavigationClick(item, page, backgroundImg) {
  document.getElementById(item).addEventListener('click', () => {
    $("main").empty();
    $("main").load(`${page}.html main`);

    // Sets timer for animation
    window.setTimeout(function () {
      $(".loader-wrapper").fadeOut("slow");
    }, 1000);

    // Serves background image
    $("body").css("background-image", `url('img/${backgroundImg}.webp')`);
  });
}

// Navigation items
handleNavigationClick("nav-item-home", "index", "indexBackground");
handleNavigationClick("nav-item-about", "about", "aboutBackground");
handleNavigationClick("nav-item-contact", "contact", "contactBackground");

// Form submission
let form = document.getElementById("my-form");
async function handleSubmit(event) {
  event.preventDefault();
  let status = document.getElementById("my-form-status");
  let data = new FormData(event.target);

  try {
    // Using fetch with async/await for better readability
    const response = await fetch(event.target.action, {
      method: form.method,
      body: data,
      headers: {
        'Accept': 'application/json'
      }
    });

    status.innerHTML = "Thanks for your submission!";
    form.reset();
  } catch (error) {
    status.innerHTML = "Oops! There was a problem submitting your form";
  }
}

form.addEventListener("submit", handleSubmit);
