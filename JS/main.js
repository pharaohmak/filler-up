/** Makram Ibrahim
 * 3.6 Code Exercise 06: HTML Forms
 * Aug 28, 2022
 */

// Problem #1

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
        document.querySelector("#cup-result").value = 0
    }
    else { // Convert Gallons to Cups
        cups = gallons * 16;
        document.querySelector("#cup-result").value = cups
        document.querySelector("#pint-result").value = 0;
        document.querySelector("#quart-result").value = 0
    }
})


// Problem #2
// You will need to have validation for the number inputs. 
// Make sure they can not be left blank and they should only be able to accept positive values. 

document.querySelector("#rank-btn").addEventListener("click", function (e) {
    let dvds = parseInt(document.querySelector("#dvds").value)
    let blueRays = parseInt(document.querySelector("#blue-rays").value)
    let ultraViolets = parseInt(document.querySelector("#ultra-violets").value)

    movies = dvds + blueRays + ultraViolets

    if (movies < 50) {
        document.querySelector("#rank-result").innerHTML = `Your collection contains only ${movies} movies, which makes you a bronze star member.`
        document.querySelector("#rank-img").src = "/img/bronzeStar.jpg"
    } else if (movies > 50 && movies < 100) {
        document.querySelector("#rank-result").innerHTML = `Your collection contains ${movies} movies, which makes you a silver star member.`
        document.querySelector("#rank-img").src = "/img/silverStar.jpg"

    } else if (movies > 100) {
        document.querySelector("#rank-result").innerHTML = `Wow! Your collection contains ${movies} movies, which makes you a gold star member.`
        document.querySelector("#rank-img").src = "/img/goldStar.jpg"

    } else {

    }
})