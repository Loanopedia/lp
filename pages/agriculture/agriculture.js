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
      content = `<h3>Benefits</h3><p>Here are the benefits...</p>`;
      break;
    case 'feat':
      content = '<h3>Features</h3><p>Here are the features...</p>';
      break;
    case 'eligi':
      content = '<h3>Eligibility</h3><p>Here are the eligibility criteria...</p>';
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
