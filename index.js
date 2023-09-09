document.addEventListener("DOMContentLoaded", function () {
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const currentDay = new Date().getDay();
    const currentUTCTime = new Date().getTime();

    const dayOfWeekElement = document.querySelector('[data-testid="currentDayOfTheWeek"]');
    const utcTimeElement = document.querySelector('[data-testid="currentUTCTime"]');

    dayOfWeekElement.textContent = daysOfWeek[currentDay];
    utcTimeElement.textContent = new Date(currentUTCTime).toUTCString();
});
