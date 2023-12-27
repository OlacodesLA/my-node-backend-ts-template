// //Scroll To Top Starts Here

// window.addEventListener("scroll", () => {
//   if (scrollY > 500) {
//     document.getElementById("totop").style.display = "flex";
//   } else {
//     document.getElementById("totop").style.display = "none";
//   }
// });

// const scrollUp = () => {
//   window.scrollTo(0, 0);
// };

// console.log("Im Linked");

//Scroll To Top Ends Here

//SmtpJS Starts Here
const contactForm = document.getElementById("contactForm");

function sendMail() {
  //Gets the value from the form
  var name = $("#Name").val();
  var email = $("#Sender").val();
  var subject = $("#Subject").val();
  var message = $("#Message").val();

  //Template
  var Body =
    "Name: " +
    name +
    "<br>Email: " +
    email +
    "<br>Subject: " +
    subject +
    "<br>Message: " +
    message;

  //Sends Data
  Email.send({
    Host: "smtp.gmail.com",
    Username: "fesandelcompany@gmail.com",
    Password: "#Anything007",
    To: "info@cccsharonparish.org",
    From: "fesandelcompany@gmail.com",
    Subject: "New message on contact from " + name,
    Body: Body,
  }).then((message) => {
    console.log(message);
    if (message == "OK") {
      contactForm.reset();

      alert("Your mail has been sent. Thank you for connecting.");
    } else {
      console.error(message);
      alert("There is error at sending message. ");
    }
  });
}

//SmtpJS Ends Here
