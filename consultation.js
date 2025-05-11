// consultation.js
document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('consultationForm');
  const successModal = document.getElementById('successModal');
  const closeModalBtn = document.getElementById('closeModal');

  form.addEventListener('submit', function(event) {
    event.preventDefault();

    let name = document.getElementById('name').value.trim();
    let contact = document.getElementById('contact').value.trim();
    let specialty = document.getElementById('doctorSpecialty').value;
    let cancerType = document.getElementById('cancerType').value;
    let cancerStage = document.getElementById('cancerStage').value;
    let appointmentDate = document.getElementById('appointmentDate').value;

    if (name && contact && specialty && cancerType && cancerStage && appointmentDate) {
      // Show modal
      successModal.style.display = 'block';

      // Fill booking details
      document.getElementById('nameDisplay').innerHTML = `<strong>Patient Name:</strong> ${name}`;
      document.getElementById('contactDisplay').innerHTML = `<strong>Contact Number:</strong> ${contact}`;
      document.getElementById('doctorSpecialtyDisplay').innerHTML = `<strong>Doctor Specialty:</strong> ${specialty}`;
      document.getElementById('cancerTypeDisplay').innerHTML = `<strong>Cancer Type:</strong> ${cancerType}`;
      document.getElementById('cancerStageDisplay').innerHTML = `<strong>Cancer Stage:</strong> ${cancerStage}`;
      document.getElementById('appointmentDateDisplay').innerHTML = `<strong>Appointment Date:</strong> ${appointmentDate}`;

      document.getElementById('confirmation').style.display = 'block';

      // Reset form
      form.reset();
    } else {
      alert("Please fill in all fields properly.");
    }
  });

  // Close modal
  closeModalBtn.addEventListener('click', function() {
    successModal.style.display = 'none';
  });

  // Close modal if clicking outside the modal
  window.addEventListener('click', function(event) {
    if (event.target === successModal) {
      successModal.style.display = 'none';
    }
  });
});
