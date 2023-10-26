document.addEventListener("DOMContentLoaded", function() {
   document.getElementById('copyButton').addEventListener('click', function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        let currentTab = tabs[0];
        let title = currentTab.title;
        let url = currentTab.url;

        let orgContent = `* ${title}\n${url}\n`;
        navigator.clipboard.writeText(orgContent).then(() => {
            window.close(); // Close the popup after copying
        }).catch(error => {
            console.error("Clipboard write failed:", error);
        });
    });
});
 });

