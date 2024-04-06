// Target Button
document.querySelector('#convert').addEventListener("click", function (e) {
    // Get Value From User Input
    gallons = document.querySelector('#gallons').value;
    // Validate Checked Radio Button
    let quarts = document.querySelector("#quart").checked;
    let pints = document.querySelector("#pint");
    let cups = document.querySelector("#cup");

    // Calculate Conversion
    if (document.querySelector("#quart").checked === true) { // Convert Gallons to Quarts
        quarts = gallons * 4;
        document.querySelector("#quart-result").value = quarts;
        document.querySelector("#pint-result").value = 0;
        document.querySelector("#cup-result").value = 0
    } else if (document.querySelector('#pint').checked === true) { // Convert Gallons to Pints
        pints = gallons * 8;
        document.querySelector("#pint-result").value = pints;
        document.querySelector("#quart-result").value = 0;
        document.querySelector("#cup-result").value = 0;
    }
    else { // Convert Gallons to Cups
        cups = gallons * 16;
        document.querySelector("#cup-result").value = cups
        document.querySelector("#pint-result").value = 0;
        document.querySelector("#quart-result").value = 0
    }
})