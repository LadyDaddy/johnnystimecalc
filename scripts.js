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

    const endHours = String(date.getHours()).padStart(2, '0');
    const endMinutes = String(date.getMinutes()).padStart(2, '0');

    document.getElementById("endTime").innerText = `${endHours}:${endMinutes}`;
}
