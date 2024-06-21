chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (tab.url && tab.url.includes("leetcode.com/problems") && changeInfo.status === 'complete') {
    const name = tab.url.split("/problems/")[1];
    console.log(name);
    chrome.tabs.sendMessage(tabId, {
      type: "NEW"
    });
  }
});
