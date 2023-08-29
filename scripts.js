function setCurrentTime() {
    const currentTime = new Date();
    const hours = String(currentTime.getHours()).padStart(2, '0');
    const minutes = String(currentTime.getMinutes()).padStart(2, '0');
    document.getElementById("startTime").value = `${hours}:${minutes}`;
}

function calculateEndTime() {
    const startTimeInput = document.getElementById("startTime").value;
    const hoursInput = Number(document.getElementById("hours").value);
    const minutesInput = Number(document.getElementById("minutes").value);

    if (!startTimeInput || (isNaN(hoursInput) && isNaN(minutesInput))) {
        alert("Please provide a valid start time and duration.");
        return;
    }

    const [startHours, startMinutes] = startTimeInput.split(":").map(Number);
    const date = new Date();
    date.setHours(startHours + hoursInput);
    date.setMinutes(startMinutes + minutesInput);

    let endHours = date.getHours();
    const endMinutes = String(date.getMinutes()).padStart(2, '0');
    let ampm = 'AM';

    if (endHours >= 12) {
        ampm = 'PM';
        if (endHours > 12) endHours -= 12;
    }
    if (endHours === 0) endHours = 12;

    document.getElementById("endTime").innerText = `${endHours}:${endMinutes} ${ampm}`;
}

function setTheCurrentTime(inputId) {
    const currentTime = new Date();
    const hours = String(currentTime.getHours()).padStart(2, '0');
    const minutes = String(currentTime.getMinutes()).padStart(2, '0');
    document.getElementById(inputId).value = `${hours}:${minutes}`;
}

function calculateTimeDifference() {
    const startTimeInput = document.getElementById("startTime").value;
    const endTimeInput = document.getElementById("endTime").value;

    if (!startTimeInput || !endTimeInput) {
        alert("Please provide valid start and end times.");
        return;
    }

    const [startHours, startMinutes] = startTimeInput.split(":").map(Number);
    const [endHours, endMinutes] = endTimeInput.split(":").map(Number);

    const startDate = new Date(0, 0, 0, startHours, startMinutes);
    const endDate = new Date(0, 0, 0, endHours, endMinutes);

    let differenceInMs = endDate - startDate;

    if (differenceInMs < 0) {
        differenceInMs += 24 * 60 * 60 * 1000;  // Adjust for crossing midnight
    }

    const hoursDifference = Math.floor(differenceInMs / (1000 * 60 * 60));
    const minutesDifference = Math.floor((differenceInMs % (1000 * 60 * 60)) / (1000 * 60));

    document.getElementById("timeDifference").innerText = `${hoursDifference} Hours ${minutesDifference} Minutes`;
}
