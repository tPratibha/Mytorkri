document.getElementById('phoneForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const phoneNumber = document.getElementById('phoneNumber').value;
    if (!phoneNumber.startsWith('+964')) {
        alert('Please enter a valid Iraq phone number.');
        return;
    }

    const url = 'https://d3398n96t5wqx9.cloudfront.net/UsersAquisition/';
    const data = {
        campaign_id: '6a0fa162-fb4c-4074-a6d4-402744e3590b',
        phone_number: phoneNumber
    };

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Encryption-Key': 'FtmJ7frzTyWOzintybbqIWzwwclcPtaI',
            'Access-Token': '0e186445-0647-417c-ae27-8098533f1914'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('response').innerText = 'Success: ' + data.message;
    })
    .catch(error => {
        document.getElementById('response').innerText = 'Error: ' + error.message;
    });
});
