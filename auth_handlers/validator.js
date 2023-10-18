import { supportedBrowsers } from "../data/db";


export const validateBrowser = (browserName, redirectHandler) => {
    let clean_name = browserName.toLowerCase();

    if (supportedBrowsers.includes(clean_name)) {
        // Set the "validated" key along with a timestamp in milliseconds
        localStorage.setItem("validated", JSON.stringify({
            validated: true,
            timestamp: Date.now()
        }))

        redirectHandler("/");
    }
    else {
        redirectHandler("/insecure_connection");
        localStorage.removeItem("validated");
    }

    console.log("Validating");
}

// Check and remove the "validated" key if it's older than 12 hours
const validateLocalStorage = () => {
    const validatedData = localStorage.getItem("validated");
    if (validatedData) {
        const parsedData = JSON.parse(validatedData);
        if (parsedData.timestamp && (Date.now() - parsedData.timestamp > 12 * 60 * 60 * 1000)) {
            localStorage.removeItem("validated");
        }
    }
};

// Run the check every time the page loads
validateLocalStorage();
