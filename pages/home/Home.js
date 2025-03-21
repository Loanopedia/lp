const buttons = document.querySelectorAll('.name');

buttons.forEach(button => {
  button.addEventListener('click', function() {

    const infoType = button.getAttribute('data-info');
    showInfo(infoType);
  });
});

function showInfo(infoType) {
  const infoDisplay = document.getElementById('display-info');

  let content = '';
  
  switch (infoType) {
    case 'bene':
      content = `
      <div class="inside-info">
      <h2>Benefits</h2>
        <ul>
            <li>Low interest rates</li>
            <li>Homeownership</li>
            <li>Longer tenures</li>
            <li>Tax Benefits</li>
            <li>Free credit card</li>
            <li>Fixed Monthly Payments</li>
            <li>Home Improvement Opportunities</li>
            <li>Opportunity to Rent Out Part of Your Property</li>
            <li>credit score improvement</li>
            <li>Higher loan amount</li>
            <li>Low processing charges</li>
         </ul>
         </div>`;
      break;
    case 'feat':
      content = `<div class="inside-info">
        </div>`;
      break;
    case 'eligi':`
    <div class="inside-info">
      <h2>Eligibility</h2>
      content = Resident Type:
      Resident Indians
      Non-Resident Indians (NRIs) holding Indian passport or Persons of Indian origin (PIOs) holding foreign passport or Overseas Citizens of India (OCI)
      Minimum Age:
      Applicant:- 21 Years
      Co-applicant:- 18 Years
      Maximum Loan Amount
      Mumbai : Rs. 20 Crores
      Hyderabad, New Delhi (including National Capital Region) and Bengaluru: Rs.7.50 Crore
      Other Metros  : Rs. 5.00 Crores
      Urban Areas : Rs. 3.00 Crores
      Semi-urban and Rural : Rs. 1.00 Crores
      Chandigarh, Panchkula & Mohali:- Rs. 5 Crores
      Income and Employment Status
      Credit Score
       Property Type
       Employment History;
       </div>`
      break;
    case 'int':
      content = '<h3>Interest Rates & Charges</h3><p>Here are the interest rates...</p>';
      break;
    case 'doc':
      content = '<h3>Documents Required</h3><p>Here are the required documents...</p>';
      break;
    case 'mitc':
      content = '<h3>Most Important Terms and Conditions (MITC)</h3><p>Here are the terms and conditions...</p>';
      break;
    default:
      content = '<p>No information available.</p>';
      break;
  }

  infoDisplay.innerHTML = content;
}



