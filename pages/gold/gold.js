const buttons = document.querySelectorAll('.name');

buttons.forEach(button => {
  button.addEventListener('click', function() {
    const infoType = button.getAttribute('data-info');
    
    // Hide all info sections
    document.querySelectorAll('.info-content').forEach(section => {
      section.style.display = 'none';
    });

    // Show the selected info section
    const selectedInfo = document.getElementById(infoType);
    if (selectedInfo) {
      selectedInfo.style.display = 'block';
    }
  });
});
