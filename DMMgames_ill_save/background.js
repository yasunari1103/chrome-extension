chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "capture") {
    chrome.scripting.executeScript({
      target: { tabId: message.tabId },
      function: captureScreenshot,
    });
  }
});
