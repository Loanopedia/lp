document.addEventListener("DOMContentLoaded", function () {
  const currencyRates = {
    INR: 83.12, // INR is the only currency
  };

  const currencySymbols = {
    INR: "₹", // INR symbol
  };

  function calculateLoan() {
    let amount = document.getElementById("amount").value;
    let interest = document.getElementById("interest").value;
    let tenure = document.getElementById("tenure").value;

    // Ensure values are not empty and are positive numbers
    if (!amount || !interest || !tenure || amount <= 0 || interest < 0 || tenure <= 0) {
      alert("Please enter valid positive numbers.");
      return;
    }

    amount = parseFloat(amount);
    interest = parseFloat(interest);
    tenure = parseFloat(tenure);

    // Convert loan amount to INR (only INR is considered now)
    const amountInINR = amount / currencyRates.INR;

    // Calculate monthly payment in INR
    const monthlyInterest = interest / 100 / 12;
    const numberOfPayments = tenure * 12;
    let monthlyPaymentINR;

    if (monthlyInterest === 0) {
      monthlyPaymentINR = amountInINR / numberOfPayments; // Simple division for zero interest
    } else {
      monthlyPaymentINR =
        (amountInINR * monthlyInterest) /
        (1 - Math.pow(1 + monthlyInterest, -numberOfPayments));
    }

    // Convert final payment back to INR
    const convertedPayment = (monthlyPaymentINR * currencyRates.INR).toFixed(2);

    document.getElementById("result").innerText = `${currencySymbols.INR}${convertedPayment} INR`;
  }

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