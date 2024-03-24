export function time(dateString) {
    const date = new Date(dateString);
    const hours = padZero(date.getHours());
    const minutes = padZero(date.getMinutes());
    return `${hours}:${minutes}`;
}

function padZero(number) {
    return number.toString().padStart(2, "0");
}

// Function to check if a date is today
export const isToday = (someDate) => {
    const today = new Date();
    return someDate.getDate() === today.getDate() &&
        someDate.getMonth() === today.getMonth() &&
        someDate.getFullYear() === today.getFullYear();
};

// Function to format the date
export const formatDate = (date) => {
    if (isToday(date)) {
        return 'Today';
    }
    return date.toLocaleDateString('en-US', {
        weekday: 'long', // "Monday"
        year: 'numeric', // "2021"
        month: 'long', // "July"
        day: 'numeric' // "19"
    });
};
