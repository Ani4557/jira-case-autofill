/*
 * File    : contentScript.js
 * Date    : 11/22/2022
 * Author  : Ani
 */

(() => {
    chrome.runtime.onMessage.addListener((obj, sender, response) => {
        const {state} = obj;
        // if (state) {
        //     console.log("a");
        // }
        if (state)
            console.log("a");
    });
})();