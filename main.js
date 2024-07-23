document.getElementById('convert').addEventListener('click', function() {
    const gallons = parseFloat(document.getElementById('gallons').value);
    const conversionType = document.querySelector('input[name="conversion"]:checked').value;

    if (isNaN(gallons) || !conversionType) {
        alert('Please enter a number of gallons and select a conversion type.');
        return;
    }

    let result;
    switch (conversionType) {
        case 'quart':
            result = gallons * 4;
            document.getElementById('quart-result').value = result;
            document.getElementById('pint-result').value = '';
            document.getElementById('cup-result').value = '';
            break;
        case 'pint':
            result = gallons * 8;
            document.getElementById('quart-result').value = '';
            document.getElementById('pint-result').value = result;
            document.getElementById('cup-result').value = '';
            break;
        case 'cup':
            result = gallons * 16;
            document.getElementById('quart-result').value = '';
            document.getElementById('pint-result').value = '';
            document.getElementById('cup-result').value = result;
            break;
    }

    document.querySelector('.results').style.display = 'block';
});