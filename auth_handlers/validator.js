const supportedBrowsers = [
    "chrome",
    "firefox",
    "vivaldi",
    "edge",
    "arc",
    "safari",
    "brave"
]


export const validateBrowser = (browserName, redirectHandler) => {
    let clean_name = browserName.toLowerCase();

    if (supportedBrowsers.includes(clean_name)) {
        redirectHandler("/");
        localStorage.setItem("validated", true);

    }
    else {
        redirectHandler("/insecure_connection");
        localStorage.removeItem("validated");
    }

    console.log("Validating")

}


setTimeout(() => {
    localStorage.removeItem("validated");
}, 3600000);