$(document).ready(function () {
    var loadingOverlay = $('#loading-overlay');
    var loadingScreen = $('#loading-screen');
    var div15secs = $('#15secs');
    var cancelButton = $('#cancelButton');

    var timeoutId;

    function showLoader() {
        loadingOverlay.show();
        loadingScreen.show();

        // Set the timeout to show div15secs after 15 seconds
        timeoutId = setTimeout(function () {
            loadingOverlay.hide();
            loadingScreen.hide();
            div15secs.show();
        }, 15000);
    }

    function hideLoader() {
        clearTimeout(timeoutId); // Cancel the timeout
        loadingOverlay.hide();
        loadingScreen.hide();
        div15secs.hide();
    }

    // Show loader when form is submitted
    $('form').submit(function () {
        showLoader();
    });

    // Cancel button click event
    cancelButton.on('click', function () {
        hideLoader();
    });

    // Handle AJAX complete event to hide loader
    $(document).ajaxComplete(function () {
        hideLoader();
    });
});