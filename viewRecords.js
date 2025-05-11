// This function will load the records when the user clicks on "View My Records"
function loadRecords() {
    // Sample data for mock records
    const records = [
      { id: 1, type: 'Consultation', details: 'Lung Cancer Consultation with Dr. Smith', date: '2025-04-20' },
      { id: 2, type: 'Treatment', details: 'Chemotherapy Session', date: '2025-04-22' },
      { id: 3, type: 'Medication', details: 'Aspirin - 1 tablet every day', date: '2025-04-25' },
      { id: 4, type: 'Symptom Check', details: 'Shortness of breath improving', date: '2025-04-26' },
      { id: 5, type: 'Treatment Tracker', details: 'Second round of chemotherapy completed', date: '2025-04-28' }
    ];
  
    // Hide the button once records are displayed
    document.querySelector('button').style.display = 'none';
  
    // Show the records container
    document.getElementById('recordsContainer').style.display = 'block';
    
    // Get the records list element to insert records dynamically
    const recordList = document.getElementById('recordList');
    recordList.innerHTML = ''; // Clear the existing list
  
    // Loop through the records and create list items
    records.forEach(record => {
      const listItem = document.createElement('li');
      listItem.innerHTML = `<strong>${record.type}:</strong> ${record.details} <br> <strong>Date:</strong> ${record.date}`;
      recordList.appendChild(listItem);
    });
  
    // After loading records, create the progress chart
    createProgressChart();
  }
  
  // This function will create the progress chart
  function createProgressChart() {
    const ctx = document.getElementById('progressChart').getContext('2d');
    
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Day 1', 'Day 7', 'Day 14', 'Day 21', 'Day 28'],
        datasets: [{
          label: 'Recovery Progress (%)',
          data: [20, 40, 60, 80, 95], // Progress points
          backgroundColor: 'rgba(0, 123, 255, 0.2)',
          borderColor: 'rgba(0, 123, 255, 1)',
          borderWidth: 2,
          fill: true,
          tension: 0.4, // Smooth curve
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
            max: 100
          }
        }
      }
    });
  }
  