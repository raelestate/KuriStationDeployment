function submitForm() {
    document.getElementById('submitButton').style.display = 'none';
    $('#loading-screen').show();
    $('#loading-overlay').show();
    // Show the 15secs div after 15 seconds
    setTimeout(function () {
        $('#15secs').show();
    }, 10000);
}




