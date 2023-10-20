export const validateBrowser = (browserName, redirectHandler) => {
    let clean_name = browserName.toLowerCase(); // Convert the provided browser name to lowercase for comparison
    const userAgent = window.navigator.userAgent.toLowerCase(); // Get the user agent string of the browser

    if (userAgent.includes(clean_name)) {
        console.log(clean_name); // Log the cleaned browser name to the console
        redirectHandler('/'); // Redirect to the home page using the provided 'redirectHandler' function
        localStorage.setItem("validated", true); // Set a flag in local storage to indicate the browser is validated
        console.log("correct browser name"); // Log a message indicating the browser name is correct
    }
}

// Set a timeout to remove the 'validated' flag from local storage after 3 hours (10,800,000 milliseconds)
setTimeout(() => {
    localStorage.removeItem("validated");
}, 10800000);
