function calculateLoan() {
    const amount = parseFloat(document.getElementById('amount').value);
    const interest = parseFloat(document.getElementById('interest').value);
    const tenure = parseFloat(document.getElementById('tenure').value);
  
    if (isNaN(amount) || isNaN(interest) || isNaN(tenure)) {
      alert("Please enter valid numbers.");
      return;
    }
  
    const monthlyInterest = interest / 100 / 12;
    const numberOfPayments = tenure * 12;
  
    const monthlyPayment =
      (amount * monthlyInterest) /
      (1 - Math.pow(1 + monthlyInterest, -numberOfPayments));
  
    document.getElementById('result').innerText = `$${monthlyPayment.toFixed(2)}`;
  }