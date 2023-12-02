document.addEventListener("DOMContentLoaded", () => {
    const fileInput = document.getElementById("fileInput");
    const previewImage = document.getElementById("previewImage");

    fileInput.addEventListener("change", function () {
        const file = fileInput.files[0];

        if (file) {
            const reader = new FileReader();
            reader.onload = function (e) {
                previewImage.src = e.target.result;
                previewImage.style.display = "block";
            };

            reader.readAsDataURL(file);
        }
    });
});
//for the search
const categories = document.querySelectorAll('.categories');
categories.forEach(button => {
    button.addEventListener('click', function() {
        button.classList.toggle('active');
        updateSelectedDaysInput(); // Call a function to update the hidden input
    });
});

//for the edit profile
const days = document.querySelectorAll('.days');
        days.forEach(button => {
            button.addEventListener('click', function() {
                button.classList.toggle('active');
                event.preventDefault();
            });
        });
// function updateSelectedDaysInput() {
//     const selectedDays = Array.from(document.querySelectorAll('.days.active')).map(button => button.id);
//     const selectedDaysInput = document.getElementById('selectedDaysInput');
//     selectedDaysInput.value = JSON.stringify(selectedDays);
// }

function updateSelectedDaysInput() {
    const selectedDays = Array.from(document.querySelectorAll('.days.active')).map(button => button.id);
    const selectedDaysInput = document.getElementById('selectedDaysInput');
    selectedDaysInput.value = JSON.stringify(selectedDays);
}


function getSelectedTime() {
    const hour = document.getElementById('hour').value;
    const minute = document.getElementById('minute').value;
    const ampm = document.getElementById('ampm').value;
}