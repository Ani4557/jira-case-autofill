/*
 * File    : background.js
 * Date    : 11/22/2022
 * Author  : Ani
 */

chrome.webNavigation.onCompleted.addListener((details) => {
    if (details.frameId === 0) {
        chrome.tabs.get(details.tabId, (tab) => {
            if(tab.url === details.url) {
                console.log("On page bg");
                chrome.tabs.sendMessage(details.tabId, {
                    state: true
                });
            }
        });
    }
});
