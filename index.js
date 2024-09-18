document.addEventListener('DOMContentLoaded', function () {
    const cardForm = document.getElementById('cardForm');
    const modal = document.getElementById('modal');
    const certificateContent = document.getElementById('certificateContent');
    const closeModal = document.querySelector('.close');
    const generateButton = document.getElementById('generateCertificate'); //P: add to select generate certificate button
  
    // Hide the modal initially
    modal.style.display = 'none';
  
    //cardForm.addEventListener('submit', function (e) {
    //  e.preventDefault();

    generateButton.addEventListener("click", function(submission) { //P: change e in param to submission 
        submission.preventDefault();
    
  
      // 🚨 Get input values
      const studentNameInput = document.getElementById('studentName');
      const personalMessageInput = document.getElementById('personalMessage');
      const courseNameInput = document.getElementById('courseName'); 
  
      const studentName = studentNameInput.value;
      const personalMessage = personalMessageInput.value;
      const courseName = courseNameInput ? courseNameInput.value : "a course"; // Fallback to "a course" if no input
  
      if (studentName.trim() === '' || personalMessage.trim() === '' || courseName.trim() === '') {
        alert('Please fill in all fields');
        return;
      } // P: show alert message if no course name is entered :D
  
      // 🚨 Generate certificate content dynamically
      certificateContent.innerHTML = `
      <h1>Certificate of Achievement</h1>
      <p>This is to certify that</p>
      <h3>${studentName}</h3>
      <p>has almost completed the</p>
      <h4>${courseName} Course</h4>
      <p>with legendary perseverance and world-class bad-assery for never giving up \u{1F3C6}</p>
      <img src="logo.png" alt="CodeSpace logo" style="max-width: 320px; margin-bottom: 20px;">
      <p>${personalMessage}</p>
    `; // P: add contents using html tags for innerhtml and a unicode for the trophe
    
      //  Display the modal
      modal.style.display = 'block';
  
      // Clear the form inputs
      studentNameInput.value = '';
      personalMessageInput.value = '';
      if(courseNameInput) courseNameInput.value = '';
    });
  
    //  🚨 Close the modal when the close button is clicked
    closeModal.addEventListener('click', function () {
      modal.style.display = 'none';
    });
  });
  