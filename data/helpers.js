
export const loadNewWindow = (url) => {
    return window.open(url, "_blank");
}


export const currentDayTime = (setDayPeriod, currentTime) => {
    if (currentTime >= 19 || currentTime <= 6) {
        setDayPeriod("night");
    } else if (currentTime >= 6 && currentTime <= 19) {
        setDayPeriod("day");
    } else {
        setDayPeriod(null);
    }
};

export const getRandomFromArray = (setRandom, currentArray) => {
    // check if currentQuotesArray is defined and is an array
    if (Array.isArray(currentArray)) {
        const randomIndex = Math.floor(Math.random() * currentArray.length);
        setRandom(currentArray[randomIndex].param);
    } else {
        console.error('currentArray is not defined or empty');
    }

}

export const shuffle = (array) => {
    const shuffledArray = [...array];

    for (let i = shuffledArray.length - 1; i > 0; i--) {
        const randomIndex = Math.floor(Math.random() * (i + 1));

        [shuffledArray[i], shuffledArray[randomIndex]] = [shuffledArray[randomIndex], shuffledArray[i]]
    }

    return shuffledArray;
}


