function checkPNR() {
    const pnrInput = document.getElementById('pnr').value;
    const pnrResultDiv = document.getElementById('pnrResult');

    // To check if anything is entered or not
    if (pnrInput.trim() === '') {
        pnrResultDiv.innerHTML = '<p>Please enter a valid PNR number.</p>';
    } else {
        pnrResultDiv.innerHTML = `<p>PNR ${pnrInput} is confirmed. Have a safe journey!</p>`;
    }
}
