document.addEventListener("DOMContentLoaded", function () {
    const success = document.getElementById("success");
    const info = document.getElementById("info");
    const warning = document.getElementById("warning");
    const error = document.getElementById("error");

    const closeSuccess = document.getElementById("close-success");
    const closeInfo = document.getElementById("close-info");
    const closeWarning = document.getElementById("close-warning");
    const closeError = document.getElementById("close-error");

    // Close the notification after 5 seconds
    setTimeout(() => {
        success.classList.add("closed");
    }, 5000);
    setTimeout(() => {
        info.classList.add("closed");
    }, 5000);
    setTimeout(() => {
        warning.classList.add("closed");
    }, 5000);
    setTimeout(() => {
        error.classList.add("closed");
    }, 5000);

    if(closeError){
        closeError.addEventListener("click", () => {
        error.classList.add("closed");
        });
    }else if(closeSuccess){
        closeSuccess.addEventListener("click", () => {
        success.classList.add("closed");
    });
    }else if(closeInfo){
        closeInfo.addEventListener("click", () => {
            info.classList.add("closed");
        });        
    }else{
    closeWarning.addEventListener("click", () => {
        warning.classList.add("closed");
    });        
    }

    // Click event handler for the close button





});