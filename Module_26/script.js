// Login button functionality
document.getElementById("loginButton").addEventListener("click", function (e) {
  e.preventDefault();
  //   console.log("Login Button Clicked");
  //   console.log(e);

  const mobileNumber = 12345678910;
  const pinNumber = 1234;

  const mobileNumberValue = document.getElementById("mobile-number").value;
  const mobileNumberValueConverted = parseInt(mobileNumberValue);

  const pinNumberValue = document.getElementById("pin-number").value;
  const pinNumberValueConverted = parseInt(pinNumberValue);

  //   console.log(mobileNumberValueConverted, pinNumberValueConverted);
  if (
    mobileNumberValueConverted === mobileNumber &&
    pinNumberValueConverted === pinNumber
  ) {
    //console.log("All Value Matched");
    window.location.href = "./home.html";
  } else {
    //console.log("Invalid Credentials");
    alert("Invalid Credentials");
  }
});
