chrome.tabs.onUpdated.addListener((tabId, tab) => {
    if (tab.url && tab.url.includes("atlassian.net")) {
      chrome.tabs.sendMessage(tabId, {
        state: "ON_PAGE"
      });
    }
});