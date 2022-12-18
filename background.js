/*
 * File    : background.js
 * Date    : 11/22/2022
 * Author  : Ani
 */

// chrome.tabs.onUpdated.addListener((tabId, tab) => {
//     if (tab.url && tab.url.includes("atlassian.net")) {
//       console.log("On page bg");
//       chrome.tabs.sendMessage(tabId, {
//         state: true
//       });
//     }
// });

const intervalId = setInterval(() => {
  chrome.tabs.sendMessage({state: true});
}, 5000);