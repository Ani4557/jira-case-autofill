/*
 * File    : popup.js
 * Date    : 11/22/2022
 * Author  : Ani
 */

async function getActiveTabURL() {
  const tabs = await chrome.tabs.query({
      currentWindow: true,
      active: true
  });
  return tabs[0];
}

(() => {
  const fillSerialNumberButton = document.getElementById("fill-serial-number");
  fillSerialNumberButton.addEventListener("click", async () => {
    const activeTab = await getActiveTabURL();
    if (activeTab.url.includes("splitvolt.atlassian")) {
      chrome.tabs.sendMessage(activeTab.id, {
        action: "FILL"
      });
    }
  });
})();
