const form = document.getElementById("contactForm");
const response = document.getElementById("response");

form.addEventListener("submit", function (e) {

  const formData = new FormData(form);
  e.preventDefault();

  let data = {};
  formData.forEach((value, key) => {
    data[key] = value;
  });

  response.innerHTML = `👋 Hi ${data.fname + " " + data.lname}! Thanks for signing up, we'll be in touch shortly. 🎉`;
  response.style.height = "100%"
  response.style.padding = ".5em 0"

  form.reset();

  // Hide the response
  setTimeout(hideResponse, 10000);
});


function hideResponse(){
    response.innerHTML = "";
    response.style.height = "0%"
    response.style.padding = "0"
}