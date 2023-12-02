// Get references to the select elements
const startHourSelect = document.getElementById('start-hour');
const startMinuteSelect = document.getElementById('start-minute');
const startAmpmSelect = document.getElementById('start-ampm');
const endHourSelect = document.getElementById('end-hour');
const endMinuteSelect = document.getElementById('end-minute');
const endAmpmSelect = document.getElementById('end-ampm');

// Get a reference to the hidden input field
const timeselected = document.getElementById('timeselected');

// Add an event listener for form submission
document.getElementById('myForm').addEventListener('submit', function(event) {
    // Prevent the default form submission behavior
    //event.preventDefault();

    // Get the selected values from the select elements
    const startHour = startHourSelect.value;
    const startMinute = startMinuteSelect.value;
    const startAmpm = startAmpmSelect.value;
    const endHour = endHourSelect.value;
    const endMinute = endMinuteSelect.value;
    const endAmpm = endAmpmSelect.value;

    // Create a string representing the selected time range
    const selectedTimeRange = `${startHour}:${startMinute} ${startAmpm} until ${endHour}:${endMinute} ${endAmpm}`;

    // Set the value of the hidden input field to the selected time range
    timeselected.value = selectedTimeRange;

    // Now you can submit the form with the selected time range included
    this.submit();
});