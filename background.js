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

const storeSync = (key, value) => {
  let jsonFile = {};
  jsonFile[key] = JSON.stringify({
    "value": value
  });
  chrome.storage.sync.set(jsonFile);
}

(() => {
  const enableCheckbox = document.getElementById("enable-checkbox");
  enableCheckbox.addEventListener("change", () => {
      if (enableCheckbox.checked)
        storeSync("isEnabled", 1);
      else
        storeSync("isEnabled", 0);
  });
  
  enableCheckbox.addEventListener("onload", () => {

  });

  // const testButton = document.getElementById("test-button");
  // testButton.addEventListener("click", () => {
  //   const a = getSync();  // returns 0 or 1
  //   alert(`returned value: ${a}`); // returns undefined
  // });

  const fillSerialNumberButton = document.getElementById("fill-serial-number");
  fillSerialNumberButton.addEventListener("click", async () => {
    const activeTab = await getActiveTabURL();
    console.log(activeTab.url);
    if (activeTab.url.includes("splitvolt.atlassian")) {
      chrome.tabs.sendMessage(activeTab.id, {
        action: "FILL"
      });
    }
  });
})();

const getSync = () => {
  chrome.storage.sync.get("isEnabled", (obj) => {
    const o = JSON.parse(obj["isEnabled"]);
    alert(`value inside function: ${o["value"]}`); // returns 0 or 1
    return o["value"]; // returns undefined
  });
};
