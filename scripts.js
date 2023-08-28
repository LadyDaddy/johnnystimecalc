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
