// script.js
function calculateProgress() {
    const targetValue = document.getElementById('targetValue').value;
    const currentValue = document.getElementById('currentValue').value;

    if (targetValue > 0 && currentValue >= 0) {
        const progress = (currentValue / targetValue) * 100;
        const progressText = `Progress: ${progress.toFixed(2)}%`;
        document.getElementById('progressText').innerText = progressText;
        document.getElementById('progressFill').style.width = `${progress}%`;
    } else {
        document.getElementById('progressText').innerText = "Please enter valid values.";
        document.getElementById('progressFill').style.width = `0%`;
    }
}
