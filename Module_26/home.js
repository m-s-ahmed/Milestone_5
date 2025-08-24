const validPin = 1234;
const transactionData = [];

//function to get input value
function getInputValueNumber(id) {
  const inputField = document.getElementById(id);
  const inputFieldValue = inputField.value;
  const inputFieldValueNumber = parseInt(inputFieldValue);
  console.log(inputFieldValueNumber);
  return inputFieldValueNumber;
}

function getInputValue(id) {
  const inputField = document.getElementById(id);
  const inputFieldValue = inputField.value;
  return inputFieldValue;
}

// function to get innerText

function getInnerText(id) {
  const element = document.getElementById(id);
  const elementValue = element.innerText;
  const elementValueNumber = parseInt(elementValue);
  console.log(elementValueNumber);
  return elementValueNumber;
}
// function to set innerText
function setInnerText(value) {
  const availableBalanceElement = document.getElementById("available-balance");
  availableBalanceElement.innerText = value;
}

// function to toggle
function handleToggle(id) {
  const forms = document.getElementsByClassName("form");
  for (const form of forms) {
    // console.log(form);
    form.style.display = "none";
  }
  document.getElementById(id).style.display = "block";
}

//function to toggle button
function handleButtonToggle(id) {
  const formBtns = document.getElementsByClassName("form-btn");

  for (const btn of formBtns) {
    btn.classList.remove("border-[#0874f2]", "bg-[#0874f20d]");
    btn.classList.add("border-gray-300");
  }

  document.getElementById(id).classList.remove("border-gray-3000");
  document
    .getElementById(id)
    .classList.add("border-[#0874f2]", "bg-[#0874f20d]");
}

// add money feature
document
  .getElementById("add-money-btn")
  .addEventListener("click", function (e) {
    e.preventDefault();
    console.log("add money btn clicked");

    // const bank = document.getElementById("bank").value;
    const bank = getInputValue("bank");
    const accountNumber = document.getElementById("account-number").value;

    // const amount = parseInt(document.getElementById("add-amount").value);
    const amount = getInputValueNumber("add-amount");

    if (amount <= 0) {
      alert("invalid amount");
      return;
    }
    // const pin = parseInt(document.getElementById("add-pin").value);
    const pin = getInputValueNumber("add-pin");

    console.log(bank, accountNumber, amount, pin);

    // const availableBalance = parseInt(
    //   document.getElementById("available-balance").innerText
    // );
    const availableBalance = getInnerText("available-balance");

    if (accountNumber.length < 11) {
      alert("Please Provide Valid Account Number");
      return;
    }
    if (pin !== validPin) {
      alert("Please Provide Valid Pin Number");
      return;
    }
    const totalNewAvailableBalance = amount + availableBalance;

    // document.getElementById("available-balance").innerText =
    //   totalNewAvailableBalance;
    setInnerText(totalNewAvailableBalance);
    const data = {
      name: "Add Money",
      date: new Date().toLocaleTimeString(),
    };

    transactionData.push(data);
    console.log(transactionData);
  });

// cash out money feature
document.getElementById("withdraw-btn").addEventListener("click", function (e) {
  e.preventDefault();
  console.log("withdraw btn clicked");

  const amount = parseInt(document.getElementById("withdraw-amount").value);
  const availableBalance = parseInt(
    document.getElementById("available-balance").innerText
  );

  if (amount <= 0 || amount > availableBalance) {
    alert("invalid amount");
    return;
  }
  console.log(amount, availableBalance);
  const totalNewAvailableBalance = availableBalance - amount;
  console.log(totalNewAvailableBalance);
  // document.getElementById("available-balance").innerText =
  //   totalNewAvailableBalance;
  setInnerText(totalNewAvailableBalance);
  const data = {
    name: "Cash Out",
    date: new Date().toLocaleTimeString(),
  };

  transactionData.push(data);
  console.log(transactionData);
});

document
  .getElementById("transactions-button")
  .addEventListener("click", function () {
    const transactionContainer = document.getElementById(
      "transaction-container"
    );
    transactionContainer.innerText = "";

    for (const data of transactionData) {
      const div = document.createElement("div");
      div.innerHTML = `
        <div class=" bg-white rounded-xl p-3 flex justify-between items-center mt-3">
              <div class="flex items-center">
                  <div class="p-3 rounded-full bg-[#f4f5f7]">
                    <img src="./assets/wallet1.png" class="mx-auto" alt="" />
                  </div>
                  <div class="ml-3">
                    <h1>${data.name}</h1>
                    <p>${data.date}</p>
                  </div>
              </div>
      
              <i class="fa-solid fa-ellipsis-vertical"></i>
            </div>
        `;

      transactionContainer.appendChild(div);
    }
  });
//   toggling feature

// document.getElementById("add-button").addEventListener("click", function () {
//   document.getElementById("cash-out-parent").style.display = "none";
//   document.getElementById("transfer-money-parent").style.display = "none";
//   document.getElementById("add-money-parent").style.display = "block";
// });

// document
//   .getElementById("cash-out-button")
//   .addEventListener("click", function () {
//     document.getElementById("add-money-parent").style.display = "none";
//     document.getElementById("transfer-money-parent").style.display = "none";
//     document.getElementById("cash-out-parent").style.display = "block";
//   });

// document
//   .getElementById("transfer-button")
//   .addEventListener("click", function () {
//     document.getElementById("cash-out-parent").style.display = "none";
//     document.getElementById("add-money-parent").style.display = "none";
//     document.getElementById("transfer-money-parent").style.display = "block";
//   });

document.getElementById("add-button").addEventListener("click", function () {
  // const forms = document.getElementsByClassName("form");
  // for (const form of forms) {
  //   // console.log(form);
  //   form.style.display = "none";
  // }
  // document.getElementById("add-money-parent").style.display = "block";

  handleToggle("add-money-parent");
  const formBtns = document.getElementsByClassName("form-btn");

  for (const btn of formBtns) {
    btn.classList.remove("border-[#0874f2]", "bg-[#0874f20d]");
    btn.classList.add("border-gray-300");
  }

  document.getElementById("add-button").classList.remove("border-gray-3000");
  document
    .getElementById("add-button")
    .classList.add("border-[#0874f2]", "bg-[#0874f20d]");
});

document
  .getElementById("cash-out-button")
  .addEventListener("click", function () {
    const forms = document.getElementsByClassName("form");
    for (const form of forms) {
      // console.log(form);
      form.style.display = "none";
    }
    document.getElementById("cash-out-parent").style.display = "block";

    //btn color ar ota

    const formBtns = document.getElementsByClassName("form-btn");

    for (const btn of formBtns) {
      btn.classList.remove("border-[#0874f2]", "bg-[#0874f20d]");
      btn.classList.add("border-gray-300");
    }

    document
      .getElementById("cash-out-button")
      .classList.remove("border-gray-3000");
    document
      .getElementById("cash-out-button")
      .classList.add("border-[#0874f2]", "bg-[#0874f20d]");
  });

document
  .getElementById("transfer-button")
  .addEventListener("click", function () {
    const forms = document.getElementsByClassName("form");
    for (const form of forms) {
      // console.log(form);
      form.style.display = "none";
    }
    document.getElementById("transfer-money-parent").style.display = "block";

    //btn ar ota
    const formBtns = document.getElementsByClassName("form-btn");

    for (const btn of formBtns) {
      btn.classList.remove("border-[#0874f2]", "bg-[#0874f20d]");
      btn.classList.add("border-gray-300");
    }

    document
      .getElementById("transfer-button")
      .classList.remove("border-gray-3000");
    document
      .getElementById("transfer-button")
      .classList.add("border-[#0874f2]", "bg-[#0874f20d]");
  });

document.getElementById("bonus-button").addEventListener("click", function () {
  const forms = document.getElementsByClassName("form");
  for (const form of forms) {
    // console.log(form);
    form.style.display = "none";
  }
  document.getElementById("get-bonus-parent").style.display = "block";
  handleButtonToggle("bonus-button");
});

document.getElementById("bill-button").addEventListener("click", function () {
  handleToggle("pay-bill-parent");
  handleButtonToggle("bill-button");
});

document
  .getElementById("transactions-button")
  .addEventListener("click", function () {
    handleToggle("transactions-parent");
    handleButtonToggle("transactions-button");
  });
