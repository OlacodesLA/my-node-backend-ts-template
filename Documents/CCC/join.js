// Form Sender
const form = document.getElementById("my_form");

function sendmail() {
  //Gets the value from the form
  var name = $("#Name").val();
  var dob = $("#dob").val();
  var email = $("#Sender").val();
  var gender = $("#gender").val();
  var phone = $("#Phone").val();
  var depart = $("#depart").val();
  var skill = $("#skill").val();
  var message = $("#Message").val();

  //-------------------------------
  //-------------------------------Sharon Choir
  //-------------------------------

  if (depart === "Sharon Choir") {
    var Body =
      "Name: " +
      name +
      "Date of Birth: " +
      dob +
      "<br>Email: " +
      email +
      "<br>Gender: " +
      gender +
      "<br>Department: " +
      depart +
      "<br>Phone Number: " +
      phone +
      "<br>Skill: " +
      skill +
      "<br>Message: " +
      message;

    //Gets File upload
    var file = document.getElementById("file").files[0];
    console.log(file);

    //Read the File
    var reader = new FileReader();
    reader.readAsBinaryString(file);
    reader.onload = function () {
      var dataUri = "data:" + file.type + ";base64," + btoa(reader.result);

      //Sends Data
      Email.send({
        Host: "smtp.gmail.com",
        Username: "fesandelcompany@gmail.com",
        Password: "#Anything007",
        To: "choir@cccsharonparish.org",
        From: "fesandelcompany@gmail.com",
        Subject: "New message on contact from " + name,
        Body: Body,
        Attachments: [
          {
            name: file.name,
            data: dataUri,
          },
        ],
      }).then((message) => {
        console.log(message);
        if (message == "OK") {
          document.getElementById("my_form").reset();

          alert("Your mail has been sent. Thank you for connecting.");
        } else {
          console.error(message);
          alert("There is error at sending message. ");
        }
      });
    };
  }
  //-------------------------------
  //-------------------------------Sides Women/Sides Men
  //-------------------------------
  else if (depart === "Sidesmen/Sideswomen") {
    var Body =
      "Name: " +
      name +
      "Date of Birth: " +
      dob +
      "<br>Email: " +
      email +
      "<br>Gender: " +
      gender +
      "<br>Department: " +
      depart +
      "<br>Phone Number: " +
      phone +
      "<br>Skill: " +
      skill +
      "<br>Message: " +
      message;

    //Gets File upload

    var file = document.getElementById("file").files[0];
    console.log(file);
    //Read the File
    var reader = new FileReader();
    reader.readAsBinaryString(file);
    reader.onload = function () {
      var dataUri = "data:" + file.type + ";base64," + btoa(reader.result);

      //Sends Data

      Email.send({
        Host: "smtp.gmail.com",
        Username: "fesandelcompany@gmail.com",
        Password: "#Anything007",
        To: "sidesmen@cccsharonparish.org",
        From: "fesandelcompany@gmail.com",
        Subject: "New message on contact from " + name,
        Body: Body,
        Attachments: [
          {
            name: file.name,
            data: dataUri,
          },
        ],
      }).then((message) => {
        console.log(message);
        if (message == "OK") {
          document.getElementById("my_form").reset();

          alert("Your mail has been sent. Thank you for connecting.");
        } else {
          console.error(message);
          alert("There is error at sending message. ");
        }
      });
    };
  }
  //-------------------------------
  //-------------------------------Protocol
  //-------------------------------
  else if (depart === "Protocol") {
    var Body =
      "Name: " +
      name +
      "Date of Birth: " +
      dob +
      "<br>Email: " +
      email +
      "<br>Gender: " +
      gender +
      "<br>Department: " +
      depart +
      "<br>Phone Number: " +
      phone +
      "<br>Skill: " +
      skill +
      "<br>Message: " +
      message;

    //Gets File upload
    var file = document.getElementById("file").files[0];
    console.log(file);
    //Read the File
    var reader = new FileReader();
    reader.readAsBinaryString(file);
    reader.onload = function () {
      var dataUri = "data:" + file.type + ";base64," + btoa(reader.result);

      //Sends Data

      Email.send({
        Host: "smtp.gmail.com",
        Username: "fesandelcompany@gmail.com",
        Password: "#Anything007",
        To: "protocol@cccsharonparish.org",
        From: "fesandelcompany@gmail.com",
        Subject: "New message on contact from " + name,
        Body: Body,
        Attachments: [
          {
            name: file.name,
            data: dataUri,
          },
        ],
      }).then((message) => {
        console.log(message);
        if (message == "OK") {
          document.getElementById("my_form").reset();

          alert("Your mail has been sent. Thank you for connecting.");
        } else {
          console.error(message);
          alert("There is error at sending message. ");
        }
      });
    };
  }

  //-------------------------------
  //-------------------------------Good Women
  //-------------------------------
  else if (depart === "Good Women") {
    var Body =
      "Name: " +
      name +
      "Date of Birth: " +
      dob +
      "<br>Email: " +
      email +
      "<br>Gender: " +
      gender +
      "<br>Department: " +
      depart +
      "<br>Phone Number: " +
      phone +
      "<br>Skill: " +
      skill +
      "<br>Message: " +
      message;

    //Gets File upload
    var file = document.getElementById("file").files[0];
    console.log(file);
    //Read the File
    var reader = new FileReader();
    reader.readAsBinaryString(file);
    reader.onload = function () {
      var dataUri = "data:" + file.type + ";base64," + btoa(reader.result);

      //Sends Data

      Email.send({
        Host: "smtp.gmail.com",
        Username: "fesandelcompany@gmail.com",
        Password: "#Anything007",
        To: "goodwomen@cccsharonparish.org",
        From: "fesandelcompany@gmail.com",
        Subject: "New message on contact from " + name,
        Body: Body,
        Attachments: [
          {
            name: file.name,
            data: dataUri,
          },
        ],
      }).then((message) => {
        console.log(message);
        if (message == "OK") {
          document.getElementById("my_form").reset();

          alert("Your mail has been sent. Thank you for connecting.");
        } else {
          console.error(message);
          alert("There is error at sending message. ");
        }
      });
    };
  }

  //-------------------------------
  //-------------------------------Men of Valor
  //-------------------------------
  else if (depart === "Men of Valor") {
    var Body =
      "Name: " +
      name +
      "Date of Birth: " +
      dob +
      "<br>Email: " +
      email +
      "<br>Gender: " +
      gender +
      "<br>Department: " +
      depart +
      "<br>Phone Number: " +
      phone +
      "<br>Skill: " +
      skill +
      "<br>Message: " +
      message;

    //Gets File upload
    var file = document.getElementById("file").files[0];
    console.log(file);
    //Read the File
    var reader = new FileReader();
    reader.readAsBinaryString(file);
    reader.onload = function () {
      var dataUri = "data:" + file.type + ";base64," + btoa(reader.result);

      //Sends Data

      Email.send({
        Host: "smtp.gmail.com",
        Username: "fesandelcompany@gmail.com",
        Password: "#Anything007",
        To: "menofvalor@cccsharonparish.org",
        From: "fesandelcompany@gmail.com",
        Subject: "New message on contact from " + name,
        Body: Body,
        Attachments: [
          {
            name: file.name,
            data: dataUri,
          },
        ],
      }).then((message) => {
        console.log(message);
        if (message == "OK") {
          document.getElementById("my_form").reset();

          alert("Your mail has been sent. Thank you for connecting.");
        } else {
          console.error(message);
          alert("There is error at sending message. ");
        }
      });
    };
  } //-------------------------------
  //-------------------------------Sharon Media
  //-------------------------------
  else if (depart === "Sharon Media") {
    var Body =
      "Name: " +
      name +
      "Date of Birth: " +
      dob +
      "<br>Email: " +
      email +
      "<br>Gender: " +
      gender +
      "<br>Department: " +
      depart +
      "<br>Phone Number: " +
      phone +
      "<br>Skill: " +
      skill +
      "<br>Message: " +
      message;

    //Gets File upload
    var file = document.getElementById("file").files[0];
    console.log(file);
    //Read the File
    var reader = new FileReader();
    reader.readAsBinaryString(file);
    reader.onload = function () {
      var dataUri = "data:" + file.type + ";base64," + btoa(reader.result);

      //Sends Data

      Email.send({
        Host: "smtp.gmail.com",
        Username: "fesandelcompany@gmail.com",
        Password: "#Anything007",
        To: "media@cccsharonparish.org",
        From: "fesandelcompany@gmail.com",
        Subject: "New message on contact from " + name,
        Body: Body,
        Attachments: [
          {
            name: file.name,
            data: dataUri,
          },
        ],
      }).then((message) => {
        console.log(message);
        if (message == "OK") {
          document.getElementById("my_form").reset();

          alert("Your mail has been sent. Thank you for connecting.");
        } else {
          console.error(message);
          alert("There is error at sending message. ");
        }
      });
    };
  }
  //-------------------------------
  //-------------------------------Welfare
  //-------------------------------
  else if (depart === "Welfare") {
    var Body =
      "Name: " +
      name +
      "Date of Birth: " +
      dob +
      "<br>Email: " +
      email +
      "<br>Gender: " +
      gender +
      "<br>Department: " +
      depart +
      "<br>Phone Number: " +
      phone +
      "<br>Skill: " +
      skill +
      "<br>Message: " +
      message;

    //Gets File upload
    var file = document.getElementById("file").files[0];
    console.log(file);
    //Read the File
    var reader = new FileReader();
    reader.readAsBinaryString(file);
    reader.onload = function () {
      var dataUri = "data:" + file.type + ";base64," + btoa(reader.result);

      //Sends Data

      Email.send({
        Host: "smtp.gmail.com",
        Username: "fesandelcompany@gmail.com",
        Password: "#Anything007",
        To: "welfare@cccsharonparish.org",
        From: "fesandelcompany@gmail.com",
        Subject: "New message on contact from " + name,
        Body: Body,
        Attachments: [
          {
            name: file.name,
            data: dataUri,
          },
        ],
      }).then((message) => {
        console.log(message);
        if (message == "OK") {
          document.getElementById("my_form").reset();

          alert("Your mail has been sent. Thank you for connecting.");
        } else {
          console.error(message);
          alert("There is error at sending message. ");
        }
      });
    };
  }
  //-------------------------------
  //-------------------------------Writer
  //-------------------------------
  else if (depart === "Writer") {
    var Body =
      "Name: " +
      name +
      "Date of Birth: " +
      dob +
      "<br>Email: " +
      email +
      "<br>Gender: " +
      gender +
      "<br>Department: " +
      depart +
      "<br>Phone Number: " +
      phone +
      "<br>Skill: " +
      skill +
      "<br>Message: " +
      message;

    //Gets File upload
    var file = document.getElementById("file").files[0];
    console.log(file);
    //Read the File
    var reader = new FileReader();
    reader.readAsBinaryString(file);
    reader.onload = function () {
      var dataUri = "data:" + file.type + ";base64," + btoa(reader.result);

      //Sends Data

      Email.send({
        Host: "smtp.gmail.com",
        Username: "fesandelcompany@gmail.com",
        Password: "#Anything007",
        To: "writers@cccsharonparish.org",
        From: "fesandelcompany@gmail.com",
        Subject: "New message on contact from " + name,
        Body: Body,
        Attachments: [
          {
            name: file.name,
            data: dataUri,
          },
        ],
      }).then((message) => {
        console.log(message);
        if (message == "OK") {
          document.getElementById("my_form").reset();

          alert("Your mail has been sent. Thank you for connecting.");
        } else {
          console.error(message);
          alert("There is error at sending message. ");
        }
      });
    };
  } //-------------------------------
  //-------------------------------Sharon Academy Writers
  //-------------------------------
  else if (depart === "Sharon Academy Teachers") {
    var Body =
      "Name: " +
      name +
      "Date of Birth: " +
      dob +
      "<br>Email: " +
      email +
      "<br>Gender: " +
      gender +
      "<br>Department: " +
      depart +
      "<br>Phone Number: " +
      phone +
      "<br>Skill: " +
      skill +
      "<br>Message: " +
      message;

    //Gets File upload
    var file = document.getElementById("file").files[0];
    console.log(file);
    //Read the File
    var reader = new FileReader();
    reader.readAsBinaryString(file);
    reader.onload = function () {
      var dataUri = "data:" + file.type + ";base64," + btoa(reader.result);

      //Sends Data

      Email.send({
        Host: "smtp.gmail.com",
        Username: "fesandelcompany@gmail.com",
        Password: "#Anything007",
        To: "academy@cccsharonparish.org",
        From: "fesandelcompany@gmail.com",
        Subject: "New message on contact from " + name,
        Body: Body,
        Attachments: [
          {
            name: file.name,
            data: dataUri,
          },
        ],
      }).then((message) => {
        console.log(message);
        if (message == "OK") {
          document.getElementById("my_form").reset();

          alert("Your mail has been sent. Thank you for connecting.");
        } else {
          console.error(message);
          alert("There is error at sending message. ");
        }
      });
    };
  } //-------------------------------
  //-------------------------------Youths
  //-------------------------------
  else if (depart === "Youths") {
    var Body =
      "Name: " +
      name +
      "Date of Birth: " +
      dob +
      "<br>Email: " +
      email +
      "<br>Gender: " +
      gender +
      "<br>Department: " +
      depart +
      "<br>Phone Number: " +
      phone +
      "<br>Skill: " +
      skill +
      "<br>Message: " +
      message;

    //Gets File upload
    var file = document.getElementById("file").files[0];
    console.log(file);

    //Read the File
    var reader = new FileReader();
    reader.readAsBinaryString(file);
    reader.onload = function () {
      var dataUri = "data:" + file.type + ";base64," + btoa(reader.result);

      //Sends Data

      Email.send({
        Host: "smtp.gmail.com",
        Username: "fesandelcompany@gmail.com",
        Password: "#Anything007",
        To: "youth@cccsharonparish.org",
        From: "fesandelcompany@gmail.com",
        Subject: "New message on contact from " + name,
        Body: Body,
        Attachments: [
          {
            name: file.name,
            data: dataUri,
          },
        ],
      }).then((message) => {
        console.log(message);
        if (message == "OK") {
          document.getElementById("my_form").reset();

          alert("Your mail has been sent. Thank you for connecting.");
        } else {
          console.error(message);
          alert("There is error at sending message. ");
        }
      });
    };
  }
  //-------------------------------
  //-------------------------------Evangelism Group
  //-------------------------------
  else if (depart === "Evangelism Group") {
    var Body =
      "Name: " +
      name +
      "Date of Birth: " +
      dob +
      "<br>Email: " +
      email +
      "<br>Gender: " +
      gender +
      "<br>Department: " +
      depart +
      "<br>Phone Number: " +
      phone +
      "<br>Skill: " +
      skill +
      "<br>Message: " +
      message;

    //Gets File upload
    var file = document.getElementById("file").files[0];
    console.log(file);
    //Read the File
    var reader = new FileReader();
    reader.readAsBinaryString(file);
    reader.onload = function () {
      var dataUri = "data:" + file.type + ";base64," + btoa(reader.result);

      //Sends Data

      Email.send({
        Host: "smtp.gmail.com",
        Username: "fesandelcompany@gmail.com",
        Password: "#Anything007",
        To: "evangelism@cccsharonparish.org",
        From: "fesandelcompany@gmail.com",
        Subject: "New message on contact from " + name,
        Body: Body,
        Attachments: [
          {
            name: file.name,
            data: dataUri,
          },
        ],
      }).then((message) => {
        console.log(message);
        if (message == "OK") {
          document.getElementById("my_form").reset();

          alert("Your mail has been sent. Thank you for connecting.");
        } else {
          console.error(message);
          alert("There is error at sending message. ");
        }
      });
    };
  }
}

//Formats the Template
