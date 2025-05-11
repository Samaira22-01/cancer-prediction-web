document.addEventListener("DOMContentLoaded", function () {
  const questions = [
    { en: "Do you have a cough?", hi: "क्या आपको खांसी है?" },
    { en: "Do you have chest pain?", hi: "क्या आपको सीने में दर्द है?" },
    { en: "Do you have breathlessness?", hi: "क्या आपको सांस लेने में दिक्कत है?" },
    { en: "Do you feel fatigued or weak?", hi: "क्या आप थकान या कमजोरी महसूस कर रहे हैं?" },
    { en: "Do you have unexplained weight loss?", hi: "क्या आपका वजन बिना कारण घट रहा है?" },
    { en: "Do you experience constant fever?", hi: "क्या आपको लगातार बुखार आ रहा है?" },
    { en: "Do you have a family history of cancer?", hi: "क्या आपके परिवार में कैंसर का इतिहास है?" },
    { en: "Have you noticed any unusual lumps or bumps?", hi: "क्या आपने कोई असामान्य गांठ देखी है?" },
    { en: "Do you have frequent headaches?", hi: "क्या आपको अक्सर सिरदर्द होता है?" },
    { en: "Do you have difficulty swallowing?", hi: "क्या आपको निगलने में परेशानी होती है?" },
    { en: "Do you have skin lesions or abnormal moles?", hi: "क्या आपकी त्वचा पर कोई असामान्य घाव या मस्से हैं?" },
    { en: "Do you have blood in your stool?", hi: "क्या आपके मल में खून आता है?" },
    { en: "Do you have persistent abdominal pain?", hi: "क्या आपको लगातार पेट दर्द रहता है?" },
    { en: "Have you noticed changes in your breast or nipple?", hi: "क्या आपने अपने स्तन या निप्पल में कोई बदलाव देखा है?" },
    { en: "Do you have a persistent cough with blood?", hi: "क्या आपको खून के साथ लगातार खांसी आती है?" }
  ];

  const form = document.getElementById("symptomForm");
  const submitBtn = document.getElementById("submitBtn");
  const resultDiv = document.getElementById("result");
  const cancerType = document.getElementById("cancerType");
  const restartBtn = document.getElementById("restartBtn");

  let answers = new Array(questions.length).fill(null);

  function createQuestions() {
    questions.forEach((question, index) => {
      const questionDiv = document.createElement('div');
      questionDiv.className = 'question';
      questionDiv.innerHTML = `
        <p><strong>${question.en}</strong><br>${question.hi}</p>
        <button type="button" data-index="${index}" data-value="yes">Yes / हाँ</button>
        <button type="button" data-index="${index}" data-value="no">No / नहीं</button>
      `;
      form.appendChild(questionDiv);
    });
  }

  createQuestions();

  form.addEventListener('click', function(e) {
    if (e.target.tagName === 'BUTTON') {
      const index = parseInt(e.target.getAttribute('data-index'));
      const value = e.target.getAttribute('data-value') === 'yes';

      answers[index] = value;

      // Highlight selection
      const buttons = e.target.parentElement.querySelectorAll('button');
      buttons.forEach(btn => btn.classList.remove('selected'));
      e.target.classList.add('selected');

      if (answers.every(ans => ans !== null)) {
        submitBtn.style.display = "block";
      }
    }
  });

  submitBtn.addEventListener('click', function () {
    const positive = answers.filter(ans => ans).length;
    let diagnosis = "";
    let detectedCancer = "";
    let stage = "";

    // Cancer type detection
    if (answers[0] && answers[1] && answers[2] && answers[3]) {
      detectedCancer = "🫁 Lung Cancer";
    } else if (answers[13] && answers[14]) {
      detectedCancer = "🎗️ Breast Cancer";
    } else if (answers[5] && answers[6] && answers[7]) {
      detectedCancer = "🦠 Colon Cancer";
    } else if (answers[9] && answers[10]) {
      detectedCancer = "🌞 Skin Cancer";
    } else {
      detectedCancer = "✅ No strong signs of Cancer";
    }

    // Stage detection based on how many YES answers
    if (positive >= 1 && positive <= 3) {
      stage = "🟢 Stage 1 (Early Stage)";
    } else if (positive >= 4 && positive <= 6) {
      stage = "🟡 Stage 2 (Moderate Stage)";
    } else if (positive >= 7) {
      stage = "🔴 Stage 3 (Advanced Stage)";
    } else {
      stage = "✅ No Symptoms detected";
    }

    // Full Diagnosis Text
    diagnosis = `Cancer Type: ${detectedCancer}\n\nStage: ${stage}`;

    cancerType.innerText = diagnosis;

    resultDiv.style.display = "block";
    resultDiv.classList.add('show');

    submitBtn.style.display = "none";
    restartBtn.style.display = "block";
  });

  restartBtn.addEventListener('click', function () {
    answers = new Array(questions.length).fill(null);
    resultDiv.style.display = "none";
    resultDiv.classList.remove('show');
    cancerType.innerText = "";
    submitBtn.style.display = "none";
    restartBtn.style.display = "none";
    form.innerHTML = '';
    createQuestions();
  });

});
