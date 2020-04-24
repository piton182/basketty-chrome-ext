chrome.contextMenus.create({ 
    id: 'basketty',
    title: 'basketty',
    contexts: ['all']
  });

chrome.contextMenus.onClicked.addListener(() => {
    chrome.tabs.query({active: true, currentWindow: true}, tabs => {
        chrome.tabs.sendMessage(tabs[0].id, {type: 'getHeadlines'});
    });
});