document.addEventListener("DOMContentLoaded", function () {
  const currencyRates = {
    USD: 1,
    EUR: 0.92,
    GBP: 0.78,
    INR: 83.12,
    JPY: 147.5,
  };

  const currencySymbols = {
    USD: "$",
    EUR: "€",
    GBP: "£",
    INR: "₹",
    JPY: "¥",
  };

  function updateCurrencySymbol() {
    const currency = document.getElementById("currency").value;
    document.getElementById("currency-symbol").innerText = currencySymbols[currency];
  }

  function calculateLoan() {
    const amount = parseFloat(document.getElementById("amount").value);
    const interest = parseFloat(document.getElementById("interest").value);
    const tenure = parseFloat(document.getElementById("tenure").value);
    const currency = document.getElementById("currency").value;

    if (isNaN(amount) || isNaN(interest) || isNaN(tenure)) {
      alert("Please enter valid numbers.");
      return;
    }

    const monthlyInterest = interest / 100 / 12;
    const numberOfPayments = tenure * 12;
    const monthlyPayment =
      (amount * monthlyInterest) /
      (1 - Math.pow(1 + monthlyInterest, -numberOfPayments));

    const convertedPayment = (monthlyPayment * currencyRates[currency]).toFixed(2);
    document.getElementById("result").innerText = `${currencySymbols[currency]}${convertedPayment} ${currency}`;
  }

  const calculatorSection = document.querySelector(".calculator");
  const currencySelector = document.createElement("div");
  currencySelector.style.textAlign = "center";
  currencySelector.style.marginBottom = "10px";
  currencySelector.innerHTML = `
    <label for="currency">Currency:</label>
    <select id="currency" onchange="updateCurrencySymbol()">
      <option value="USD">USD</option>
      <option value="EUR">EUR</option>
      <option value="GBP">GBP</option>
      <option value="INR">INR</option>
      <option value="JPY">JPY</option>
    </select>
  `;
  calculatorSection.insertBefore(currencySelector, calculatorSection.firstChild);

  const amountLabel = document.querySelector("label[for='amount']");
  amountLabel.innerHTML = `Loan Amount (<span id='currency-symbol'>$</span>):`;

  const calculatorContainer = document.querySelector(".calculator-container");
  calculatorContainer.style.textAlign = "center";
  calculatorContainer.style.margin = "20px auto";
  calculatorContainer.style.display = "flex";
  calculatorContainer.style.flexDirection = "column";
  calculatorContainer.style.alignItems = "center";

  window.calculateLoan = calculateLoan;
  window.updateCurrencySymbol = updateCurrencySymbol;
});
