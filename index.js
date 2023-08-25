function calculateImpact() {
    const vehicleType = document.getElementById('vehicleType').value;
    const distance = parseFloat(document.getElementById('distance').value);
    const fuelEfficiency = parseFloat(document.getElementById('fuelEfficiency').value);
    const emissionFactor = parseFloat(document.getElementById('emissionFactor').value);

    let impact = 0;

    if (vehicleType === 'car' && distance > 0 && fuelEfficiency > 0 && emissionFactor > 0) {
        impact = (distance / fuelEfficiency) * emissionFactor;
    } else if (vehicleType === 'bus' && distance > 0 && emissionFactor > 0) {
        impact = (distance * emissionFactor);
    } else if (vehicleType === 'bike' && distance > 0) {
        impact = 0;
    } else {
        alert('Please fill in all the fields with valid values.');
        return;
    }

    document.getElementById('impactResult').innerText = `Your environmental impact is approximately ${impact.toFixed(2)} kg CO2.`;
    document.getElementById('result').style.display = 'block';
}