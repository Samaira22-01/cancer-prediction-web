// Function to show an alert (reminder)
function showAlert(medication, time) {
  alert(`Reminder: Time to take your medication: ${medication} at ${time}`);
}

// Function to send medication reminder based on user input
function sendMedicationReminder(medication, time, frequency) {
  let reminderMessage = `Reminder: Time to take your medication: ${medication} at ${time}`;

  // Set the interval based on frequency (daily, weekly, one-time)
  let interval = 0;
  
  // Daily reminder (every 24 hours)
  if (frequency === 'daily') {
    interval = 24 * 60 * 60 * 1000; // 24 hours in milliseconds
  }
  // Weekly reminder (every 7 days)
  else if (frequency === 'weekly') {
    interval = 7 * 24 * 60 * 60 * 1000; // 7 days in milliseconds
  }

  // One-time reminder
  const reminderTime = new Date(`${new Date().toDateString()} ${time}`);
  const timeDifference = reminderTime - new Date();

  // Set a one-time reminder if the reminder time is later today
  if (timeDifference > 0) {
    setTimeout(() => {
      showAlert(medication, time);
    }, timeDifference);
  }

  // Set recurring reminders (daily or weekly)
  if (interval > 0) {
    setInterval(() => {
      showAlert(medication, time);
    }, interval);
  }
}

// Form submission handler
document.getElementById('trackerForm').addEventListener('submit', function (event) {
  event.preventDefault();

  let appointment = document.getElementById('appointment').value;
  let medication = document.getElementById('medication').value;
  let sideEffects = document.getElementById('sideEffects').value;
  let medicationTime = document.getElementById('medicationTime').value;
  let reminderFrequency = document.getElementById('reminderFrequency').value;

  if (appointment && medication && medicationTime) {
    document.getElementById('appointmentDetails').innerText = `Next Appointment: ${appointment}`;
    document.getElementById('medicationDetails').innerText = `Medication: ${medication}`;
    document.getElementById('sideEffectsDetails').innerText = `Side Effects: ${sideEffects}`;
    document.getElementById('reminderDetails').innerText = `Reminder Frequency: ${reminderFrequency}`;

    document.getElementById('trackerResult').style.display = 'block';

    // Start sending medication reminders based on user input
    sendMedicationReminder(medication, medicationTime, reminderFrequency);
  } else {
    alert("Please fill in all required fields.");
  }
});
