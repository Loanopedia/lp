document.addEventListener("DOMContentLoaded", function () {
  const currencyRates = {
    INR: 83.12, // INR is the only currency
  };

  const currencySymbols = {
    INR: "₹", // INR symbol
  };

  function calculateLoan() {
    const amount = parseFloat(document.getElementById("amount").value);
    const interest = parseFloat(document.getElementById("interest").value);
    const tenure = parseFloat(document.getElementById("tenure").value);

    if (isNaN(amount) || isNaN(interest) || isNaN(tenure)) {
      alert("Please enter valid numbers.");
      return;
    }

    // Convert loan amount to INR (only INR is considered now)
    const amountInINR = amount / currencyRates.INR;

    // Calculate monthly payment in INR
    const monthlyInterest = interest / 100 / 12;
    const numberOfPayments = tenure * 12;
    const monthlyPaymentINR =
      (amountInINR * monthlyInterest) /
      (1 - Math.pow(1 + monthlyInterest, -numberOfPayments));

    // Convert final payment back to INR
    const convertedPayment = (monthlyPaymentINR * currencyRates.INR).toFixed(2);

    document.getElementById("result").innerText = `${currencySymbols.INR}${convertedPayment} INR`;
  }

  const calculatorSection = document.querySelector(".calculator");

  // Remove currency selector completely, as INR is the only currency used now.
  const currencySelector = document.querySelector("#currency-selector");
  if (currencySelector) {
    currencySelector.remove();
  }

  // Update Loan Amount label to reflect INR symbol
  const amountLabel = document.querySelector("label[for='amount']");
  amountLabel.innerHTML = `Loan Amount (<span id='currency-symbol'>₹</span>):`;

  // Style the calculator container for better alignment
  const calculatorContainer = document.querySelector(".calculator-container");
  calculatorContainer.style.textAlign = "center";
  calculatorContainer.style.margin = "20px auto";
  calculatorContainer.style.display = "flex";
  calculatorContainer.style.flexDirection = "column";
  calculatorContainer.style.alignItems = "center";

  // Expose functions globally
  window.calculateLoan = calculateLoan;
});
