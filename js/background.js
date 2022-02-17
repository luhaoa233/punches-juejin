chrome.webRequest.onBeforeSendHeaders.addListener(
    function(details) {
      details.requestHeaders.push({ name: 'origin', value: 'https://juejin.cn' });
      return { requestHeaders: details.requestHeaders };
    },
    { urls: ['*://*.juejin.cn/*'] },
    ['blocking', 'requestHeaders', 'extraHeaders']
  );