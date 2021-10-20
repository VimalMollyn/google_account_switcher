chrome.action.onClicked.addListener((tab) => {
    let tabUrl = tab.url;
    let accountNumber = parseInt(tabUrl.match(/\/u\/\d\//gm)[0].slice(3,-1)); // gets the account number from the url
    let nextAccountNumber = accountNumber + 1;
    let newUrl = tabUrl.split(/\/u\/\d\//gm).join("/u/" + nextAccountNumber + "/")

    // go to the next page
    chrome.tabs.update({
        'url': newUrl
    });

  });