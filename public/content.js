chrome.runtime.onMessage.addListener(request => {
  if (request.type === 'getHeadlines') {
    const modal = document.createElement('div');
    modal.setAttribute('id', 'basketty::overlay');
    modal.setAttribute("style", "z-index: 2000; position: fixed; width: 300px; height: 100%; right: 0; bottom: 0;"); /* TODO: move to ?.css */
    modal.innerHTML = `<iframe id="basketty::basket" style="height:100%"></iframe>`;
    document.body.appendChild(modal);
    const dialog = document.getElementById("basketty::overlay");
    // dialog.show();
    const iframe = document.getElementById("basketty::basket");  
    iframe.src = chrome.extension.getURL("index.html");
    iframe.frameBorder = 0;
    // dialog.querySelector("button").addEventListener("click", () => {
    //     modal.close();
    //  });
  }
});