var name = document.getElementById("name");
var age = document.getElementById("age");
var status = document.getElementById("status");

fetch("user.json")
  .then(response => response.json())
  .then(value => console.log(value))
