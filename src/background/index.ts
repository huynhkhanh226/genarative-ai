chrome.runtime.onInstalled.addListener(() => {
  console.log("Extension installed!");
  chrome.tabs.create({ url: "http://localhost:3000" });
});
