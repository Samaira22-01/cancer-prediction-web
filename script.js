document.getElementById('predictionForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Collect user input values from the form
    const radius = parseFloat(document.getElementById('radius').value);
    const texture = parseFloat(document.getElementById('texture').value);
    const perimeter = parseFloat(document.getElementById('perimeter').value);
    const area = parseFloat(document.getElementById('area').value);
    const smoothness = parseFloat(document.getElementById('smoothness').value);

    // Call the prediction function (this can be replaced with backend API)
    const prediction = predictCancer(radius, texture, perimeter, area, smoothness);

    // Display prediction result
    document.getElementById('predictionResult').innerText = prediction;
  });

  // Simple prediction logic (this will eventually be replaced by the backend)
  function predictCancer(radius, texture, perimeter, area, smoothness) {
    if (radius > 10 && texture > 15) {
      return "Malignant (Cancerous)";
    } else {
      return "Benign (Non-Cancerous)";
    }
  }

  