(() => {
    chrome.runtime.onMessage.addListener((obj, sender, response) => {
        const {state} = obj;
        if (state === "ON_PAGE") {
            console.log("On Page");
        }
    });
})();