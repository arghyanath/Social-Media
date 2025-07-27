export function getTimePassed(givenDateString: string) {
    const givenDate: Date = new Date(givenDateString);
    const now: Date = new Date();

    const timeDifferenceMs: number = now.getTime() - givenDate.getTime();

    const seconds: number = Math.floor(timeDifferenceMs / 1000);
    const minutes: number = Math.floor(seconds / 60);
    const hours: number = Math.floor(minutes / 60);
    const days: number = Math.floor(hours / 24);
    const weeks: number = Math.floor(days / 7);

    const years: number = now.getFullYear() - givenDate.getFullYear();
    let months: number = now.getMonth() - givenDate.getMonth();

    if (now.getDate() < givenDate.getDate()) {
        months--;
    }

    if (months < 0) {
        months += 12;
    }

    let timeElapsedString: string = "";

    if (years > 0) {
        timeElapsedString = `${years} year${years > 1 ? 's' : ''} `;
    } else if (months > 0) {
        timeElapsedString = `${months} month${months > 1 ? 's' : ''} `;
    } else if (weeks > 0) {
        timeElapsedString = `${weeks} week${weeks > 1 ? 's' : ''} `;
    } else if (days > 0) {
        timeElapsedString = `${days} day${days > 1 ? 's' : ''} `;
    } else if (hours > 0) {
        timeElapsedString = `${hours} hour${hours > 1 ? 's' : ''} `;
    } else if (minutes > 0) {
        timeElapsedString = `${minutes} minute${minutes > 1 ? 's' : ''} `;
    } else if (seconds > 0) {
        timeElapsedString = `${seconds} second${seconds > 1 ? 's' : ''} `;
    } else {
        timeElapsedString = "Just now";
    }

    return timeElapsedString


}