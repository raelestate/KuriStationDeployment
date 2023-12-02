console.log('Script executed!');

function handleUnload() {
    console.log('Unload event triggered!');
    submitForm();
}

window.addEventListener('beforeunload', handleUnload);

window.addEventListener('popstate', function (event) {
    console.log('popstate event triggered!');
    // Handle the popstate event, e.g., show loader again
    handleUnload();
});

function submitForm() {
    console.log('submitForm function called!');
    var submitButton = document.getElementById('submitButton');
    if (submitButton) {
        submitButton.style.display = 'none';
    } else {
        console.log('Error: submitButton element not found!');
    }

    var loadingScreen = $('#loading-screen');
    var loadingOverlay = $('#loading-overlay');
    var secs15 = $('#15secs');

    if (loadingScreen.length && loadingOverlay.length && secs15.length) {
        loadingScreen.show();
        loadingOverlay.show();
        // Show the 15secs div after 15 seconds
        setTimeout(function () {
            secs15.show();
        }, 10000);
    } else {
        console.log('Error: One or more elements not found!');
    }
}
