function imageValidateForm() {
    var fileInputs = ['idFrontImage', 'idBackImage', 'selfie', 'imageInput2'];

    for (var i = 0; i < fileInputs.length; i++) {
        var fileInput = document.getElementById(fileInputs[i]);
        var errorMessage = document.getElementById('errorMessage' + (i + 1));

        // Reset previous error message
        errorMessage.innerHTML = '';

        // Check if a file is selected
        if (fileInput.value === '') {
            errorMessage.innerHTML = "Please choose a file.";
            return false;
        }

        // Extract the file extension
        var fileExtension = fileInput.value.split('.').pop().toLowerCase();

        // Check allowed file types
        var allowedExtensions = ['jpg', 'jpeg', 'png', 'gif'];
        if (allowedExtensions.indexOf(fileExtension) === -1) {
            errorMessage.innerHTML = "Invalid file type. Please choose a valid file.";
            return false;
        }
    }

    return true; // Form submission allowed
}

function displayFileName(input) {
    var label = input.previousElementSibling; // Get the label element
    label.innerHTML = '' + input.files[0].name;
}
